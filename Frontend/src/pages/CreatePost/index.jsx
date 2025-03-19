import { Box, TextField } from "@mui/material"
import { useState } from "react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';


const CreatePost = () => {
   const [content, setContent] = useState('')

    return(
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
        <form>
            <TextField sx={{width:'100%', padding: '10px 26px'}} variant="outlined" id="" type="text" placeholder="title"/>
            <TextField sx={{width:'100%', padding: '10px 26px'}} variant="outlined" id="" type="text" placeholder="describe the content"/>
            <TextField sx={{width:'100%', padding: '10px 26px'}} variant="outlined" id="" type="file" />
            <Box sx={{width:'100%', padding: '10px 26px'}}>
                <ReactQuill
                    theme="snow" 
                    value={content} 
                    onChange={setContent} 
                    placeholder="Viết gì đó..."
                />
            </Box>
           
        </form>
        
        </Box>
    )
}
export default CreatePost