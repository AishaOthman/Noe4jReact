import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Button, Box, AppBar, Toolbar,Link, Typography } from "@mui/material";
import Footer from "../../components/footer";
import { makeStyles } from '@material-ui/core/styles';
import { IIngredient,IRecipe } from 'shared_data';
import axios from 'axios';
import ResultCard from '../../components/ResultCard';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  SearchByIngredients:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    height: '40vh',
  },
  Autocomplete:{
    width:'30%',
  },
  SearchByFilters:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    height: '40vh',
  },
  Results:{
    hight:'60%',
  },
  footer :{
    marginBottom:'marginBottom',
    
  },
  

}));


const Home: React.FC = () => {
  const classes = useStyles();
  const [Result,setResult] = useState(false);
  const [ingredients,setIngredients] = React.useState<IIngredient[]>([])
//  const [ingredientOptions, setIngredientOptions] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    name: '',
    dietType: '',
    dishType: '',
  });
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


  const searchRecipesByIngredients = async ()=>{
  
    try{
        const serverResponse = await axios.get('/neo4j/recipes',{params:{
         ingredients:searchValue
        }});
        setRecipes(serverResponse.data)
    }catch(error){
      console.log(error)
    }
    if (recipes.length>0){
      setResult(true);
    };
  }
/////////////////////////////SearchComponent/////////////////////////////////////////////////////////
{/**
import { Autocomplete, TextField, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { IIngredient, IRecipe } from "shared_data";

const SearchComponent = ()=>{
    
 
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
          searchRecipesByIngredients()
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
*/}
 
  

  const handleIngredientChange = (event: React.ChangeEvent<{}>, value: string[]) => {
    
    setSelectedIngredients(value);
  };

  

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSearchByFilters = async () => {
    // const results = await searchRecipesByFilters(filters); // Replace with your API call to search recipes by filters
    // setSearchResults(results);
  };


    return (
    <div>
      
        <Box sx={{ flexGrow: 1 }} marginTop={3} marginBottom={0}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }} >
              Welcom To FriAble <br/><h5>Food recipes app</h5>
              </Typography>
          
                <Box sx={{ marginLeft: 'auto' }}>
                <Link color="inherit" href="/Login">Login</Link>
              <Box sx={{ marginLeft: 2, display: 'inline' }} />
                <Link color="inherit" href="/SingUp">SingUp</Link>
              </Box>
            </Toolbar>
         </AppBar>
         <div className={classes.SearchByIngredients}>
        
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
            
            <Button variant="contained" color="primary" onClick={searchRecipesByIngredients}>
              Search By Ingredients
            </Button>
         </div>
         <div className={classes.SearchByFilters}>
          <TextField
              name="name"
              label="Recipe Name"
              variant="outlined"
              value={filters.name}
              onChange={handleFilterChange}
            />
            <TextField
              name="dietType"
              label="Diet Type"
              variant="outlined"
              value={filters.dietType}
              onChange={handleFilterChange}
            />
            <TextField
              name="dishType"
              label="Dish Type"
              variant="outlined"
              value={filters.dishType}
              onChange={handleFilterChange}
            />
              <TextField
              name="ratings"
              label="Ratings"
              variant="outlined"
              value={filters.dishType}
              onChange={handleFilterChange}
            />
              <TextField
              name="skilLevel"
              label="Skil Level"
              variant="outlined"
              value={filters.dishType}
              onChange={handleFilterChange}
            />
            
            <Button variant="contained" color="primary" onClick={handleSearchByFilters}>
            Search By Filters
            </Button>
       
      
      </div> 
     {Result && <div >
      <Typography variant="h6" sx={{ flexGrow: 1 }} >
          Results:
              </Typography>
              <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>
                <div>{recipe.recipeName}</div>
                <div>Number of Ingredients: {recipe.ingredients.length}</div>
                <div>Ingredients:</div>
                <ul>
                  {recipe.ingredients.map((ingredient, ingredientIndex) => (
                    <li key={ingredientIndex}>
                      {ingredient.name} - {ingredient.amount}
                    </li>
                  ))}
                </ul>
                <Link href="/RecipeDetails">View Details</Link>
              </li>
            ))}
          </ul>
        
          
        </div>} 
      <Footer  content={undefined}/>
    </Box>
      
    </div>
      
    )
}
export default Home;


function searchRecipesByFilters(filters: { name: string; dietType: string; dishType: string; }) {
  throw new Error('Function not implemented.');
}
