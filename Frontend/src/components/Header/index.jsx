import { useState } from 'react'
import {Stack, Button, AppBar, Toolbar, Typography,Menu, MenuItem,Input, Box} from '@mui/material'
import Icon from '@mui/material/Icon'


function Header(){
    const menulist = [
        {name: 'menu1',
        submenu: [{title: 'submenu1', link: 'https:example1'},
            {title: 'submenu2', link: 'https:example2'},
            {title: 'submenu3', link: 'https:example3'},
            {title: 'submenu4', link: 'https:example4'},
        ]
        },
        {name: 'menu2',
        submenu: [{title: 'submenu11', link: 'https:example11'},
            {title: 'submenu2', link: 'https:example2'},
            {title: 'submenu3', link: 'https:example3'},
            {title: 'submenu4', link: 'https:example4'},
        ]
        },
        {name: 'menu3',
        submenu: [
          // {title: 'submenu111', link: 'https:example111'},
          //   {title: 'submenu2', link: 'https:example2'},
          //   {title: 'submenu3', link: 'https:example3'},
          //   {title: 'submenu4', link: 'https:example4'},
        ]
        },
    ]
   
    const [anchorEl, setAnchorEl] = useState((Array(menulist.length).fill(null)))
    const [toggleSearch, setToggleSearch] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)

    //hover open the submenu on Navbar
    const handleMouseEnter = (event, index) => {
      setAnchorEl((prev) => {
        const newEl = [...prev];
        newEl[index] = event.currentTarget;
        return newEl;
      });
    };
  
    //finish hover the submenu on Navbar and close the submenu list
    const handleMouseLeave = (index) => {
      setAnchorEl((prev) => {
        const newEl = [...prev];
        newEl[index] = null;
        return newEl;
      });
    };
    
    const handleSearchBar = (boolean) =>{
      setToggleSearch(!boolean)
    }
    const handleMenuXs = (boolean) => {
      setToggleMenu(!boolean)
    }
    
    
    return (
        <AppBar position='static' style={{ color:'#1D1D1D', fontFamily:'Nunito'}} >
            <Toolbar sx={{backgroundColor:'#060842'}}>
                
                <Typography variant='h5' component='a' href='/' sx={{flexGrow: 1, color: 'orange', textDecoration:'none', fontFamily:'Nunito', fontSize:'30px'}}>
                    Fox Blog
                </Typography>

                <Box sx={{ display: "flex", gap: 2, p: 2, bgcolor: "#060842" }}>
                    {menulist.map((item, index) => (
                    <Box key={index} sx={{ position: "relative", fontFamily:'Nunito',display:{xs:'none', md:'block'} }}>
                        <Button
                        sx={{fontFamily:'Nunito', color:'orange', fontSize:'18px'}}
                        onMouseEnter={(e) => handleMouseEnter(e, index)}
                        >
                      {item.name}
                        </Button>
                      <Menu
                        anchorEl={anchorEl[index]}
                        open={Boolean(anchorEl[index])} 
                        onClose={() => handleMouseLeave(index)}
                        MenuListProps={{
                          onMouseEnter: () => handleMouseEnter({ currentTarget: anchorEl[index] }, index),
                          onMouseLeave: () => handleMouseLeave(index),
                        }}
                      >
                        {item.submenu &&  item.submenu.map((sub, i) => (
                          <MenuItem
                            sx={{background: '#060842'}}
                            key={i} onClick={() => handleMouseLeave(index)}>
                            <Button 
                            sx={{background: 'transparent',fontFamily:'Nunito', color: 'orange', fontSize:'18px'}} 
                            variant='text' 
                            href={sub.link}>
                              {sub.title}
                            </Button>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ))}
                </Box>
                
              
                <Stack direction='row' spacing={2} sx={{display: {xs: 'block', md:'none'}}}>
                    <Icon
                    onClick ={()=> handleMenuXs(toggleMenu)}
                    sx={{fontSize:'40px', color: 'orange'}}>menu</Icon>
                </Stack>
                    <Icon 
                    sx={{fontSize:{xs: '40px', md: '32px'}, color: 'orange', cursor: 'pointer'}}
                    onClick = {() => handleSearchBar(toggleSearch)}
                    >search</Icon>
            </Toolbar>
            {toggleMenu && (
                  <Box sx={{display:{xs:'flex', md: 'none'},alignItems:'flex-start', paddingLeft:'14px', flexDirection:'column',backgroundColor:'#060842', height:'300px', width:"100%"}}> 
                  {menulist.map((menu,index) => {
                    return(
                      <Box key={index}>
                        <Button
                        variant='text' 
                        sx={{color:'orange', fontFamily:'Nunito', fontSize:"18px"}}
                        >
                        {menu.name}
                        </Button>
                        <Box>
                        {menu.submenu.title}
                        </Box>
                    </Box>
                    )
                  })}
                  </Box>
                )}

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