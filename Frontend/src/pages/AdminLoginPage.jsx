import { Box, Input, Typography, Button} from "@mui/material"
import { Form,useNavigate } from "react-router"
import Icon from '@mui/material/Icon'
import axios from "axios"
import { useState } from "react"
import useAuth from "../hooks/useAuth"


const AdminLoginPage = () => {
    const [showPass, setShowPass] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useAuth()
    const navigation = useNavigate()


    const handleLogin =() =>{
        axios
            .post(`http://localhost:3000/api/admin/login`,{
                username,
                password
            })
            .then((response) => {
                console.log(response.data.accessToken)
                const token = response.data.accessToken
                const user = response.data.data
                login({token, user})
            }
            )
            .then(()=> navigation('/admin'))
            
            .catch(error => {
                console.log('can not login by server',error)
            })

    }

    return (
        <Box sx={{width:'100%', height:'100vh', backgroundColor:'#373977', padding:{md:'100px'}}}>
            <Box 
                sx={{
                    display:'flex',
                    flexDirection: 'column',
                    width:'400px',
                    backgroundColor: '#fff',
                    margin:'auto',
                    padding:{md:'20px', xs:'40px 0px'},
                    borderRadius:'10px'
                }}
                >
                <Typography variant="h3" sx={{ color:'orange', textAlign:'center'}}> welcome back</Typography>

                    <Form >
                        <Box sx={{display:'flex', flexDirection:'column'}}>
                            <Input type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                placeholder="username" 
                                sx={{ color:'orange', padding:'6px', margin:'4px 0', borderRadius:'26px'}} 
                            />

                            <Input type={showPass ? 'text' : 'password'} 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="password" 
                                sx={{ color:'orange', padding:'6px', margin:'4px 0', borderRadius:'26px'}}
                            />

                            {showPass 
                            ? <Icon 
                            sx={{cursor:'pointer', alignSelf:'flex-end', translate:'-20px -40px'}}
                            onClick={()=> setShowPass(!showPass)}>
                                visibility
                            </Icon> 
                            : <Icon 
                            sx={{cursor:'pointer', alignSelf:'flex-end', translate:'-20px -40px'}}
                            onClick={()=> setShowPass(!showPass)}>visibility_off
                            </Icon>
                            }
                            
                            <Button 
                                type="submit" 
                                onClick={()=> handleLogin()} 
                                sx={{ color:'orange', backgroundColor:'#060842', borderRadius:'26px', margin:'10px 0', border:'6px'}}
                            >Sign in
                            </Button>
                        </Box>  
                </Form>

            </Box>
        </Box>
    )
}

export default AdminLoginPage