import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { AppBar, Avatar, CssBaseline, Grid, TextField, ThemeProvider, Toolbar} from '@mui/material';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';
import { useState } from 'react';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/Home">
      FRIABLE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function ForgetPassword() {
    const [sending, setSending] = useState<boolean>(false);
        const [sent, setSent] = useState<boolean>(false);
        const [email, setEmail] = useState<string>('');
        const [error, setError] = useState<string>('');
    


        const resetPasswordRequest = () => {
                    if (error !== '') setError('');
            
                    setSending(true);
            
                    auth.sendPasswordResetEmail(email)
                    .then(() => {
                        logging.info('Email sent.');
                        setSent(true);
                        setSending(false);
                    })
                    .catch(error => {
                        logging.error(error);
                        setError(error.message);
                        setSending(false);
                    });
                }
            


 

                return (
                    <ThemeProvider theme={defaultTheme}>
                      <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        < AppBar position="static">
                             <Toolbar>
                                <Box>
                                    <Typography variant="h5" sx={{ flexGrow: 1 }} >
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
                            Reset Password
                          </Typography>
                          <Box component="form"  sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                              <Container>
                                            {sent ?
                                                <p>A link has been sent to your email with instructions.</p>
                                            :
                                                <>
                                                    <p>Please enter your email.</p>
                                                    <Box>
                                                    <TextField
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email Address"
                                                    onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setEmail(event.target.value)}
                                                    value={email}
                                                  />
                                                        
                                                    </Box>
                                                    <Button
                                                       disabled={sending}
                                                       color="success"
                                                      // block
                                                       onClick={() => resetPasswordRequest()}
                                                    >
                                                        Send Reset Link
                                                    </Button>
                                                    
                                                </>
                                            }
                                        </Container>
                            </Grid>
                            
                          </Box>
                        </Box>
                        <Copyright sx={{ mt: 5 }} />
                      </Container>
                    </ThemeProvider>
                  );
}