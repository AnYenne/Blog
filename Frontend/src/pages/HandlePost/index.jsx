import { Box, Button, TextField } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useLocation, useNavigate, useParams } from "react-router";


const HandlePost = (type) => {
    const {id} = useParams()
    const navigation = useNavigate()
    const location = useLocation();
    const oldDate = location.state.postData || null ;

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState([])
    var oldFile = oldDate.images;
    const [oldFiles, setOlFiles] = useState(oldFile)

    useEffect(()=>{
        if(oldDate){
            setContent(oldDate.content)
            setTitle(oldDate.title)
            setDescription(oldDate.description)
        } else{
            setContent('')
            setTitle('')
            setDescription('')
            setFile([])
        }
        
   },[])

    console.log('edit ne', oldDate)

   const data = {
    title,
    description,
    content,
    images: oldDate == null ? file : oldFiles
}
    const handleSubmitPost = (event) => {
    event.preventDefault()
    if(oldDate === null){
        axios
        .post('http://localhost:3000/api/posts',data)
        .then(res => {
            console.log(res);
            console.log("submit success data")
        })
        .catch((error) => console.error(error));
        console.log('CREATE')
    } else{
        axios
        .put(`http://localhost:3000/api/posts/${id}`,data)
        .then(res => {
            console.log(res);
            console.log("update success data")
        })
        .catch((error) => console.error(error));
        console.log('edit')
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
                placeholder="describe the content"/>
            <TextField 
                sx={{width:'100%', padding: '10px 26px'}} 
                variant="outlined" 
                id="" 
                type="file" 
                value={file}
                onChange ={(ev) => {
                    setFile(ev.target.value);
                    setOlFiles(ev.target.value)
                }}
                />
            <Box sx={{width:'100%', padding: '10px 26px'}}>
                <ReactQuill
                    theme="snow" 
                    value={content} 
                    onChange={setContent} 
                    placeholder="Viết gì đó..."
                />
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