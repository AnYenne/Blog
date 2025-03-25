import { useEffect, useState } from "react";

import axios from "axios";
import 'react-quill-new/dist/quill.snow.css';
import { useLocation, useNavigate, useParams } from "react-router";

import Editor from "../../components/Editor";
import UploadCloudinary from "../../components/UploadCloudinary";

import { Box, Button, TextField } from "@mui/material"


const HandlePost = () => {
    const {id} = useParams()
    const navigation = useNavigate()
    const location = useLocation();
    const beforeEdit = location.state?.postData || null ;

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState([])
    

    useEffect(()=>{
        if(beforeEdit){
            setContent(beforeEdit.content)
            setTitle(beforeEdit.title)
            setDescription(beforeEdit.description)
            setFile(beforeEdit.images[0])
        } else{
            setContent('')
            setTitle('')
            setDescription('')
            setFile([])
        }
   },[])

   const onUploadSuccess = (url) => {
        setFile(url)
   }

    const data = {
    title,
    description,
    content,
    images: file
    }

    

    const handleSubmitPost = (event) => {
    event.preventDefault()
    if(beforeEdit === null){
        axios
        .post('http://localhost:3000/api/posts',data)
        .then(res => res)
        .catch((error) => console.error(error));
    } else{
        axios
        .put(`http://localhost:3000/api/posts/${id}`,data)
        .then(res)
        .catch((error) => console.error(error));
        navigation(`/post/${id}`)
    }
   
   }

    return(
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
        <form onSubmit={(e) => handleSubmitPost(e)}>
            <TextField 
                sx={{width:'100%', padding: '10px 26px'}} 
                variant="outlined" 
                id="" 
                type="text" 
                value={title}
                onChange ={(ev) => setTitle(ev.target.value)}
                placeholder="title"/>
            <TextField 
                sx={{width:'100%', padding: '10px 26px'}} 
                variant="outlined" 
                id="" 
                type="text" 
                value={description}
                onChange ={(ev) => setDescription(ev.target.value)}
                placeholder="describe the content"
            />
            <UploadCloudinary onUploadSuccess={onUploadSuccess}/>
            
            <Box sx={{width:'100%', padding: '10px 26px'}}>
                <Editor onChange={setContent} content={content}/>
            </Box>
            <Button 
                sx={{width:'300px', color:'#ffa500', fontFamily:'Nunito', padding:'12px', backgroundColor:'#060842', margin:'10px 26px'  }} 
                variant="contained" 
                type="submit">
                    Submit
            </Button>
           
        </form>
        
        </Box>
    )
}
export default HandlePost