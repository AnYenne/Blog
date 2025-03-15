import {Typography, Box, Stack, Icon, Button} from "@mui/material"
import ListPost from "../ListPost"

const Homepage = () => {
    
    const handleScrollBottom = () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        })
    }

    return(
        <Box>
            <Box sx={{color: 'orange', paddingLeft: '24px', paddingRight:'24px', display:{xs: 'block', md: 'flex'}, alignItems:{xs: 'block', md: 'center'}, justifyContent:{xs:'none', md:'space-between'}}}>
                    <Stack direction='column' spacing={4}>
                        <Typography variant="h3" component='div' sx={{color: '#333', padding:{xs:'24px 0px', md:'none'}}}> 
                        Stay Informed with the Latest Updates and Blog Highlight</Typography>
                        
                        <Stack onClick={()=>handleScrollBottom()} direction='row' sx={{textAlign:'center',cursor:'pointer', borderRadius:'15px', background:'#060842', width:'300px' , fontSize:'30px',color:'#FFA500', fontFamily:'Nunito', padding: '12px', display:'flex', alignItems:'center', justifyContent:'center'}}> 
                            
                            <Button  sx={{ color:'#FFA500', fontFamily:'Nunito', fontWeight:'800'}}>Subcribe email</Button>
                            <Icon sx={{fontSize:'24px', marginLeft:'20px' }}>email</Icon>
                        </Stack>

                        <Typography variant="h5" component='div' sx={{color:'#FFA500', fontFamily:'Nunito', fontWeight:'600'}}>
                        Stay Informed with the Latest Updates and Blog Highlight, featuring essential insights and expert analysis
                        </Typography>

                    </Stack>
                    <Box>
                        <img 
                        style={{width:'100%'}}
                        src="https://img.freepik.com/free-vector/taking-notes-concept-illustration_114360-1375.jpg?t=st=1741343506~exp=1741347106~hmac=7f450751df1077ec4da4d84514b36207e9e9bb944c53ba4aa63cfc1778073ebe&w=740"
                        alt='hero image'
                        />
                    </Box>
                </Box>
                <Box sx={{color: 'orange', paddingLeft: '24px', paddingRight:'24px',width: 'full-width'}}>
                    <ListPost></ListPost>
                </Box>
               1
            
            </Box>
    )
}
export default Homepage