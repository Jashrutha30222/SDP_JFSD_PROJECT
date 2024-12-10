// LandingPage.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const LandingPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Welcome to IndiaInsight
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Explore the rich and vibrant culture of India, its traditions, and insights into its diverse heritage.
      </Typography>
      <Button href="/signup" variant="contained" sx={{ mr: 2 }}>
        Signup
      </Button>
      <Button href="/signin" variant="outlined">
        Signin
      </Button>
    </Container>
  );
};

export default LandingPage;
