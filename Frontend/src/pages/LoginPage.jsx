import { Box, Input, Typography, Button} from "@mui/material"
import Icon from '@mui/material/Icon'
import { useState } from "react"


const LoginPage = () => {
    const [showPass, setShowPass] = useState(false)

    return (
        <Box sx={{width:'100%', height:'100%', backgroundColor:'#373977', padding:{md:'100px'}}}>
            <Box sx={{display:'flex',
                 flexDirection: 'column',
                  width:'400px',
                  backgroundColor: '#fff',
                  margin:'auto',
                  padding:{md:'20px', xs:'40px 0px'},
                  borderRadius:'10px'}}>
                <Typography variant="h3" sx={{ color:'orange', textAlign:'center'}}> welcome back</Typography>
                <Input type="text" placeholder="username" sx={{ color:'orange', padding:'6px', margin:'4px 0', borderRadius:'26px'}} />
                <Input type={showPass ? 'text' : 'password'} placeholder="password" 
                sx={{ color:'orange', padding:'6px', margin:'4px 0', borderRadius:'26px'}}/>
                {showPass 
                ? <Icon 
                sx={{cursor:'pointer', alignSelf:'flex-end', translate:'-20px -40px'}}
                onClick={()=> setShowPass(!showPass)}>visibility</Icon> 
                : <Icon 
                sx={{cursor:'pointer', alignSelf:'flex-end', translate:'-20px -40px'}}
                onClick={()=> setShowPass(!showPass)}>visibility_off</Icon>}
                <Button sx={{ color:'orange', backgroundColor:'#060842', borderRadius:'26px', margin:'10px 0', border:'6px'}}>Sign in</Button>
            </Box>
        </Box>
    )
}

export default LoginPage