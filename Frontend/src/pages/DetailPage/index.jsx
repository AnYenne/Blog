import { Box, Typography, Container, Button } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import ContentWithTOC from "../../components/ContentWithTOC"


function DetailPage() {
    const [data, setData] = useState([])
    const { id } = useParams()
    const [content, setContent] = useState('')
    const navigation = useNavigate()

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/posts/${id}`)
            .then((response) => setData(response.data[0]))
            .catch((error) => console.error('error', error))
    }, [id])

    
    // useEffect(() => {
    //     data[0] && setContent(data[0].content)
    // }, [data])


    return (
        <Container>
            <Box>
                <Button variant="outlined" sx={{ margin: '10px 0px', color: 'navy' }} onClick={() => navigation('edit', { state: { postData: data } })}>
                    edit
                </Button>
            </Box>
            {data && (
                <Box sx={{ display: 'flex', padding: '20px 0px', justifyContent: 'space-between' }}>
                    <Box sx={{ overflow: 'hidden', width: '782px' }}>
                        <img style={{width:'500px', height:'500px'}} src={data.images[0]} alt="hero"/>
                        <Typography component='h1' sx={{ lineHeight: '36px', fontSize: { xs: '28px' }, fontWeight: '700' }}> {data.title}</Typography>
                        <Typography component='p'>{data.createdAt}</Typography>

                        <Typography component='div' sx={{ paddingTop: '24px' }}>
                            <div dangerouslySetInnerHTML={{ __html: data.content }} />
                        </Typography>

                    </Box>
                    <Box sx={{ width: { md: '360px' } }}>
                        <Typography component='div' sx={{ fontWeight: '700' }}> Mục lục</Typography>
                        <ContentWithTOC content={data.content} />
                    </Box>
                </Box>)}
        </Container>
    )
}
export default DetailPage