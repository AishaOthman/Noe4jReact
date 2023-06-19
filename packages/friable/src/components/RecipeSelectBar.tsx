import React from 'react'

const RecipeSelectBar = () => {
  return (
    <div>RecipeSelectBar</div>
  )
}

export default RecipeSelectBar
// import React, { useContext } from "react";
// //import { RecipeContext } from "./addNewRecipeForm";
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import { Grid } from "@mui/material";

// const RecipeSelectBar = () => {
//  //const {recipe ,setRecipe} = useContext(RecipeContext);
  
  
//   return (
//     <Grid container marginTop={5}marginLeft={5} >
//         <Grid item xs={12} marginBottom={3} >
//           <TextField label="Recipe Name"  onChange={(changeEvent)=>{
//             setRecipe({...recipe, recipeName: (changeEvent.target.value)})
//           }}  />
//         </Grid>
//         <Grid item xs={12}   >
//           <TextField label="serves" onChange={(changeEvent)=>{
//             setRecipe({...recipe, serves: Number(changeEvent.target.value)})
//           }} />
//           <TextField label="dity type"  onChange={(changeEvent)=>{
//             setRecipe({...recipe, diteType: (changeEvent.target.value)})
//           }} />
//           <TextField label="prep time"  onChange={(changeEvent)=>{
//             setRecipe({...recipe, prepTime: Number(changeEvent.target.value)})
//           }}  />
//           <TextField label="cook time"   onChange={(changeEvent)=>{
//             setRecipe({...recipe, cookTime:  Number(changeEvent.target.value)})
//           }} />
//           <TextField label="category"   onChange={(changeEvent)=>{
//             setRecipe({...recipe, category: (changeEvent.target.value)})
//           }}/>
//           <TextField label=" skilLevel"  onChange={(changeEvent)=>{
//             setRecipe({...recipe, skilLevel: (changeEvent.target.value)})
//           }} />
//           <TextField label="dishType"  onChange={(changeEvent)=>{
//             setRecipe({...recipe, dishType: (changeEvent.target.value)})
//           }}/>
         
//        </Grid>
//     </Grid>

//   );
// }

// export default RecipeSelectBar


