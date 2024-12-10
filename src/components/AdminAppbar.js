import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FlowerIcon from '@mui/icons-material/LocalFlorist'; // Assuming you have this icon for use

const settings = ['Profile', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    const setting = event.currentTarget.getAttribute('data-setting');
    if (setting === 'Profile') {
      navigate('/profile'); // Adjust this route based on your app
    } else if (setting === 'Logout') {
      navigate('/');
    }
    setAnchorElUser(null);
  };

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#b22222',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        borderBottom: '2px solid #FF2E63',
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar disableGutters>
          {/* Logo Section */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL6ojepi79ShCdIamoZZnYspY1meO-auIICw&s"
              alt="Logo"
              style={{ width: '40px', height: '40px' }}
            />
          </Box>
          {/* Title Section */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: '2.5rem',
              letterSpacing: '0rem',
              color: '#F9F9F9',
              textDecoration: 'none',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            IndiaInsight
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          
          {/* Navigation Buttons */}
          <Box sx={{ flexGrow: 0 }}>
          <Button
              sx={{ my: 2, color: '#F9F9F9', fontWeight: 'bold' }}
              onClick={() => handleNavigate('/admin/home')}
            >
              Home
            </Button>
            <Button
              sx={{ my: 2, color: '#F9F9F9', fontWeight: 'bold' }}
              onClick={() => handleNavigate('/admin/user')}
            >
              User
            </Button>
            
            <Button
              sx={{ my: 2, color: '#F9F9F9', fontWeight: 'bold' }}
              onClick={() => handleNavigate('/admin/feedbackview')}
            >
              Feedback
            </Button>
            <Button
              sx={{ my: 2, color: '#F9F9F9', fontWeight: 'bold' }}
              onClick={() => handleNavigate('/admin/blog')}
            >
              BLOG
            </Button>
          </Box>

          {/* Profile Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: '#FF2E63' }} alt="Profile" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} data-setting={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      color: '#0D1B2A',
                      fontWeight: 'bold',
                      '&:hover': {
                        color: '#FF2E63',
                      },
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default ResponsiveAppBar;
