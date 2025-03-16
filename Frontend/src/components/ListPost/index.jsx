import {Button, Typography, Box, Card, CardContent, CardMedia,CardActions, Pagination} from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'


const ListPost = () => {
    const [postsApi,setPostApi] = useState([])
    useEffect(() => {
      axios
        .get('http://localhost:3000/api/posts')
        .then((response)=> setPostApi(response.data))
        .catch((error) => console.error("error:", error))
    },[])

    // const postsApi = [
    //     {
    //         id: "67b8473e4bf548e8a805111c",
    //         title: "bài học đầu tiên",
    //         description: "trong này sẽ là mô tả nội dung các bài viết",
    //         content: "nội dung bài viết dài sẽ ở trong này",
    //         createdAt: "2025-03-23T12:30:06Z",
    //         images: [
    //           "https://morico.life/wp-content/uploads/2023/05/RNI-Films-IMG-1A7FDCF6-7CCB-47EB-9B1B-874425C7FC50-853x1280.jpg"
    //         ]
    //       },
    //       {
    //         id: "65d23a7f7b7c3b1a5e3f1a2b",
    //         title: "Cách học lập trình hiệu quả",
    //         description: "Học lập trình không chỉ cần chăm chỉ mà còn cần tư duy logic.",
    //         content: "Học lập trình không chỉ cần chăm chỉ mà còn cần tư duy logic.",
    //         createdAt: "2025-03-07T10:00:00Z",
    //         images: [
    //           "https://morico.life/wp-content/uploads/2022/08/Dinner-vu%C3%B4ng.png"
    //         ]
    //       },
    //       {
    //         id: "65d23a7f7b7c3b1a5e3f1a2c",
    //         title: "Làm thế nào để trở thành lập trình viên giỏi?",
    //         description: "Trở thành lập trình viên giỏi cần phải thực hành và không ngừng học hỏi.",
    //         content: "Trở thành lập trình viên giỏi cần phải thực hành và không ngừng học hỏi.",
    //         createdAt: "2025-03-06T15:30:00Z",
    //         images: [
    //           "https://morico.life/wp-content/uploads/2022/08/Houjicha-vu%C3%B4ng.png",
    //           "https://morico.life/wp-content/uploads/2022/08/Kakigori-vu%C3%B4ng.png"
    //         ]
    //       },
    //       {
    //         id: "65d23a7f7b7c3b1a5e3f1a2d",
    //         title: "Tại sao nên học JavaScript?",
    //         description: "JavaScript là một trong những ngôn ngữ lập trình phổ biến nhất thế giới.",
    //         content: "JavaScript là một trong những ngôn ngữ lập trình phổ biến nhất thế giới.",
    //         createdAt: "2025-03-05T08:45:00Z",
    //         images: [
    //           "https://morico.life/wp-content/uploads/2022/08/tori-teriyaki-bento-A.png",
    //           "https://morico.life/wp-content/uploads/2022/08/kobushi-sushi-set.png",
    //           "https://morico.life/wp-content/uploads/2022/08/enoki-sashimi-set.png"
    //         ]
    //       }
        
    // ]

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
                              <Link to={`/post/${post._id}`}>
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