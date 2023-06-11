import React, { useContext } from "react";
import { RecipeContext } from "./addNewRecipeForm";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid } from "@mui/material";

const RecipeSelectBar = () => {
  const {setRecipe} = useContext(RecipeContext);
  
  return (
    <Grid container marginTop={5}marginLeft={5} >
        <Grid item xs={12} marginBottom={3} >
          <TextField label="Recipe Name"  />
        </Grid>
        <Grid item xs={12}  spacing={2} >
          <TextField label="serves"  />
          <TextField label="dity type"  />
          <TextField label="prep time"  />
          <TextField label="cook time"  />
          <TextField label="category"  />
          <TextField label=" skilLevel"  />
          <TextField label="dishType"  />
         
       </Grid>
    </Grid>
/*
import React, { useContext } from "react";
import { RecipeContext } from "./addNewRecipeForm";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid } from "@mui/material";

const RecipeSelectBar = () => {
  const {recipe ,setRecipe} = useContext(RecipeContext);
  console.log(recipe);
  return (
    <Grid container marginTop={5}marginLeft={5} >
        <Grid item xs={12} marginBottom={3} >
          <TextField label="Recipe Name"  />
        </Grid>
        <Grid item xs={12}  spacing={2} >
          <TextField type={'number'} label="serves" onChange={(changeEvent)=>{
            setRecipe({...recipe, serves: Number(changeEvent.target.value)})
          }}/>
          <TextField label="dity type"  />
          <TextField label="prep time"  />
          <TextField label="cook time"  />
          <TextField label="category"  />
          <TextField label=" skilLevel"  />
          <TextField label="dishType"  />
         
       </Grid>
    </Grid>

  
  );
}

export default RecipeSelectBar
*/
  
  );
}

export default RecipeSelectBar


