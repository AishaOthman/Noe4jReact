// import { Button, Container } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../config/firebase";
// import logging from "../../config/logging";


// export default function LogoutPage {
//     const navigate = useNavigate();

//     const Logout = () => {
//         auth.signOut()
//         .then(() => navigate('/login'))
//         .catch(error => logging.error(error));
//     }

//     return (
//         <Container header="Logout">
//             <p className='text-center'>Are you sure you want to logout?</p>
//             <div className='text-center'>
//                 <Button color="secondary" className="mr-2" onClick={() => history.goBack()}>Cancel</Button>
//                 <Button color="info" className="mr-2" onClick={() => Logout()}>Logout</Button>
//             </div>
//         </Container>
//     );
// }

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';

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

export default function Logout() {


const navigate = useNavigate();
const Logout = () => {
    auth.signOut()
    .then(() => navigate('/login'))
    .catch(error => logging.error(error));
}


 

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
           Log Out
          </Typography>
          <Box  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
              <p className='text-center'>Are you sure you want to logout?</p>
            <div className='text-center'>
                <Button color="secondary" className="mr-2" onClick={() => navigate(-1)}>Cancel</Button>
                <Button color="info" className="mr-2" onClick={() => Logout()}>Logout</Button>
            </div>
              </Grid>
            </Grid>
    
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}