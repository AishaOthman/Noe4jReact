import { Typography, Grid, InputLabel, Select, MenuItem, TextField, Button, Autocomplete } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { IRecipe, ingredient } from "shared_data";
import { RecipeContext } from "./addNewRecipeForm";
import axios from "axios";

const RecipeIngRow = () => {
  
  const {recipe ,setRecipe} = useContext(RecipeContext);

  const [ingredients,setIngredients] = React.useState<ingredient[]>([])
 
  const [recipes,setRecipes] = React.useState<IRecipe[]>([]);

  useEffect(()=>{
    async function getNeo4jIngredients() {
      try{
        const serverIngredientsResponse = await axios.get('/neo4j/ingredients');
        setIngredients(serverIngredientsResponse.data)
      }catch(err){
        console.log(err)
      }
    }
    getNeo4jIngredients();
  },[])
  
 

 
  return (
    <div> 
      <Typography variant='h5' component='h5' marginTop={2}>
         Add Igredients:
       </Typography>
         <Grid item xs={12}   >
         <Autocomplete
          
          id="combo-box-demo"
          options={ingredients.map(i=>i.name)}
        
          sx={{ width: 300 }}
          renderInput={(params:any) => <TextField {...params} label="ingredients" />}
        />
        
       
        <TextField label="amount"  />
       <div>
       <Button
          type="submit"
          variant="contained"
          color="primary"
          //onClick={ AddNewIngredient}
        >
         add another ingredient 
        </Button>
       </div>
        </Grid></div>
  )
}

export default RecipeIngRow