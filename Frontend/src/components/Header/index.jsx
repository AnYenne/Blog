import {Stack, Button, AppBar, Toolbar, Typography,Menu, MenuItem,Popover, Box} from '@mui/material'
import { useState } from 'react'
// import {CatchingPokemonIcon, SearchIcon} from '@mui/icons-material'
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
        submenu: [{title: 'submenu111', link: 'https:example111'},
            {title: 'submenu2', link: 'https:example2'},
            {title: 'submenu3', link: 'https:example3'},
            {title: 'submenu4', link: 'https:example4'},
        ]
        },
    ]
   
    const [anchorEl, setAnchorEl] = useState((Array(menulist.length).fill(null)))

    const handleMouseEnter = (event, index) => {
      setAnchorEl((prev) => {
        const newEl = [...prev];
        newEl[index] = event.currentTarget;
        return newEl;
      });
    };
  
    const handleMouseLeave = (index) => {
      setAnchorEl((prev) => {
        const newEl = [...prev];
        newEl[index] = null;
        return newEl;
      });
    };
  
    
    return (
        <AppBar position='static' style={{backgroundColor:'transparent', color:'#1D1D1D'}} >
            <Toolbar>
                
                <Typography variant='h5' component='div' sx={{flexGrow: 1}}>
                    Fox Blog
                </Typography>

                <Box sx={{ display: "flex", gap: 2, p: 2, bgcolor: "white" }}>
      {menulist.map((item, index) => (
        <Box key={index} sx={{ position: "relative" }}>
            <Button
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
            {item.submenu.map((sub, i) => (
              <MenuItem key={i} onClick={() => handleMouseLeave(index)}>
                {sub.title}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ))}
    </Box>

              
                <Stack direction='row' spacing={2} sx={{display: {xs: 'block', md:'none'}}}>
                    <Icon sx={{fontSize:{xs: 30, md: 24}}}>menu</Icon>
                </Stack>
                    <Icon sx={{fontSize:{xs: 30, md: 24}}}>search</Icon>
            </Toolbar>
        </AppBar>
        
    )
}
export default Header