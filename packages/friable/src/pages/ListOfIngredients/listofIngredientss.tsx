
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, FormGroup, Toolbar } from '@mui/material';



const defaultTheme = createTheme();
const ListOfIngredientss = ()=>{
  return (
    <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <AppBar position="static">
                 <Toolbar>
                      {/*'Add New Recipe', 'My Recipes', 'my Ingredients List','logout', */}
                     
                        <Typography  component="h6" >
                        Check List Of Ingredients 
                        </Typography>
        
                    <Box sx={{ marginLeft: 'auto' }}>
          
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                        <Link color="inherit" href="/">logOut</Link>
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                        <Link color="inherit" href="/">Add New Recipe</Link>
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                        <Link color="inherit" href="/">My Recipes</Link>
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                        <Link color="inherit" href="/UserCookBook">My Cook Book</Link>
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                    
                     </Box>
                    </Toolbar>
        </AppBar>
            
            <Box  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginLeft:5,
                  }}
            >
    
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}  sx={{height: '60vh'}}>
                 
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Clear Checklist
                </Button>
                
              </Box>
            </Box>
          
        </Container>
    </ThemeProvider>
  );
};
 export default ListOfIngredientss;
