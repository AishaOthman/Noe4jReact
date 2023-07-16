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
import { AppBar, Toolbar } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
      FRIABLE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function SignUp() {
const [registering, setRegistering] = useState<boolean>(false);
const [firstName, setFirstName] = useState<string>('');
const [lastName, setLastName] = useState<string>('');
const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');
const [confirm, setConfirm] = useState<string>('');
const [error, setError] = useState<string>('');

const navigate = useNavigate();

const signUpWithEmailAndPassword = () => {
      if (password !== confirm)
      {
          setError('Please make sure your passwords match.');
          return;
      }

      if (error !== '') setError('');

      setRegistering(true);

      auth.createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
          logging.info(result);
          navigate ('/login');
      })
      .catch(error => {
          logging.error(error);

          if (error.code.includes('auth/weak-password'))
          {
              setError('Please enter a stronger password.');
          }
          else if (error.code.includes('auth/email-already-in-use'))
          {
              setError('Email already in use.');
          }
          else
          {
              setError('Unable to register.  Please try again later.')
          }

          setRegistering(false);
  });
}



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    signUpWithEmailAndPassword();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
       < AppBar position="static">
        <Toolbar>
        <Box><Typography variant="h5" sx={{ flexGrow: 1 }} >
              Welcom To FriAble 
              </Typography>
              <Typography variant="caption"sx={{ flexGrow: 1 }}>
              Food recipes app
             </Typography>
          </Box>
          
        
          <Box sx={{ marginLeft: 'auto' }}>
        <Link color="inherit" href="/">Home</Link>
        <Box sx={{ marginLeft: 2, display: 'inline' }} />
        <Link color="inherit" href="/Login">Login</Link>
     
      </Box>
          
          
        </Toolbar>
      </AppBar>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={event => setFirstName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={event => setLastName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={event => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={event => setPassword(event.target.value)}
                /> 
                 </Grid>
                <Grid item xs={12}>
                   <TextField
                    autoComplete="new-password"
                  required
                  fullWidth
                  name="confirm"
                  label="confirm password"
                  type="password"
                  id="confirm"
                onChange={event => setConfirm(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
           
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
                {error && (
            <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}