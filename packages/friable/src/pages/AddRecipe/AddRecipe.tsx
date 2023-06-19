
import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { IRecipe, IIngredient }from 'shared_data';
import { TextField, Button, MenuItem, Container, Box } from '@mui/material';
import axios from 'axios';

interface Props {
  ingredientsList: IIngredient[];
}

const AddRecipe: React.FC<Props> = ({ ingredientsList }) => {
  
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

  const onSubmit = (data: IRecipe) => {
    // Include the instructions in the form data
    console.log({ ...data, instructions });
  };

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField fullWidth margin="normal" label="Recipe Name" {...register('recipeName')} />
        <TextField fullWidth margin="normal" label="authorName" {...register('authorName')} />
        <TextField fullWidth margin="normal" label="prepTime" {...register('prepTime')} />
        <TextField fullWidth margin="normal" label="cookTime" {...register('cookTime')} />
        <TextField fullWidth margin="normal" label="category" {...register('category')} />
        <TextField fullWidth margin="normal" label="dietType" {...register('dietType')} />
        <TextField fullWidth margin="normal" label="ratings" {...register('ratings')} />
        <TextField fullWidth margin="normal" label="skilLevel" {...register('skilLevel')} />
        <TextField fullWidth margin="normal" label="dishType" {...register('dishType')} />
        <TextField fullWidth margin="normal" label="serves" {...register('serves')} />
        
        //... Add similar TextField components for the other IRecipe fields here ... 
        export interface IRecipe {
      recipeName: string;
      utherName: string;
      prepTime:number;
      cookTime:number;
      category:string;
      diteType:string;
      ratings:number;
      skilLevel:string;
      dishType:string;
      serves:number;
      ingredients:IIngredient[]
      instructions:string[];
}

        
 
        {ingredientsFields.map((item, index) => (
          <Box key={item.id}>
            <TextField
              select
              fullWidth
              margin="normal"
              label="Ingredient"
              {...register(`ingredients.${index}.name` as const)}
            >
              {ingredientsList.map((ingredient) => (
                <MenuItem key={ingredient.name} value={ingredient.name}>
                  {ingredient.name}
                </MenuItem>
              ))}
            </TextField>
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

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};
export default AddRecipe 


