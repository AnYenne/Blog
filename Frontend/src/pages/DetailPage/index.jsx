import { Box, Typography, Container, Button} from "@mui/material"
import axios from "axios"
import { useEffect,useState } from "react"
import { useNavigate, useParams } from "react-router"


function DetailPage() {
    const [data, setData] = useState([])
    const {id} = useParams()
    const [content, setContent] = useState('')
    const navigation = useNavigate()

    useEffect(()=>{
        axios
        .get(`http://localhost:3000/api/posts/${id}`)
        .then((response) => setData(response.data))
        .catch((error)=> console.error('error',error))
    },[id])

    useEffect(()=>{
        {data[0] && setContent(data[0].content)}
    },[data])
    return (
        <Container>
            <Box>
                <Button variant="outlined" onClick={()=> navigation('edit', {state: {postData:data[0]} })}> 
                    edit
                </Button>
            </Box>
             {data[0] && (
                <Box sx={{display:'flex', padding:'20px 0px', justifyContent:'space-between' }}>
                    <Box sx={{ overflow:'hidden', width:'782px'}}>
                        <Typography component='h1' sx={{lineHeight:'36px',fontSize:{xs:'28px'}, fontWeight:'700'}}> {data[0].title}</Typography>
                        <Typography component='p'>{data[0].createdAt}</Typography>
                        
                        <Typography component='p' sx={{paddingTop:'24px'}}>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                        </Typography>
                            
                    </Box>
                    <Box sx={{width:{md:'360px'}}}>
                        <Typography component='div'sx={{fontWeight:'700'}}> Mục lục</Typography>
                    </Box>
                </Box>)}
        </Container>
       
    )
}
export default DetailPage