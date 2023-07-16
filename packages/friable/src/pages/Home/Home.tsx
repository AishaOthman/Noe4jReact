import React, { useState, useEffect, useContext } from 'react';
import { Autocomplete, TextField, Button, Box, AppBar, Toolbar,Link, Typography, MenuItem } from "@mui/material";
import Footer from "../../components/footer";
import { makeStyles } from '@material-ui/core/styles';
import { IIngredient,IRecipe } from 'shared_data';
import axios from 'axios';
import { RecipeContext } from '../../components/RecipeContext';
import { useNavigate }  from 'react-router-dom';


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
const Ratings=[1,2,3,4,5]

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
    height: '30vh',
  },
  Autocomplete:{
    width:'30%',
  },
  SearchByFilters:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    height: '30vh',
  },
  Results:{
    padding: theme.spacing(6),
    hight:'60%',
  },
  footer :{
    marginBottom:'marginBottom',
    marginTop: 'auto'
    
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
    authorName:'',
    dietType: '',
    category: '',
    skilLevel:'',
    ratings:'',
  });
  const [searchValue,setSearchValue] = React.useState<string[]|null>(null)
  const [recipes,setRecipes] = React.useState<IRecipe[]>([]);
  const [recipe,setRecipe] = React.useState<IRecipe>();
  const { setSelectedRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();


 
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
        console.log(serverResponse.data)
        if (serverResponse.data.length>0){
          setResult(true);
        };
    }catch(error){
      console.log(error)
    }
  
  }

  const handleRecipeClick = (recipe: IRecipe) => {
    setSelectedRecipe(recipe);
    
    console.log(recipe.recipeName)
    navigate('/RecipeDetailsPage'); 
  };
  
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
    try {
      const response = await axios.get('/neo4j/recipes', { params: filters });
      const recipes = response.data;
      setRecipes(recipes);
      setResult(recipes.length > 0);
    } catch (error) {
      console.log(error);
    }
  };
  


    return (
    <div>
      
        <Box sx={{ flexGrow: 1 }} marginTop={3} marginBottom={0}>
          <AppBar position="static">
            <Toolbar>
              <Box>
                    <Typography variant="h5" sx={{ flexGrow: 1 }} >
                  Welcom To FriAble 
                  </Typography>
                    <Typography variant="caption"sx={{ flexGrow: 1 }}>
                    Food recipes app
                  </Typography>
               </Box>
              
               <Box sx={{ marginLeft: 'auto' }}>
                <Link color="inherit" href="/Login">Login</Link>
                <Box sx={{ marginLeft: 2, display: 'inline' }} />
                <Link color="inherit" href="/Logout">Logout</Link>
              <Box sx={{ marginLeft: 2, display: 'inline' }} />
                <Link color="inherit" href="/SingUp">SingUp</Link>
              </Box>
            </Toolbar>
         </AppBar>
         <div className={classes.SearchByIngredients}>
        
              <Autocomplete
              multiple
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
              name="author"
              label="Author Name"
              variant="outlined"
              value={filters.authorName}
              onChange={handleFilterChange}
            />
            <TextField
            select
              name="category"
              label="Category"
              variant="outlined"
            //  variant="outlined"
              value={filters.category}
              onChange={handleFilterChange}
              sx={{ width: 250 }}>
 {RecipeCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
              </TextField>
          
              <TextField
              select
              name="dietType"
              label="Diet Type"
              variant="outlined"
             // variant="outlined"
              value={filters.dietType}
              onChange={handleFilterChange}
              sx={{ width: 250 }}
            >
                  {DietTypes.map((diet) => (
            <MenuItem key={diet} value={diet}>
              {diet}
            </MenuItem>
          ))}
            </TextField>
            <TextField
              select
              name="skilLevel"
              label="Skil leve"
              variant="outlined"
              value={filters.skilLevel}
              onChange={handleFilterChange}
              sx={{ width: 250 }}>
     {skilLevel.map((leve) => (
            <MenuItem key={leve} value={leve}>
              {leve}
            </MenuItem>
          ))}
              </TextField>
              <TextField
              select
              name="ratings"
              label="Ratings"
              variant="outlined"
              value={filters.ratings}
              onChange={handleFilterChange}
              sx={{ width: 250 }}>
     {Ratings.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
              </TextField>
        
    
            
            <Button variant="contained" color="primary" onClick={handleSearchByFilters}>
            Search By Filters
            </Button>
       
      
      </div> 
     {Result && <div className={classes.Results} >
      <Typography variant="h6" sx={{ flexGrow: 1 }} >
          Results:
              </Typography>
              <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>
                <div>{recipe.recipeName}</div>
                <div>Number of Ingredients: {recipe.ingredients.length}</div>
               
              {/*  <div>Ingredients:</div>
                 <ul>
                  {recipe.ingredients.map((ingredient, ingredientIndex) => (
                    <li key={ingredientIndex}>
                      {ingredient.name} - {ingredient.amount}
                    </li>
                  ))}
                </ul> */}
                
                <Link onClick={() => handleRecipeClick(recipe)}>View Details</Link>
                <div>--------------------------------------------------</div>
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


// function searchRecipesByFilters(filters: { name: string; dietType: string; dishType: string; }) {
//   throw new Error('Function not implemented.');
// }
