
import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { IRecipe, IIngredient}from 'shared_data';
import { TextField,AppBar,Grid,Link,Toolbar,Typography, Button, MenuItem, Container, Box, Autocomplete } from '@mui/material';
import axios from 'axios';
import Footer from '../../components/footer';
import { TextareaAutosize } from '@material-ui/core';

export const RecipeCategories=[
  "Appetizers and Snacks" ,
"Soups and Stews",
"Salads and Dressings",
"Main Courses",
"Side Dishes",
"Desserts",
"Baking and Pastries",
"Breakfast and Brunch",
"Smoothies and Juices",
"Beverages",
"Other"
]
export const skilLevel=[
  "Easy",
  "Medium",
  "Hard",
  "Beginner",
  "Novice",
  "Intermediate",
  "Experienced",
  "Advanced",
  "Simple",
  "Moderate",
  "Challenging",
  "Complex",
  "Expert"
]

 export const DietTypes = [
  "Vegetarian" ,
"Vegan",
"nut-Free",
"low-sodium", 
"low-sugar",
"Gluten-Free",
"Dairy-Free",
"Paleo",
"Keto",
"Low-Carb",
"Mediterranean",
"Whole30",
"Pescatarian",
"Other"
]
interface Props {
  ingredientsList: IIngredient[];
}

const AddRecipe: React.FC= () => {
  
  const [ingredients,setIngredients] = React.useState<IIngredient[]>([])


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


  const { register, control, handleSubmit, setValue } = useForm<IRecipe>();
  const [instructions, setInstructions] = useState<string[]>(['']);

  const { fields: ingredientsFields, append: ingredientsAppend, remove: ingredientsRemove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const handleInstructionAdd = () => {
    setInstructions([...instructions, '']);
  };

  const handleInstructionRemove = (index: number) => {
    setInstructions(instructions.filter((_, idx) => idx !== index));
  };

  const handleInstructionChange = (index: number, newValue: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = newValue;
    setInstructions(newInstructions);
  };

  
  async function writeRecipeToServer(recipe:IRecipe) {
    try{
      const res = await axios.post('/neo4j/recipe', { recipe })
      console.log(res)
    }catch(err){
      console.log(err)
    }
   
  }
  const onSubmit = (data: IRecipe) => {
     // Check if at least one ingredient is provided
     if (data.ingredients.length === 0 || data.ingredients.some((ingredient) => ingredient.name.trim() === '')) {
      console.log('Please provide at least one ingredient.');
      return;
    }
    // Check if at least one instruction is provided
    if (instructions.length === 0 || instructions.some((instruction) => instruction.trim() === '')) {
      console.log('Please provide at least one instruction.');
      return;
    }

    // Include the instructions in the form data
    const recipeWithInstructions: IRecipe = {
      ...data,
      instructions: instructions.filter((instruction) => instruction.trim() !== ''), // Exclude empty instructions
    };
    writeRecipeToServer(recipeWithInstructions);
    console.log(recipeWithInstructions);
  };
  
  return (
    
    <Container component="main" /*maxWidth="xs"*/>
        <Box sx={{ flexGrow: 1 }} marginTop={3} marginBottom={3}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" sx={{ flexGrow: 1 }} >
            Add New Recipe
          </Typography>
        
          <Box sx={{ marginLeft: 'auto' }}>
        <Link color="inherit" href="/">Home</Link>
        <Box sx={{ marginLeft: 2, display: 'inline' }} />
        <Link color="inherit" href="/ListOfIngredients">My ingredients list</Link>
        <Box sx={{ marginLeft: 2, display: 'inline' }} />
        <Link color="inherit" href="/UserCookBook">My cookbook</Link>
      </Box>
          
          
        </Toolbar>
      </AppBar>
    </Box>
       <Typography
       marginBottom={3}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Welcome To Add New Recipe Page,<br/>Please share your favorite recipe with us
          </Typography>
          <Container maxWidth="xs">
          <form onSubmit={handleSubmit(onSubmit)}>
        <TextField fullWidth margin="normal" label="Recipe Name" {...register('recipeName',{ required: true })} />
        <TextareaAutosize
          minRows={3}
          placeholder="Description"
          style={{ width: '100%', marginBottom: '1rem', resize: 'none' }}
          {...register('description')}
        />
        <TextField fullWidth margin="normal" label="Author Name" {...register('authorName')} />
        <TextField fullWidth margin="normal" label="prep Time" {...register('prepTime')} />
        <TextField fullWidth margin="normal" label="cook Time" {...register('cookTime')} />
        <TextField
          select
          fullWidth
          margin="normal"
          label="Category"
          {...register('category', { required: true })}
        >
          {RecipeCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          fullWidth
          margin="normal"
          label="Diet Type"
          {...register('dietType')}
        >
          {DietTypes.map((diet) => (
            <MenuItem key={diet} value={diet}>
              {diet}
            </MenuItem>
          ))}
        </TextField>
        {/* <TextField fullWidth margin="normal" label="category" {...register('category',{ required: true })} /> */}
        {/* <TextField fullWidth margin="normal" label="dietType" {...register('dietType')} /> */}



        {/* <TextField fullWidth margin="normal" label="ratings" {...register('ratings')} /> */}
        {/* <TextField fullWidth margin="normal" label="Skil Level" {...register('skilLevel')} /> */}
        <TextField
          select
          fullWidth
          margin="normal"
          label="Skil Level"
          {...register('skilLevel')}
        >
          {skilLevel.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </TextField>

        <TextField fullWidth margin="normal" label="Serves" {...register('serves')} />
        
  
        {ingredientsFields.map((item, index) => (
          <Box key={item.id} >
            
            <Autocomplete
            freeSolo
              options={ingredients.map((ingredient) => ingredient.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal"
                  label="Ingredient"
                  {...register(`ingredients.${index}.name` as const, { required: true })}
                />
              )}
            />
            
            <TextField
              fullWidth
              margin="normal"
              label="Amount"
              {...register(`ingredients.${index}.amount` as const)}
            />
            <Button onClick={() => ingredientsRemove(index)}>Remove</Button>
          </Box>
        ))}

        <Button onClick={() => ingredientsAppend({ name: '', amount: '' })}>Add Ingredient</Button>

        {instructions.map((instruction, index) => (
          <Box key={index}>
            <TextField
              fullWidth
              margin="normal"
              label="Instruction"
              value={instruction}
            
              onChange={(e) => handleInstructionChange(index, e.target.value)}
            />
            <Button onClick={() => handleInstructionRemove(index)}>Remove</Button>
          </Box>
        ))}

        <Button onClick={handleInstructionAdd}>Add Instruction</Button>
<br/>
        <Button 
         fullWidth
        type="submit">Submit</Button>
      </form>
          </Container>
     <Footer content={undefined}/>
    </Container>
  );
};
export default AddRecipe 



// import React from 'react'
// import { Link } from "react-router-dom";
// import AddNewRecipeForm from '../../components/addNewRecipeForm';
// import WriteToDBComponent from '../../components/WriteToDBComponent'
// import SearchComponent from '../../components/SearchComponent'
// import { IRecipe } from 'shared_data';
// const AddRecipe=()=> {
//   return (
//     <div >
//     <div >Hello</div>
//       <Link to="/"> to results</Link>
//       <Link to="/Login"> to Login</Link>
//       <AddNewRecipeForm />
//       <WriteToDBComponent/>
//       <SearchComponent/>
//     </div>
//   )
// }
// export default AddRecipe 

///////////////////////////////////////////////////WriteToDBComponent/////////////////////////////////////////////////////////////////////////////////////
{/*


import { Box, Button } from "@mui/material"
import { IRecipe } from "shared_data"
//import {defaultRecipe,defaultRecipe2} from "../pages/AddRecipe/AddRecipe"
import axios from 'axios';

const WriteToDBComponent = ()=>{
    
    
    return <div>
      <Box sx={{m:2, p: 2, border: '1px dashed grey' }}>
       
        <h3>by clicking on the button you will write to your neo4j db the defaultRecipe, you can change in the code to defaultRecipe2 to see how it saves another</h3>
        <Button //onClick={()=>{
           // writeRecipeToServer(defaultRecipe);
      //  }}
      >
          post defaultRecipe to server
          </Button>
       
      </Box>
    </div>
   }
   export default WriteToDBComponent;

 const Recipe-Categories=["Appetizers and Snacks" ,
"Soups and Stews",
"Salads and Dressings",
"Main Courses",
"Side Dishes",
"Desserts",
"Baking and Pastries",
"Breakfast and Brunch",
"Smoothies and Juices",
"Beverages",
"Other"
]


const Diet-Types=["Vegetarian" ,
"Vegan",
"nut-Free",
"low-sodium", 
"low-sugar",
"Gluten-Free",
"Dairy-Free",
"Paleo",
"Keto",
"Low-Carb",
"Mediterranean",
"Whole30",
"Pescatarian",
"Other"
]



*/

}
