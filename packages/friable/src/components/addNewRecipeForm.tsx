// import React, { useState } from 'react';
// import { useForm, useFieldArray } from 'react-hook-form';
// import { IRecipe, IIngredient }from 'shared_data';
// import { TextField, Button, MenuItem, Container, Box } from '@material-ui';

// interface Props {
//   ingredientsList: IIngredient[];
// }

// export const RecipeForm: React.FC<Props> = ({ ingredientsList }) => {
//   const { register, control, handleSubmit, setValue } = useForm<IRecipe>();
//   const [instructions, setInstructions] = useState<string[]>(['']);

//   const { fields: ingredientsFields, append: ingredientsAppend, remove: ingredientsRemove } = useFieldArray({
//     control,
//     name: 'ingredients',
//   });

//   const handleInstructionAdd = () => {
//     setInstructions([...instructions, '']);
//   };

//   const handleInstructionRemove = (index: number) => {
//     setInstructions(instructions.filter((_, idx) => idx !== index));
//   };

//   const handleInstructionChange = (index: number, newValue: string) => {
//     const newInstructions = [...instructions];
//     newInstructions[index] = newValue;
//     setInstructions(newInstructions);
//   };

//   const onSubmit = (data: IRecipe) => {
//     // Include the instructions in the form data
//     console.log({ ...data, instructions });
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <TextField fullWidth margin="normal" label="Recipe Name" {...register('recipeName')} />
//         {/* ... Add similar TextField components for the other IRecipe fields here ... */}

//         {ingredientsFields.map((item, index) => (
//           <Box key={item.id}>
//             <TextField
//               select
//               fullWidth
//               margin="normal"
//               label="Ingredient"
//               {...register(`ingredients.${index}.name` as const)}
//             >
//               {ingredientsList.map((ingredient) => (
//                 <MenuItem key={ingredient.name} value={ingredient.name}>
//                   {ingredient.name}
//                 </MenuItem>
//               ))}
//             </TextField>
//             <TextField
//               fullWidth
//               margin="normal"
//               label="Amount"
//               {...register(`ingredients.${index}.amount` as const)}
//             />
//             <Button onClick={() => ingredientsRemove(index)}>Remove</Button>
//           </Box>
//         ))}

//         <Button onClick={() => ingredientsAppend({ name: '', amount: '' })}>Add Ingredient</Button>

//         {instructions.map((instruction, index) => (
//           <Box key={index}>
//             <TextField
//               fullWidth
//               margin="normal"
//               label="Instruction"
//               value={instruction}
//               onChange={(e) => handleInstructionChange(index, e.target.value)}
//             />
//             <Button onClick={() => handleInstructionRemove(index)}>Remove</Button>
//           </Box>
//         ))}

//         <Button onClick={handleInstructionAdd}>Add Instruction</Button>

//         <Button type="submit">Submit</Button>
//       </form>
//     </Container>
//   );
// };
import React, {  FormEvent, useState ,MouseEvent,createContext} from 'react';
import { TextField, Button, Grid, Typography, InputLabel, Select, MenuItem, TextareaAutosize, Container } from '@mui/material';
//import { createContext } from 'vm';
import RecipeIngRow from './RecipeIngRow';
import RecipeSelectBar from './RecipeSelectBar';
//import RecipeInstruction from './RecipeInstruction';
import { IRecipe } from 'shared_data';


interface Ingredient{
  title: string;
  value:number;
  // other properties...
}
// const Ingredients:Ingredient[] = [
//   { title: "Salt", value: 1 },
//   { title: "Pepper", value: 2 },
//   { title: "Garlic", value: 3 },
//   { title: "Onion", value: 4 },
//   { title: "Olive oil", value: 5 },
//   { title: "Butter", value: 6 },
//   { title: "Sugar", value: 7 },
//   { title: "Flour", value: 8 },
//   { title: "Eggs", value: 9 },
//   { title: "Milk", value: 10 },
//   { title: "Tomato", value: 11 },
//   { title: "Lemon", value: 12 },
//   { title: "Basil", value: 13 },
//   { title: "Thyme", value: 14 },
//   { title: "Rosemary", value: 15 },
//   { title: "Parsley", value: 16 },
//   { title: "Cinnamon", value: 17 },
//   { title: "Ginger", value: 18 },
//   { title: "Vanilla extract", value: 19 },
//   { title: "Honey", value: 20 }
// ];

  export const RecipeContext = createContext<{
    recipe: IRecipe;
    setRecipe:(recipe:IRecipe)=>void;
  }>({
      recipe: {
        recipeName: "",
        authorName: "",
        prepTime: 0,
        cookTime: 0,
        category: "",
        dietType: "",
        ratings: 0,
        skilLevel: "",
        serves: 0,
        ingredients: [],
        instructions: [""],
        },
        setRecipe: () => {},
});



const AddNewRecipeForm = () => {



  const [recipe, setRecipe] = useState<IRecipe>({
    recipeName: "",
    authorName: "",
    prepTime: 0,
    cookTime: 0,
    category: "",
    dietType: "",
    ratings: 0,
    skilLevel: "",
    serves: 0,
    ingredients: [],
    instructions: [""],
  });


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
    <Container sx={{marginY:5}}>
          <RecipeContext.Provider value={{recipe, setRecipe}}>
            <RecipeSelectBar/>
            <RecipeIngRow/>
            {/* <RecipeInstruction/> */}
          </RecipeContext.Provider>
          </Container>
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
