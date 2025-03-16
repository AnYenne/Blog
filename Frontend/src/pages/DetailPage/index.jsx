import { Box, Typography, Container} from "@mui/material"
import axios from "axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router"


function DetailPage() {
    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        axios
        .get(`http://localhost:3000/api/posts/${id}`)
        .then((response) => setData(response.data))
        .catch((error)=> console.error('error',error))
    },[id])

    return (
        <Container>
             {data[0] && (
                <Box sx={{display:'flex', width:'full-width', height:'fit-content'}}>
                    <Box sx={{flexGrow:'1'}}>
                        <Typography component='h1' sx={{lineHeight:'36px',fontSize:{xs:'28px'}, fontWeight:'700'}}> {data[0].title}</Typography>
                        <Typography component='p'>{data[0].createdAt}</Typography>
                        
                        <Typography component='p'>{data[0].content}</Typography>
                    </Box>
                    <Box>
                        <Typography component='div' sx={{width:{md:'360px'}, fontWeight:'700'}}> Mục lục</Typography>
                    </Box>
                </Box>)}
        </Container>
       
    )
}
export default DetailPage