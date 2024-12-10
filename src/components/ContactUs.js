import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Snackbar, Slide, Alert } from '@mui/material';

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false); // State to control the Snackbar

  // Function to handle form submission
  const handleSubmit = () => {
    setFormSubmitted(true); // Show the success message
  };

  // Transition component for Snackbar animation
  const SlideTransition = (props) => {
    return <Slide {...props} direction="up" />; // Sliding up effect
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Top Banner */}
      <div
        style={{
          backgroundImage: `url('https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg')`, // New Image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" style={{ color: 'white', fontWeight: 'bold' }}>
          Contact Us
        </Typography>
      </div>

      {/* Contact Information Section */}
      <Container maxWidth="md" style={{ marginTop: '40px' }}>
        <Grid container spacing={3} style={{ textAlign: 'center' }}>
          {/* Hours of Operation */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              HOURS OF OPERATION
            </Typography>
            <Typography variant="body1" style={{ marginTop: '10px' }}>
              9:00 to 17:00, Mon-Fri <br />
              (Excluding Holidays)
            </Typography>
          </Grid>

          {/* Phone Number */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              PHONE
            </Typography>
            <Typography variant="body1" style={{ marginTop: '10px', color: '#0073e6' }}>
              +31 208915387
            </Typography>
          </Grid>

          {/* General Inquiries */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              GENERAL INQUIRIES
            </Typography>
            <Typography variant="body1" style={{ marginTop: '10px', color: '#0073e6' }}>
              indiainsight@.com
            </Typography>
          </Grid>
        </Grid>

        {/* Additional Information */}
        <Box style={{ textAlign: 'center', marginTop: '30px' }}>
          <Typography variant="body1">
            Our customer service team is waiting to assist you.
            <br />
            Please allow up to 2-business days response time for us to fully address your inquiries.
          </Typography>
        </Box>

        {/* Contact Form Section */}
        <Box
          style={{
            marginTop: '40px',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            backgroundColor: '#f9f9f9',
          }}
        >
           
          
        </Box>
      </Container>

      {/* Snackbar with styled message */}
      <Snackbar
        open={formSubmitted}
        autoHideDuration={3000} // Closes after 3 seconds
        onClose={() => setFormSubmitted(false)} // Close the snackbar
        TransitionComponent={SlideTransition} // Use sliding transition
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Position of the message
      >
        <Alert
          onClose={() => setFormSubmitted(false)}
          severity="success"
          sx={{
            backgroundColor: '#0073e6',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          Message Submitted Successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactUs;
