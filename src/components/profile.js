import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, CircularProgress, Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors'; // To style the profile icon
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    email: '', // Dynamically set from API response
  });

  const [isLoading, setIsLoading] = useState(true);

  // Fetch the logged-in user profile when the component mounts
  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const response = await axios.get('http://localhost:8081/loggedinuser'); // Update with your API endpoint
        setUserData((prevData) => ({
          ...prevData,
          email: response.data || 'No email available', // Assume `email` is returned by the API
        }));
      } catch (error) {
        console.error('Error fetching user email:', error);
        setUserData((prevData) => ({
          ...prevData,
          email: 'Error fetching email',
        }));
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserEmail();
  }, []);

  if (isLoading) {
    return (
      <Container maxWidth="md" style={styles.pageStyle}>
        <Box style={styles.profileBox}>
          <CircularProgress />
          <Typography variant="h6" align="center">
            Loading...
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" style={styles.pageStyle}>
      <Box style={styles.profileBox}>
        {/* Profile Icon */}
        <Avatar sx={styles.avatarStyle}>
          {/* Placeholder or icon */}
        </Avatar>

        {/* Email Display */}
        <Typography variant="h4" gutterBottom align="center" sx={styles.emailText}>
          Email: {userData.email}
        </Typography>

        {/* Complete Profile Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={styles.completeProfileButton}
        >
          Complete Profile
        </Button>
      </Box>
    </Container>
  );
};

// Styles
const styles = {
  pageStyle: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('https://i.pinimg.com/564x/a2/d7/ae/a2d7ae1f09364e37dd5ded185d28135c.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  profileBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '80px',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '600px',
  },
  avatarStyle: {
    width: 120,
    height: 120,
    margin: '0 auto 30px auto',
    backgroundColor: deepOrange[500],
  },
  emailText: {
    fontSize: '26px',
    fontWeight: 'bold',
  },
  completeProfileButton: {
    marginTop: '30px',
    padding: '15px 0',
    fontSize: '18px',
  },
};

export default ProfilePage;
