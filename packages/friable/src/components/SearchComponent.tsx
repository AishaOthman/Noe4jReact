import { Autocomplete, TextField, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { ingredient, IRecipe } from "shared_data";

const SearchComponent = ()=>{
    const [ingredients,setIngredients] = React.useState<ingredient[]>([])
    const [searchValue,setSearchValue] = React.useState<string[]|null>(null)
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
    const searchRecipes = async ()=>{
      try{
          const serverResponse = await axios.get('/neo4j/recipes',{params:{
           ingredients:searchValue
          }});
          setRecipes(serverResponse.data)
      }catch(error){
        console.log(error)
      }
    }
    return <div>
        <Autocomplete
          multiple
          id="combo-box-demo"
          options={ingredients.map(i=>i.name)}
          onChange={(event: any, newValue: string[] | null) => {
            console.log({newValue})
            setSearchValue(newValue);
          }}
          sx={{ width: 300 }}
          renderInput={(params:any) => <TextField {...params} label="ingredients" />}
        />
        <Button disabled={searchValue===null || searchValue?.length === 0} onClick={()=>{
          searchRecipes()
        }} > Search with ingredients</Button>
        <div>
          results:
          {recipes.map(recipe=>{
            return <><div>
              {recipe.recipeName}
            </div>
            <div>{JSON.stringify(recipe)}</div>
            </>
          })}
        </div>
    </div>
   }
  export default SearchComponent;