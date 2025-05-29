import { Box, Container, Icon, InputBase, Stack, Typography, Card, CardContent, Avatar, Button, Grid, ListItem, List } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import axios from "axios";

import AdminSideBar from "../components/AdminSideBar";

const AdminDashboard = () => {
    const [author, setAuthor] = useState('Orange Fox');
    const [recentPosts, setRecentPost] = useState([])
    const [data, setData] = useState([])
    const { id } = useParams()
    const navigation = useNavigate()

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/posts/`)
            .then((response) => setData(response.data))
            .catch((error) => console.error('error', error))
    }, [id])

    useEffect(()=>{
       const recentPost = data.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt));
        setRecentPost(recentPost)
    })

    return (
        <>
            <AdminSideBar></AdminSideBar>
            <div style={{paddingLeft:'80px', width:'100%'}}>
               <Container maxWidth="xl" sx={{ background: '#f7f9fb', minHeight: '100vh', py:4  }}>

            {/* Header Bar */}
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', mb: 4}}>
                {/* Search */}
                <Box sx={{display:'flex', alignItems:'center', background:'transparent'}}>
                    <Icon sx={{color:'#aaa', mr:1}}>search</Icon>
                    <InputBase placeholder="Search for anything" sx={{width:200}}/>
                </Box>
                {/* Date */}
                <Stack direction={'row'} spacing={2} alignItems="center">
                    <Icon sx={{color:'#aaa'}}>calendar_today</Icon>
                    <Typography variant="body2" color="text.secondary">Today <b>October 29</b></Typography>
                </Stack>
                {/* Notification & Avatar */}
                <Stack direction="row" spacing={2} alignItems="center">
                    <Icon sx={{color:'#aaa'}}>notifications</Icon>
                    <Avatar src="/src/assets/icon.jpg" sx={{width:32, height:32}}/>
                </Stack>
            </Box>
            {/* Welcome Section */}
            <Grid container spacing={3} alignItems="stretch">
                <Grid item xs={12} md={4}>
                    <Card sx={{display:'flex', alignItems:'center',justifyContent:'space-around', p:3, borderRadius:3, boxShadow:2, height:'100%'}}>
                        <Box>
                            <Typography variant="h5" fontWeight={700}>Welcome Back! <span role="img" aria-label="wave">👋</span></Typography>
                            <Typography variant="subtitle2" color="text.secondary">Good evening!</Typography>
                            <Typography variant="h6" sx={{mt:2}}>{author}</Typography>
                            <Typography variant="body2" color="text.secondary">Writer/Author</Typography>
                            <Stack direction="row" spacing={3} sx={{mt:2}}>
                                <Box>
                                    <Typography variant="h6" fontWeight={700}>{data.length}</Typography>
                                    <Typography variant="caption" color="text.secondary">Total Post</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" fontWeight={700}>23K</Typography>
                                    <Typography variant="caption" color="text.secondary">Subscriber</Typography>
                                </Box>
                            </Stack>
                        </Box>
                        <Avatar src="/src/assets/icon.jpg" sx={{width:200, height:200}}/>

                    </Card>
                </Grid>
                {/* Stat Cards */}
                <Grid item xs={12} md={2}>
                    <Card sx={{p:3, borderRadius:3, boxShadow:2, textAlign:'center', height:'100%'}}>
                        <Icon sx={{fontSize:40, color:'#3b82f6', mt:1}}>menu_book</Icon>
                        <Typography variant="body2" color="text.secondary">Total Post</Typography>
                        <Typography variant="h5" fontWeight={700} color="#3b82f6">{data.length}</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Card sx={{p:3, borderRadius:3, boxShadow:2, textAlign:'center', height:'100%'}}>
                        <Icon sx={{fontSize:40, color:'#a259f7', mb:1}}>description</Icon>
                        <Typography variant="body2" color="text.secondary">Total Pages</Typography>
                        <Typography variant="h5" fontWeight={700} color="#a259f7">56</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Card sx={{p:3, borderRadius:3, boxShadow:2, textAlign:'center', height:'100%'}}>
                        <Icon sx={{fontSize:40, color:'#22c55e', mb:1}}>chat</Icon>
                        <Typography variant="body2" color="text.secondary">Comments</Typography>
                        <Typography variant="h5" fontWeight={700} color="#22c55e">34,267</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Card sx={{p:3, borderRadius:3, boxShadow:2, textAlign:'center', height:'100%'}}>
                        <Icon sx={{fontSize:40, color:'red', mb:1}}>favorite</Icon>
                        <Typography variant="body2" color="text.secondary">total likes</Typography>
                        <Typography variant="h5" fontWeight={700} color="red">34,267</Typography>
                    </Card>
                </Grid>
            </Grid>
            {/* Visitors & Recent Blogs Section */}
            <Grid container spacing={3} sx={{mt:2}}>
                <Grid item xs={12} md={6}>
                    <Card sx={{p:3, borderRadius:3, boxShadow:2, height:'100%'}}>
                        <Typography variant="h6">Visitors</Typography>
                        <Stack direction="row" spacing={2} alignItems="center" sx={{mt:2}}>
                            <Typography variant="h4" fontWeight={700}>250K</Typography>
                            <Typography variant="body2" color="success.main">+0.5%</Typography>
                            <Button size="small" variant="outlined" sx={{ml:'auto'}}>D</Button>
                            <Button size="small" variant="outlined">M</Button>
                            <Button size="small" variant="outlined">Y</Button>
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{p:3, borderRadius:3, boxShadow:2, height:'100%'}}>
                        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <Typography variant="h6">Recent Blogs</Typography>
                            <Button variant="outlined">
                                <Link to={'/admin/create/post'} style={{textDecoration:'none', color:'orange'}}>
                                + Add New
                                </Link>
                            </Button>
                        </Box>
                        <List sx={{ flex: 1, width: '100%', overflowY: 'scroll', maxHeight:'500px' }}>
                            {recentPosts.map((post, ind) => (
                                <ListItem key={ind} disablePadding sx={{ mb: 2 }}>
                                    <Card sx={{ display: 'flex', alignItems: 'center', width: '100%', p: 2, boxShadow: 1, borderRadius: 2 }}>
                                        <Box sx={{ minWidth: 64, minHeight: 64, mr: 2, borderRadius: 2, overflow: 'hidden', bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img
                                                src={post.images?.[0] || '/src/assets/icon.jpg'}
                                                alt={post.title}
                                                style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: 8 }}
                                            />
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography variant="subtitle1" fontWeight={600} noWrap>{post.title}</Typography>
                                            <Stack direction="row" spacing={3} sx={{ mt: 0.5 }}>
                                                <Stack direction="row" spacing={0.5} alignItems="center">
                                                    <Icon sx={{ fontSize: 18, color: '#888' }}>chat_bubble_outline</Icon>
                                                    <Typography variant="caption" color="text.secondary">{post.comments?.length || 0} Comments</Typography>
                                                </Stack>
                                                <Stack direction="row" spacing={0.5} alignItems="center">
                                                    <Icon sx={{ fontSize: 18, color: '#888' }}>visibility</Icon>
                                                    <Typography variant="caption" color="text.secondary">{post.views || 0} Views</Typography>
                                                </Stack>

                                                <Button size="small" variant="text" startIcon={<Icon sx={{ fontSize: 18 }}>edit</Icon>} sx={{ minWidth: 0, px: 1 }} onClick={() => navigation(`/admin/posts/${post._id}/edit`,  { state: { postData: post } })}>
                                                    Edit
                                                </Button>
                                            </Stack>
                                        </Box>
                                    </Card>
                                </ListItem>
                            ))}
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Container>
                
            </div>
        </>
    )
}

export default AdminDashboard