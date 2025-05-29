import { List, ListItem, Container, Card, Box, Typography, Stack, Icon, Button, Grid } from "@mui/material"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router"
import AdminSideBar from "../components/AdminSideBar"

const AdminPostList = () =>{
    const [data, setData] = useState([])
    const [view, setView] = useState('list') // 'list', 'image', 'detail'
    const { id } = useParams()
    const navigation = useNavigate()

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/posts/`)
            .then((response) => setData(response.data))
            .catch((error) => console.error('error', error))
    }, [id])

    const deletePost = (idPost) => {
        axios 
            .delete(`http://localhost:3000/api/posts/${idPost}`)
            .then(()=>{
                const newData = data.filter(item => item.id !== idPost)
                setData( newData )
                window.location.reload()
            })
            .catch(error => {
                console.log(error)
        })
    }

    return (
        <>
        <AdminSideBar />
        <Container maxWidth="xl" sx={{ background: '#f7f9fb', minHeight: '100vh', py:4 }}>
            <Stack direction='row' sx={{ paddingLeft:'80px', width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Box sx={{display:'flex', padding: 0}} >
                    <Card sx={{ margin: '0 8px', cursor: 'pointer', bgcolor: view==='list' ? 'orange' : '#fff' }} onClick={()=>setView('list')}>
                        <Typography sx={{ padding: 1}}>List</Typography>
                    </Card>
                    <Card sx={{ margin: '0 8px', cursor: 'pointer', bgcolor: view==='image' ? 'orange' : '#fff' }} onClick={()=>setView('image')}>
                        <Typography sx={{ padding: 1}}>Image</Typography>
                    </Card>
                    <Card sx={{ margin: '0 8px', cursor: 'pointer', bgcolor: view==='detail' ? 'orange' : '#fff' }} onClick={()=>setView('detail')}>
                        <Typography sx={{ padding: 1}}>Detail</Typography>
                    </Card>
                </Box>
                <Button variant="outlined" sx={{ width: 'fit-content', background:'orange', color:'#333'}} onClick={() => navigation('/admin/create/post')}>Create new post</Button>
            </Stack>
            {/* List View */}
            {view === 'list' && (
                <List sx={{ paddingLeft:'80px'}} >
                    {data.map((post)=> (
                        <ListItem key={post._id} disablePadding sx={{ mb: 2 }}>
                            <Card style={{display:'flex', alignItems:'center', justifyContent:'flex-start', width:'100%' }}>
                                <Box>
                                    <img 
                                    src={post.images?.[0] || '/src/assets/icon.jpg'} 
                                    alt={post.title}
                                    style={{width: 56, height:56, objectFit:'cover' ,borderRadius: 8 }}
                                    />
                                </Box>
                                <Box sx={{paddingLeft: 2, flex: 1}}>
                                    <Typography variant="subtitle1" fontWeight={600} noWrap>{post.title}</Typography>
                                    <Stack direction='row' spacing={2} sx={{mt: 0.5}}>
                                        <Stack  direction="row" spacing={0.5} alignItems="center">
                                            <Icon sx={{fontSize: 18, color: '#888'}}>comments</Icon>
                                            <Typography variant="caption" color="text.secondary"> {post.comment?.length || 0}</Typography>
                                        </Stack>
                                        <Stack  direction="row" spacing={0.5} alignItems="center">
                                            <Icon sx={{fontSize: 18, color: '#888'}}>visibility</Icon>
                                            <Typography variant="caption" color="text.secondary"> {post.views || 0}</Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Button variant="outlined" sx={{ width: 'fit-content',  color:'#333', margin: '0 8px'}}
                                      onClick={() => navigation(`/admin/posts/${post._id}/edit`, { state: { postData: post }})}
                                    >
                                        Edit
                                    </Button>
                                    <Button variant="outlined" sx={{ width: 'fit-content',  color:'#333', margin: '0 8px'}}
                                     onClick={()=> deletePost(post._id)}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </Card>
                        </ListItem>
                    ))}
                </List>
            )}
            {/* Image View */}
            {view === 'image' && (
                <Grid container spacing={2} sx={{ paddingLeft:'80px', mt: 2 }}>
                    {data.map((post) => (
                        <Grid item xs={12} sm={6} md={3} key={post._id}>
                            <Card sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', boxShadow: 2, ":hover":{
                                opacity: '0.4'
                            }  }}>
                                <img
                                    src={post.images?.[0] || '/src/assets/icon.jpg'}
                                    alt={post.title}
                                    style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8 }}
                                />
                                <Typography variant="subtitle1" fontWeight={600} noWrap sx={{ mt: 1,  }}>{post.title}</Typography>
                                <Box sx={{}}>
                                    <Button variant="outlined" sx={{ width: 'fit-content',  color:'#333', margin: '0 8px'}}
                                      onClick={() => navigation(`/admin/posts/${post._id}/edit`, { state: { postData: post }})}
                                    >
                                        Edit
                                    </Button>
                                    <Button variant="outlined" sx={{ width: 'fit-content',  color:'#333', margin: '0 8px'}}
                                    onClick={()=> deletePost(post._id)}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </Card>
                            
                        </Grid>
                    ))}
                </Grid>
            )}
            {/* Detail View */}
            {view === 'detail' && (
                <List sx={{ paddingLeft:'80px'}} >
                    {data.map((post)=> (
                        <ListItem key={post._id} disablePadding sx={{ mb: 2 }}>
                            <Card style={{display:'flex', flexDirection:'column', alignItems:'flex-start', width:'100%', padding: 16 }}>
                                <Box sx={{display:'flex', alignItems:'center'}}>
                                    <img 
                                    src={post.images?.[0] || '/src/assets/icon.jpg'} 
                                    alt={post.title}
                                    style={{width: 80, height:80, objectFit:'cover' ,borderRadius: 8, marginRight: 16 }}
                                    />
                                    <Typography variant="h6" fontWeight={700}>{post.title}</Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{post.content}</Typography>
                                <Stack direction='row' spacing={2} sx={{mt: 1}}>
                                    <Stack  direction="row" spacing={0.5} alignItems="center">
                                        <Icon sx={{fontSize: 18, color: '#888'}}>comments</Icon>
                                        <Typography variant="caption" color="text.secondary"> {post.comment?.length || 0}</Typography>
                                    </Stack>
                                    <Stack  direction="row" spacing={0.5} alignItems="center">
                                        <Icon sx={{fontSize: 18, color: '#888'}}>visibility</Icon>
                                        <Typography variant="caption" color="text.secondary"> {post.views || 0}</Typography>
                                    </Stack>
                                </Stack>
                                <Box sx={{mt: 1}}>
                                    <Button variant="outlined" sx={{ width: 'fit-content',  color:'#333', margin: '0 8px'}}
                                      onClick={() => navigation(`/admin/posts/${post._id}/edit`, { state: { postData: post }})}
                                    >
                                        Edit
                                    </Button>
                                    <Button variant="outlined" sx={{ width: 'fit-content',  color:'#333', margin: '0 8px'}}
                                    onClick={()=> deletePost(post._id)}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </Card>
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
        </>

    )

}

export default AdminPostList