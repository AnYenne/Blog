import { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router'

import {Button, Typography, Box, Card, CardContent, CardMedia,CardActions, Pagination} from '@mui/material'


const ListPost = () => {
    const [postsApi,setPostApi] = useState([])
    useEffect(() => {
      axios
        .get('http://localhost:3000/api/posts')
        .then((response)=> setPostApi(response.data))
        .catch((error) => console.error("error:", error))
    },[])


    //pagination
    const [itemsPerPageButton, setItemsPerPageButton] = useState(8)
    const itemsPerPage = itemsPerPageButton;
    const totalPages = Math.ceil(postsApi/itemsPerPage)
    const [page, setPage] = useState(1)

    //set Card to current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = postsApi.slice(startIndex, endIndex)

  

    return(
        <Box sx={{width: 'full-width'}}>
            <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, justifyContent:'space-between', alignItems:'center',color:'#FFA500', fontFamily:'Nunito', fontWeight:'600'}}>
                <Typography variant='h5' sx={{padding:{xs:'14px 0px 14px 0px'}}}>Featured blog posts</Typography>
                <Button onClick={()=>setItemsPerPageButton(postsApi.length)} variant='contained' sx={{backgroundColor:'#060842', color:'#FFA500', fontFamily:'Nunito', fontWeight:'600'}}>Views all posts</Button>
            </Box>
            <Box sx={{paddingTop:'20px'}}>
              <Box
                  sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
                    gap: 2,
                  }}
                  >
                {postsApi && currentItems.map((post, index)=>{
                  return (
                  

                    <Card key={index}>

                      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                          <Box>
                            <CardMedia component='img'
                              alt='image'
                              height='300'
                              image={post.images.length == 1 ? post.images : post.images[1]}
                            ></CardMedia>
                            <CardContent sx={{height:'144px'}}>
                              <Typography component='div' variant='h5' sx={{paddingBottom:'12px'}}> {post.title}</Typography>
                              <Typography 
                              variant='body2' 
                              sx={{display: '-webkit-box', WebkitBoxOrient:'vertical', WebkitLineClamp: '2', overflow:'hidden'}}>
                                {post.description}
                              </Typography>
                            </CardContent>
                          </Box>
                          <Box sx={{display:'flex', flexDirection:'colume', alignItems:'center', justifyContent:'space-between', padding:'16px 16px 24px' }}>
                            <Typography>{post.createdAt}</Typography>
                            <CardActions>
                              <Link to={`/posts/${post._id}`}>
                                <Button 
                                variant='contained' 
                                sx={{width:{xs:'200px', lg:'120px'},padding:{xs:'14px 0', md:'none'},backgroundColor:'#060842', color:'#FFA500', fontFamily:'Nunito', fontWeight:'600'}}
                                >
                                  read
                                </Button>
                              </Link>
                            </CardActions>
                          </Box>
                      </Box>
                      
                    </Card>
                  )
                })}
              </Box>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center', padding:'24px'}}>
                <Pagination count={totalPages} defaultPage={page} page={page} onChange={(event, value) => setPage(value)} size='medium' variant='outlined' shape='rounded'/>
            </Box>
        </Box>
    )
}
export default ListPost