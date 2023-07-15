import { Box, Button } from "@mui/material"
import { IRecipe } from "shared_data"
//import {defaultRecipe,defaultRecipe2} from "../pages/AddRecipe/AddRecipe"
import axios from 'axios';

const defaultRecipe : IRecipe = { 
  recipeName : " Healthy pesto eggs on toast " , 
  authorName : "  Sara Buenfeld " , 
  prepTime : 5 , 
  cookTime : 15 , 
  category : " Healthy " , 
  dietType : " Vegan " , 
  ratings : 5 , 
  skilLevel : " Easy " ,  
  serves : 2 , 
  ingredients : [ 
  { name : " bread  " , amount : "2-4 thin slices " }, 
  { name : " eggs" , amount : " 2 " }, 
  { name : "  tomatoes  " , amount : "170g " }, 
  { name : " baby spinach " , amount : "160g" }, 
  { name : "  chilli flakes  " , amount : "pinch (optional) " }, 
  { name : "  garlic" , amount : " 1  clove " }, 
  { name : "basil" , amount : " 10g  " }, 
  { name : " pine nuts " , amount : "1 tbsp" },   
  { name : "rapeseed oil" , amount : "1 tbsp  " }, 
  { name : "  parmesan or vegetarian alternative " , amount : "1 tbsp finely grated" },   
] , 
  instructions : [ 
  "To make the pesto, peel the garlic clove and put in a small food processor along with the basil, pine nuts, oil and 2 tbsp water. Blitz until smooth, then stir in the cheese. Or, blitz using a hand blender. " , 
  " Toast the bread and divide between two plates. Cook the pesto in a frying pan over a medium heat for 30 seconds, stirring. Crack the eggs into one side of the pan, put the tomatoes in the other, and fry in the pesto until the eggs are cooked to your liking. " , 
  "Lift out the eggs and put each one on a slice of toast. Add the spinach to the pan with the tomatoes, turn the heat up to high and cook until wilted, about 2-3 mins. The tomatoes should be soft. Spoon the veg onto the other toast slice and sprinkle with the chilli flakes, if you like."
  ] , 
  } ; 
  const defaultRecipe2 : IRecipe = { 
  recipeName : " PastaV2 " , 
  authorName : " Frodo " , 
  prepTime : 20 , 
  cookTime : 30 , 
  category : " dinner " , 
  dietType : " Vegan " , 
  ratings : 3 , 
  skilLevel : " easy " ,
  serves : 2 , 
  ingredients : [ 
  { name : " pasta " , amount : " 200 grams " }, 
  { name : " olive oil " , amount : " 2 tbs " }, 
  { name : " garlic " , amount : " 2 cloves " }, 
  { name : " salt " , amount : " to taste " }, 
  { name : " pepper " , amount : " to taste " }, 
  { name : " ketchup " , amount : " a lot " }, 
  { name : " mayo " , amount : " a little less than a lot " }, 
  ] , 
  instructions : [ 
  " Boil the pasta until al dente " , 
  " In a pan, saute the garlic in olive oil " , 
  " Mix the pasta with the garlic and oil " , 
  " Season with salt and pepper " , 
  " add the ketchup and mayo and mix with the pasta " 
  ] , 
  } ; 
const WriteToDBComponent = ()=>{
    async function writeRecipeToServer(recipe:IRecipe) {
      try{
        const res = await axios.post('/neo4j/recipe', { recipe })
        console.log(res)
      }catch(err){
        console.log(err)
      }
     
    }
    
    return <div>
      <Box sx={{m:2, p: 2, border: '1px dashed grey' }}>
       
        <h3>by clicking on the button you will write to your neo4j db the defaultRecipe, you can change in the code to defaultRecipe2 to see how it saves another</h3>
        <Button onClick={()=>{
          console.log(defaultRecipe);
           writeRecipeToServer(defaultRecipe);
       }}
      >
          post defaultRecipe to server
          </Button>
       
      </Box>
    </div>
   }
   export default WriteToDBComponent;