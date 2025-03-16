import { Box, Icon, Input, Stack, Typography, Button } from "@mui/material"


const Footer = () => {
    
    return(
        <Box sx={{display: 'flex', flexDirection:{xs:'column', md:'row'}, justifyContent:'space-around', alignItems:'center', paddingBottom:'24px', paddingLeft:{xs:'24px'},  fontFamily:'Nunito', fontWeight:'600'}}>
            <Box sx={{display:'flex', flexDirection:{xs:'column', md:'column'}}}>
                <Box  sx={{paddingBottom: {xs:'24px'},paddingLeft:{xs:'40px', md:'none'}, paddingRight:{xs: '40px', md:'none'}}}>
                    <Typography>Connect with us</Typography>
                    <Stack direction='row' spacing={4} >
                        <Button variant="text" href="#">
                            <Icon sx={{color: '#060842'}}>facebook</Icon>
                        </Button>
                        <Button variant="text" href="#">
                            <Icon sx={{color: '#060842'}}>email</Icon>
                        </Button>
                        <Button variant="text" href="#">
                            <Icon sx={{color: '#060842'}}>phone</Icon>
                        </Button>
                    </Stack>
                </Box>
                <Box>
                    <Typography>CÔNG TY TNMTV ANN</Typography>
                    <Typography>Người đại diện: Nguyen Thi Ngoc Uyen</Typography>
                </Box>
            </Box>
            <Box>
                <Typography sx={{paddingTop: {xs:'24px', md:'none'}, paddingBottom:{xs:"12px"}}}>
                STAY UPDATED WITH ME
                </Typography>
                <Typography sx={{paddingBottom: '24px'}}>
                Sign up for information, new tips…
                </Typography>
                <Input placeholder="your@email" sx={{backgroundColor:'#999', color:'#FFF',padding:{xs:'0px 14px'},borderRadius:'4px', fontFamily:'Nunito', fontWeight:'600', width:{xs:'300px'}}} />
                <Button variant="contained" sx={{backgroundColor:'#060842', color:'#FFA500', fontFamily:'Nunito', fontWeight:'600', width:'160px', margin:{xs:"12px auto", md:'0px 12px'}}}>SIGN UP</Button>
            </Box>
        </Box>    
    )
}
export default Footer