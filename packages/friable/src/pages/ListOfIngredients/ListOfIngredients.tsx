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
import { AppBar, FormGroup, Toolbar } from '@mui/material';



const defaultTheme = createTheme();
const ListOfIngredients = ()=>{
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
                  <Grid item xs={12} sm={6} >
                      <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Spaghetti" />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <Button variant="contained">Remove </Button>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Olive oil" />
                     </FormGroup>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Button variant="contained">Remove </Button>
                  </Grid>
                  <Grid item xs={12} sm={6} >
                      <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Garlic" />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <Button variant="contained">Remove </Button>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Parsley" />
                     </FormGroup>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Button variant="contained">Remove </Button>
                  </Grid>
                  <Grid item xs={12} sm={6} >
                      <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Salt" />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <Button variant="contained">Remove </Button>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Pepper" />
                     </FormGroup>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Button variant="contained">Remove </Button>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  href='/ListOfIngredientss'
                >
                  Clear Checklist
                </Button>
                
              </Box>
            </Box>
          
        </Container>
    </ThemeProvider>
  );
};



// import React from 'react'
// import ResultCard from '../../components/ResultCard';
// import CardOfIngredient from '../../components/CardOfIngredient';
// const ListOfIngredients = ()=>{
//   return (
//     <div> <ResultCard/>
//     <CardOfIngredient/>
//     </div>
   

//   )};
 



// import { Typography, List, ListItem, ListItemText, Button } from '@mui/material'
// 
// import RecipeDetails from '../RecipeDetails/RecipeDetails'
// import { IIngredient } from 'shared_data';
// import { makeStyles } from '@material-ui/core/styles';


// interface ChecklistPageProps {
//   checklist: IIngredient[];
//   handleRemoveIngredient: (ingredient: IIngredient) => void;
//   handleClearChecklist: () => void;
// }



// const ListOfIngredients: React.FC<ChecklistPageProps> = ({
//   checklist,
//   handleRemoveIngredient,
//   handleClearChecklist,
// }) => {
  
//   const useStyles = makeStyles((theme) => ({
//     checklist: {
//       marginTop: theme.spacing(2),
//     },
//     removeButton: {
//       marginLeft: theme.spacing(1),
//     },
//     clearButton: {
//       marginTop: theme.spacing(2),
//     },
//   }));
  
//   const classes = useStyles();

//   return (
//     <div className={classes.checklist}>
//       <Typography variant="h5">Ingredients Checklist:</Typography>
//       {checklist.length > 0 ? (
//         <List>
//           {checklist.map((ingredient, index) => (
//             <ListItem key={index}>
//               <ListItemText primary={ingredient.name} secondary={ingredient.amount} />
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 size="small"
//                 className={classes.removeButton}
//                 onClick={() => handleRemoveIngredient(ingredient)}
//               >
//                 Remove
//               </Button>
//             </ListItem>
//           ))}
//           <Button
//             variant="outlined"
//             color="secondary"
//             className={classes.clearButton}
//             onClick={handleClearChecklist}
//           >
//             Clear Checklist
//           </Button>
//         </List>
//       ) : (
//         <Typography variant="body1">No ingredients added to the checklist.</Typography>
//       )}
//     </div>
//   );
// };


export default ListOfIngredients