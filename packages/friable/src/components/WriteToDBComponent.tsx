import { Box, Button } from "@mui/material"
import { IRecipe } from "shared_data"
import {defaultRecipe,defaultRecipe2} from "../pages/AddRecipe/AddRecipe"
import axios from 'axios';

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
            writeRecipeToServer(defaultRecipe);
        }}>
          post defaultRecipe to server
          </Button>
       
      </Box>
    </div>
   }
   export default WriteToDBComponent;