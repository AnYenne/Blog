import { Box, Button, TextField } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useLocation } from "react-router";


const HandlePost = (type) => {
    const location = useLocation();
    const oldDate = location.state.postData || null ;

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState([])

    useEffect(()=>{
        if(oldDate){
            setContent(oldDate.content)
            setTitle(oldDate.title)
            setDescription(oldDate.description)
        } else{
            setContent('')
            setTitle('')
            setDescription('')
        }
        
   },[])

    console.log('edit ne', oldDate)

   const data = {
    title,
    description,
    content,
    images: file,
}
    const handleSubmitPost = (event) => {
    console.log(data)
    event.preventDefault()
    type == 'create' && axios
        .post('http://localhost:3000/api/posts',data)
        .then(res => {
            console.log(res);
            console.log("submit success data")
        })
        .catch((error) => console.error(error));
    type == 'edit' && axios
        .put('http://localhost:3000/api/posts',data)
        .then(res => {
            console.log(res);
            console.log("submit success data")
        })
        .catch((error) => console.error(error));
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
                onChange ={(ev) => setFile(ev.target.value)}
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