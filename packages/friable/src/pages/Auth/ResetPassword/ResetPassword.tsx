import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation} from 'react-router-dom';
import logging from '../../../config/logging';
import queryString from 'query-string';
import { auth } from '../../../config/firebase';
import { createTheme } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { RouteProps } from 'react-router';
import { ThemeProvider } from '@emotion/react';

import { Container, CssBaseline, AppBar, Toolbar, Box, Typography, Avatar, Grid, TextField, Button, CircularProgress, Link  } from '@mui/material';
interface IPageProps {
  name: string;
}
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

const  ResetPassword: React.FunctionComponent<IPageProps & RouteProps> = props => {
    const [verifying, setVerifying] = useState<boolean>(true);
    const [verified, setVerified] = useState<boolean>(false);
    const [changing, setChanging] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [oobCode, setOobCode] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
      logging.info('Extracting code');

      let stringParams = queryString.parse(location.search);

      if (stringParams)
      {
          let oobCode = stringParams.oobCode as string;

          if (oobCode)
          {
              logging.info('Code found');
              verifyPasswordResetLink(oobCode);
          }
          else
          {
              logging.error('Unable to find code');
              setVerified(false);
              setVerifying(false);
          }
      }
      else
      {
          logging.error('Unable to find code');
          setVerified(false);
          setVerifying(false);
      }
      // eslint-disable-next-line
  }, []);
  const verifyPasswordResetLink = (_oobCode: string) => {
    auth.verifyPasswordResetCode(_oobCode)
    .then(result => {
        logging.info(result);
        setOobCode(_oobCode);
        setVerified(true);
        setVerifying(false);
    })
    .catch(error => {
        logging.error(error);
        setVerified(false);
        setVerifying(false);
    });
}

const passwordResetRequest = () => {
    if (password !== confirm)
    {
        setError('Make sure your passwords are matching');
        return;
    }

    if (error !== '') setError('');

    setChanging(true);

    auth.confirmPasswordReset(oobCode, password)
    .then(() => {
       navigate('/login');
    })
    .catch(error => {
        logging.error(error);
        setError(error.message);
        setChanging(false);
    })
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
              {verifying ?
                <CircularProgress />
            :
                <>
                    {verified ?
                        <>
                            <p>Please enter a strong password.</p>
                                    <Box>
                                    <TextField
                                    autoComplete="new-password"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    onChange={event => setPassword(event.target.value)}
                                    value={password}
                                  />
                                        
                                    </Box>
                                    <Box>
                                    <TextField
                                    autoComplete="new-password"
                                    type="password"
                                    name="confirm"
                                    id="confirm"
                                    placeholder="Confirm Password"
                                    onChange={event => setConfirm(event.target.value)}
                                    value={confirm}
                                  />
                                        
                                    </Box>
                                    <Button
                                disabled={changing}
                                color="success"
                                onClick={() => passwordResetRequest()}
                            >
                                Reset Password
                            </Button>
                                    
                                </>
                           :
                           <p>Invalid link.</p>
                       }
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

export default ResetPassword;