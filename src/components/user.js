import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

function User() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px',
        gap: '40px', // Space between left and right side
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        background: 'linear-gradient(to right, #FFDEE9, #B5FFFC)', // Light gradient background
        minHeight: '100vh', // Ensure full page height
      }}
    >
      {/* Left side - Image in place of avatars */}
      <Box
        sx={{
          width: '50%',
          minWidth: '250px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
          padding: '10px',
        }}
      >
        {/* Replace the avatar images with your image here */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/1802/1802973.png" // Replace with your image URL
          alt="User"
          style={{
            width: '100%', // Make the image responsive
            maxWidth: '400px', // Max width to avoid it growing too large
            height: 'auto',
            borderRadius: '12px',
          }}
        />
      </Box>

      {/* Right side - User Management with Action Buttons */}
      <Box sx={{ width: '40%', minWidth: '250px', textAlign: 'center' }}>
        {/* User Management Heading centered */}
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center', // Center align the heading
            fontSize: '2rem', // Larger font size for a bold look
          }}
        >
          User Actions
        </Typography>

        {/* User management buttons stacked vertically */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              backgroundColor: '#4CAF50', // Green button
            }}
            onClick={() => navigate('/admin/user/view')}
          >
            View Users
          </Button>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              backgroundColor: '#FF6347', // Tomato button
            }}
            onClick={() => navigate('/admin/user/edit')}
          >
            Edit User
          </Button>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              backgroundColor: '#FFD700', // Gold button
            }}
            onClick={() => navigate('/admin/user/add')}
          >
            Add User
          </Button>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              backgroundColor: '#FF4500', // Orange Red button
            }}
            onClick={() => navigate('/admin/user/delete')}
          >
            Delete User
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const buttonStyle = {
  color: '#FFF',
  width: '200px',
  padding: '12px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'scale(1.05)', // Slightly enlarge button on hover
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
    transition: 'all 0.3s ease', // Smooth transition effect
  },
};

export default User;
