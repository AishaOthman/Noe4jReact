import { Container, Box, AppBar, Toolbar,Link, Typography, Grid, Paper, Button } from '@mui/material'
import React from 'react'
//import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
import ResultCard from '../../components/ResultCard'

function UserCookBookk() {
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
        <Link color="inherit" href="/AddRecipe">Add New Recipe</Link>
        <Box sx={{ marginLeft: 2, display: 'inline' }} />
        <Link color="inherit" href="/ListOfIngredients">My ingredients list</Link>
        <Box sx={{ marginLeft: 2, display: 'inline' }} />
        <Link color="inherit" href="/">LogOut</Link>
        <Box sx={{ marginLeft: 2, display: 'inline' }} />
        {/* <Link color="inherit" href="/UserCookBook">My cookbook</Link> */}
      </Box>
          
          
        </Toolbar>
      </AppBar>
    </Box>
       <ResultCard/>
       
       
     <Footer content={undefined}/>
    </Container>
  )
}

export default UserCookBookk;