import {Stack, Button, AppBar, Toolbar, Typography,Menu, MenuItem,Popover} from '@mui/material'
import { useState } from 'react'
// import {CatchingPokemonIcon, SearchIcon} from '@mui/icons-material'
import Icon from '@mui/material/Icon'
function Header(){
    const [anchorEl, setAnchorEl] = useState(null)
    const [hoveredItem, setHoveredItem] = useState(null)
    const open = Boolean(anchorEl);
    const handleOpenMenu = (e, index) =>{
        setAnchorEl(e.currentTarget)
        setHoveredItem(index)
        
    };
    const handleClose = (e) => {
        setAnchorEl(null)
        setHoveredItem(null)
    }
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
    return (
        <AppBar position='static' style={{backgroundColor:'transparent', color:'#1D1D1D'}} >
            <Toolbar>
                
                <Typography variant='h5' component='div' sx={{flexGrow: 1}}>
                    Fox Blog
                </Typography>
 
                <Stack direction='row' spacing={2} sx={{display:{xs:'none', md:'flex'}}}>
                    {menulist.map((items,index )=> {
                        return (
                            <>
                            <Typography
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={(e) => handleOpenMenu(e,index)}
                            // onMouseLeave={handleClose}
                            >
                            <Button variant='text' color='#default'>{items.name}</Button>
                            </Typography>
                            
                        <Popover
                            id="mouse-over-popover"
                            sx={{ pointerEvents: 'none'}}
                            open={hoveredItem == index}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            onClose={handleClose}
                            onMouseLeave={handleClose}
                            disableRestoreFocus 
                        >
                            {index == hoveredItem && items.submenu.length > 0  && items.submenu.map((subItems) =>{
                            return (
                                 <MenuItem onClick={handleClose} >{subItems.title}</MenuItem>
                            )
                        })} 
                        </Popover>
                            </>
                          )
                        })}
                    
                    
                </Stack>
                <Stack direction='row' spacing={2} sx={{display: {xs: 'block', md:'none'}}}>
                    <Icon sx={{fontSize:{xs: 30, md: 24}}}>menu</Icon>
                </Stack>
                    <Icon sx={{fontSize:{xs: 30, md: 24}}}>search</Icon>
            </Toolbar>
        </AppBar>
        
    )
}
export default Header