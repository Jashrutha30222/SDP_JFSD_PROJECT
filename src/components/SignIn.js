import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        India Insight
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#4e342e', // Soft brown for a clean accent
    },
    secondary: {
      main: '#ffcc80', // Subtle orange
    },
    background: {
      default: '#ffffff', // Pure white background
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif', // A modern, elegant font
  },
});

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); // Reset error

    if (!email || !password) {
      setError('Please fill in all fields.'); // Set error message if fields are empty
      return;
    }

    axios.get("http://localhost:8081/signin", {
      params: {
        email: email,
        password: password
      }
    }).then((res) => {
      console.log(res.data);

      if (res.data === "yes") {
        navigate('/user/culture');
        alert("Sign in successful!");
      } else if (res.data === "admin") {
        navigate('/admin/home');
        alert("Admin login successful!!");
      } else {
        setError("Password or email incorrect!!"); // Set error message for incorrect credentials
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          backgroundImage: 'url(https://img.freepik.com/free-photo/lohri-celebration-india_23-2151150955.jpg?t=st=1727516748~exp=1727520348~hmac=9fb0751483e062287d9b41199d1b78bcbbccea44a701f680204ae0011fea1b64&w=1380)', // Existing background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            marginRight: '40px',
            background: 'linear-gradient(135deg, rgba(255,204,0,0.8), rgba(211,47,47,0.8))', // Gradient background for the sign-in container
            borderRadius: '15px',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
            padding: '30px',
            backdropFilter: 'blur(12px)',
            transform: 'translateY(30px)',
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: '#fff', fontWeight: 'bold' }}>
              Sign In
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!email && error} // Show error if email is empty and there is an error
                helperText={!email && error ? "Email is required." : ""}
                sx={{
                  '& label.Mui-focused': { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: email ? '#4caf50' : '#fff' }, // Green border if filled
                    '&:hover fieldset': { borderColor: 'secondary.main' },
                    '&.Mui-focused fieldset': { borderColor: email ? '#4caf50' : '#fff' },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!password && error} // Show error if password is empty and there is an error
                helperText={!password && error ? "Password is required." : ""}
                sx={{
                  '& label.Mui-focused': { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: password ? '#4caf50' : '#fff' }, // Green border if filled
                    '&:hover fieldset': { borderColor: 'secondary.main' },
                    '&.Mui-focused fieldset': { borderColor: password ? '#4caf50' : '#fff' },
                  },
                }}
              />
              {error && (
                <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                  {error}
                </Typography>
              )}
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: 'primary.main',
                  color: '#fff',
                  '&:hover': { backgroundColor: 'secondary.main' },
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: '#fff' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SignUp" variant="body2" sx={{ color: '#fff' }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5, color: '#fff' }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
