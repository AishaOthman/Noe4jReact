import { Container, Box, AppBar, Toolbar,Link, Typography, Grid, Paper, Button } from '@mui/material'
import React from 'react'
//import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
import ResultCard from '../../components/ResultCard'

function UserCookBook() {
  return (
    <Container component="main" sx={{ height: '90%' }}>
        <Box sx={{ flexGrow: 1 }} marginTop={3} marginBottom={3}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" sx={{ flexGrow: 1 }} >
            My Favorite Recipes
          </Typography>
        
          <Box sx={{ marginLeft: 'auto' }}>
        <Link color="inherit" href="/">Home</Link>
        <Box sx={{ marginLeft: 2, display: 'inline' }} />
        <Link color="inherit" href="/ListOfIngredients">My ingredients list</Link>
        <Box sx={{ marginLeft: 2, display: 'inline' }} />
        <Link color="inherit" href="SingUp">LogOut</Link>
        <Box sx={{ marginLeft: 2, display: 'inline' }} />
        {/* <Link color="inherit" href="/UserCookBook">My cookbook</Link> */}
      </Box>
          
          
        </Toolbar>
      </AppBar>
    </Box>
       <ResultCard/>
       
       <Grid item  xs={12}>
             <Paper elevation={3}  sx={{ display: 'flex',marginY:5}} >
                {/* <img className="img" src="https://oatslady.com/wp-content/uploads/2023/03/Healthy-chocolate-chip-cookie-oat-cereal-quick-768x1152.jpeg"/> */}
                <Box paddingX={1}>
                  <Typography component="h2" variant='h4' margin={2} marginTop={2}>
                  Spaghetti with olive oil and garlic sauce
                  </Typography>
                  <Box sx={{
                        display:"flex",
                        alignItems:"center"
                       }}>
                 
                        <Typography variant='body2' component="p" margin={1}>
                           Step 1
                          Finely chop the garlic and parsley. Bring a large saucepan of water to a boil. Add spaghetti and cook until al dente (8-10 mins). Drain well, return to saucepan and cover.
                          Step 2
                          In a medium frying pan over low heat, heat oil. Add garlic and cook gently 5-6 minutes. Do not let garlic brown.
                          Step 3
                          Remove from heat, add parsley and stir. Season with salt and pepper.
                          Step 4
                          Pour warm garlic-oil mixture over spaghetti and toss to coat. Serve.
                         </Typography>
                          
                  </Box>
                  <Link href="/RecipeDetails" margin={5}>More</Link>
                  <Grid item xs={12} sm={6} >
                            <Button variant="contained" href='/UserCookBookk'>Remove </Button>
                         </Grid>
                </Box>
                
                  
              </Paper>
              
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
     <Footer content={undefined}/>
    </Container>
  )
}

export default UserCookBook