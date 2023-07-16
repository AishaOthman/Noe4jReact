import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Button, Box, AppBar, Toolbar,Link, Typography } from "@mui/material";
import Footer from "../../components/footer";
import { makeStyles } from '@material-ui/core/styles';
import { IIngredient,IRecipe } from 'shared_data';
import foodIngredients from '../../components/ingredientsArray'
import Results from '../Results/Results';
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
  const [ingredients,setIngredients] = React.useState<IIngredient[]>([])
//  const [ingredientOptions, setIngredientOptions] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    name: '',
    dietType: '',
    dishType: '',
  });

  // useEffect(()=>{
  //   async function getNeo4jIngredients() {
  //     try{
  //       const serverIngredientsResponse = await axios.get('/neo4j/ingredients');
  //       setIngredients(serverIngredientsResponse.data)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   getNeo4jIngredients();
  // },[])

 
  // useEffect(() => {
  //   // Fetch ingredient options from the database
  //   const fetchIngredients = async () => {
  //     // const ingredients = await getIngredientsFromDB(); // Replace with your API call to get ingredients from the database
  //     // setIngredientOptions(ingredients);
  //   };

  //   fetchIngredients();
  // }, []);

  const handleIngredientChange = (event: React.ChangeEvent<{}>, value: string[]) => {
    setSelectedIngredients(value);
  };

  const handleSearchByIngredients = async () => {
    // const results = await searchRecipesByIngredients(selectedIngredients); // Replace with your API call to search recipes by ingredients
    // setSearchResults(results);
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
                      {/*'Add New Recipe', 'My Recipes', 'my Ingredients List','logout', */}
                      <Box><Typography variant="h5" sx={{ flexGrow: 1 }} >
              Welcom To FriAble 
              </Typography>
              <Typography variant="caption"sx={{ flexGrow: 1 }}>
              Food recipes app
             </Typography>
          </Box>
          
                        <Typography  component="h5" >
                        Welcom Aisha 
                        </Typography>
        
                    <Box sx={{ marginLeft: 'auto' }}>
          
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                        <Link color="inherit" href="/">logOut</Link>
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                        <Link color="inherit" href="/">Add New Recipe</Link>
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                        <Link color="inherit" href="/">My Recipes</Link>
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                        <Link color="inherit" href="/">my Ingredients List</Link>
                        <Box sx={{ marginLeft: 2, display: 'inline' }} />
                    
                     </Box>
                    </Toolbar>
             </AppBar>
      <div className={classes.SearchByIngredients}>
        <Autocomplete  className={classes.Autocomplete}
          multiple
          
          options={foodIngredients}
          // value={selectedIngredients}
          // onChange={handleIngredientChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Select Ingredients"
              placeholder="Start typing..."
            />
          )}
        />
        <Button variant="contained" color="primary" href="/Results">
          Search By Ingredients
        </Button>
      </div>
      {/* export interface IRecipe {
      recipeName: string;
      authorName: string;
      prepTime:number;
      cookTime:number;
      category:string;
      dietType:string;
      ratings:number;
      skilLevel:string;
      dishType:string;
      serves:number;
      ingredients:IIngredient[]
      instructions:string[];
} */}
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
    <Footer content={undefined}/>
    
    </Box>
      
    </div>
      
    )
}
export default Home;

function getIngredientsFromDB() {
  throw new Error('Function not implemented.');
}


function searchRecipesByIngredients(selectedIngredients: string[]) {
  throw new Error('Function not implemented.');
}


function searchRecipesByFilters(filters: { name: string; dietType: string; dishType: string; }) {
  throw new Error('Function not implemented.');
}
