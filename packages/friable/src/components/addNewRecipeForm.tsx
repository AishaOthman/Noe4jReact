import React, {  FormEvent, useState ,MouseEvent,createContext} from 'react';
import { TextField, Button, Grid, Typography, InputLabel, Select, MenuItem, TextareaAutosize } from '@mui/material';
//import { createContext } from 'vm';
import RecipeIngRow from './RecipeIngRow';
import RecipeSelectBar from './RecipeSelectBar';
import RecipeInstruction from './RecipeInstruction';

interface Ingredient{
  title: string;
  value:number;
  // other properties...
}
const Ingredients:Ingredient[] = [
  { title: "Salt", value: 1 },
  { title: "Pepper", value: 2 },
  { title: "Garlic", value: 3 },
  { title: "Onion", value: 4 },
  { title: "Olive oil", value: 5 },
  { title: "Butter", value: 6 },
  { title: "Sugar", value: 7 },
  { title: "Flour", value: 8 },
  { title: "Eggs", value: 9 },
  { title: "Milk", value: 10 },
  { title: "Tomato", value: 11 },
  { title: "Lemon", value: 12 },
  { title: "Basil", value: 13 },
  { title: "Thyme", value: 14 },
  { title: "Rosemary", value: 15 },
  { title: "Parsley", value: 16 },
  { title: "Cinnamon", value: 17 },
  { title: "Ginger", value: 18 },
  { title: "Vanilla extract", value: 19 },
  { title: "Honey", value: 20 }
];

export const RecipeContext = createContext(); 

const AddNewRecipeForm = () => {



  const [recipe, setRecipe] = useState();


  // const handleSubmit: FC = (event:FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Handle form submission logic here save the recipe in db
  // };
  
  const handleClick = () => {
    // Handle button click logic here
    console.log('Button clicked');
  };

function handleSubmit(event: FormEvent<HTMLFormElement>): void {
  throw new Error('Function not implemented.');
   // Handle form submission logic here save the recipe in db
};

function AddNewIngredient(){ // Handle button click logic here
console.log('Button clicked');
};
function AddNewStep(){ // Handle button click logic here
  console.log('Button clicked');
  };
  function SaveRecipe(){ // Handle button click logic here
    console.log('Button clicked');
    };
    function EditRecipe(){ // Handle button click logic here
      console.log('Button clicked');
      };

  // export interface IRecipe {
  //   recipeName: string;
  //   utherName: string;
  //   prepTime:number;
  //   cookTime:number;
  //   category:string;
  //   diteType:string;
  //   ratings:number;
  //   skilLevel:string;
  //   dishType:string;
  //   serves:number;
  //   ingredients:ingredient[]
  //   instructions:string[];
  // }


  return (
          <RecipeContext.Provider value={{recipe, setRecipe}}>
            <RecipeSelectBar/>
            <RecipeIngRow/>
            <RecipeInstruction/>
          </RecipeContext.Provider>
    // <form  onSubmit={handleSubmit} >
    //   <Typography variant='h3' component='h2'marginLeft={5}>
    //     Add New Recipe:
    //   </Typography>
    //   <Grid container marginTop={5}marginLeft={5} >
    //     <Grid item xs={12} marginBottom={3} >
    //       <TextField label="Recipe Name"  />
    //     </Grid>
    //     <Grid item xs={12}  spacing={2} >
    //     <TextField label="serves"  />
    //       <TextField label="dity type"  />
    //       <TextField label="prep time"  />
    //       <TextField label="cook time"  />
    //       <TextField label="category"  />
    //       <TextField label=" skilLevel"  />
    //       <TextField label="dishType"  />
         
    //     </Grid>
    //     <Typography variant='h5' component='h5' marginTop={2}>
    //     Add Igredients:
    //   </Typography>
    //     <Grid item xs={12}   >
    //     <InputLabel id="demo-simple-select-label" >Select Ingrediant</InputLabel>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       value={ingerdient}
    //       style={{ width: '200px'}}
          
    //      // onChange={handleChange}
    //     >
    //       <MenuItem value={10}>Ten</MenuItem>
    //       <MenuItem value={20}>Twenty</MenuItem>
    //       <MenuItem value={30}>Thirty</MenuItem>
    //     </Select>
    //     <TextField label="amount"  />
    //     <Button
    //       type="submit"
    //       variant="contained"
    //       color="primary"
    //       onClick={ AddNewIngredient}
    //     >
    //       ADD
    //     </Button>
    //     </Grid>
    //     <Typography variant='h5' component='h5'>
    //     Instructions:
        
    //     <Typography variant="subtitle2" gutterBottom>
    //    add instructers step by step
    //   </Typography>
    //   </Typography>
      
    //     <Grid item xs={12} >
    //     <TextareaAutosize aria-label="minimum height" minRows={4} 
    //     placeholder="Instinstructionsr"  />
    //      <span>
    //      <Button type="submit" variant="contained" color="primary"
    //      onClick={ AddNewStep}
    //      >
    //         Add step 
    //       </Button>
    //      </span>
    //       </Grid>
    //     <Grid item >

    //       <Button type="submit" variant="contained" color="primary"
    //               onClick={ SaveRecipe}
    //        >
    //         Save Recipe
    //       </Button>
    //       <Button type="submit" variant="contained" color="primary"
    //                onClick={ EditRecipe}
    //        >
    //       Edit Recipe
    //       </Button>
    //     </Grid>
    //   </Grid>
    // </form>
  );
};

export default AddNewRecipeForm;
