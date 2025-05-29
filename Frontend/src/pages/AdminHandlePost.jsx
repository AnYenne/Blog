import { useEffect, useState } from "react";

import axios from "axios";
import 'react-quill-new/dist/quill.snow.css';
import { useLocation, useNavigate, useParams } from "react-router";

import Editor from "../components/Editor.jsx";
import UploadCloudinary from "../components/UploadCloudinary.jsx";

import { Box, Button, Container, TextField } from "@mui/material"
import AdminSideBar from "../components/AdminSideBar.jsx";


const AdminHandlePost = () => {
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
        navigation(-1);

    } else{
        axios
        .put(`http://localhost:3000/api/posts/${id}`,data)
        .then(res => {
        })
        .catch((error) => console.error(error));
        navigation(-1);

    }
   
   }

    return(
        <>
        <AdminSideBar />
        <Container maxWidth="xl" sx={{ background: '#f7f9fb', minHeight: '100vh', py:4}}>
            <Button 
            variant="outlined" 
            sx={{ marginLeft:'110px', backgroundColor: 'yellow', color:'#green'}}
            onClick={()=>navigation(-1)}>
                Quay lại
            </Button>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-start', paddingLeft:'80px'}}>
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
                    <Editor onChange={setContent} content={content} />
                </Box>
                <Button 
                    sx={{width:'300px', color:'#ffa500', fontFamily:'Nunito', padding:'12px', backgroundColor:'#060842', margin:'10px 26px'  }} 
                    variant="contained" 
                    type="submit">
                        Submit
                </Button>
            
            </form>
            </Box>
        </Container>
        </>
    )
}
export default AdminHandlePost