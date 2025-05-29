import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, Divider, Avatar, ListItemText } from '@mui/material';
import { Link } from "react-router"
import { useState } from 'react';
import useAuth from '../hooks/useAuth';

const navItems = [
  { to: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { to: '/admin/create/post', icon: 'add', label: 'Create' },
  { to: '/', icon: 'mail', label: 'Email' },
  { to: '/', icon: 'phone', label: 'Phone' },
  { to: '/admin/posts', icon: 'list', label: 'posts' },
  { to: '', icon: 'check_circle', label: 'Tasks' },
  { to: '', icon: 'view_quilt', label: 'UI' },
  { to: '', icon: 'settings', label: 'Settings' },
];

const AdminSideBar = () => {
    const [hovered, setHovered] = useState(false)
    const [selected, setSelected] = useState(0);
    const {logout} = useAuth()


  return (
    <Box
      onMouseEnter={()=> setHovered(true)}
      onMouseLeave={()=> setHovered(null)}
      sx={{
        width: hovered ? '160px' :'60px',
        height: '100vh',
        bgcolor: '#fff',
        boxShadow:1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
        position:'fixed',
        zIndex:1
      }
    
    }
    >
      <Box sx={{ mb: 3 }}>
        <Avatar src="/src/assets/logo.png" sx={{ width: 40, height: 40, bgcolor: 'transparent' }} />
      </Box>
      <List sx={{ flex: 1, width: '100%' }}>
        {navItems.map((item, idx) => (
          <ListItem key={item.label} disablePadding sx={{ justifyContent: 'center' }}>
            <ListItemButton
              component={Link}
              to={item.to}
              selected={selected === idx}
              onClick={() => setSelected(idx)}
              sx={{ borderRadius: 2, minHeight: 48, justifyContent: 'space-between' }}
              
            >
              <ListItemIcon sx={{ minWidth: 0, color: selected === idx ? '#1976d2' : '#888' }}>
                <span className="material-icons" style={{ fontSize: 28 }}>{item.icon}</span>
              </ListItemIcon>
              {hovered &&  <ListItemText primary={item.label} sx={{ color: selected === idx ? '#1976d2' : '#888', ml: 2 }}>
              </ListItemText>}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ width: '60%', my: 2 }} />
      <IconButton sx={{ mb: 1, color: '#888' }} onClick={() =>logout()}>
        <span className="material-icons" style={{ fontSize: 28 }}>logout</span>
      </IconButton>
    </Box>
  );
};

export default AdminSideBar;