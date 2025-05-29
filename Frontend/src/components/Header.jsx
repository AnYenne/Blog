import { useState } from 'react'

import {AppBar, Toolbar, Typography,Input, Box} from '@mui/material'
import Icon from '@mui/material/Icon'


function Header(){
  
    const [toggleSearch, setToggleSearch] = useState(false)

    const handleSearchBar = (boolean) =>{
      setToggleSearch(!boolean)
    }
   
    
    return (
        <AppBar position='static' style={{ color:'#1D1D1D', fontFamily:'Nunito'}} >
            <Toolbar sx={{backgroundColor:'#060842'}}>
                
                <Typography variant='h5' component='a' href='/' sx={{flexGrow: 1, color: 'orange', textDecoration:'none', fontFamily:'Nunito', fontSize:'30px'}}>
                    Fox Blog
                </Typography>

                <Icon 
                sx={{fontSize:{xs: '40px', md: '32px'}, color: 'orange', cursor: 'pointer'}}
                onClick = {() => handleSearchBar(toggleSearch)}
                >search</Icon>
            </Toolbar>
            

            {toggleSearch && <Box sx={{height:'50px' } }>
              <Input 
                placeholder='search' 
                sx={{height: 'inherit', pl:'25px', fontSize:'25px',borderTop:'1px solid #333', width:{xs:'100%', md:'100%'}}}
              ></Input>
            </Box>}
        </AppBar>
        
        
    )
}
export default Header