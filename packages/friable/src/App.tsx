//import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import {QueryPayload} from 'shared_data';
import container from "@mui/material/Container"
import ResultCard from './components/ResultCard';
import AppBar from './components/AppBar';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Results from './pages/Results/Results';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SingUP from './pages/SingUp/SingUP';
import AddRecipe from './pages/AddRecipe/AddRecipe';
import ListOfIngredients from './pages/ListOfIngredients/ListOfIngredients';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails';
import UserCookBook from './pages/UserCookBook/UserCookBook';
import RecipeSelectBar from './components/RecipeSelectBar';
import ListOfIngredientss from './pages/ListOfIngredients/listofIngredientss';
import RecipeIngRow from './components/RecipeIngRow';
import { IRecipe,IIngredient } from 'shared_data';
import Home1 from './pages/Home/Home1';
import UserCookBookk from './pages/UserCookBook/UserCookBookk';
// import AppBar from '@mui/material';

function App() {
  const recipe: IRecipe = {
    recipeName: 'Spaghetti with olive oil and garlic sauce',
    authorName: 'cheryl79',
    prepTime: 5,
    cookTime: 15,
    category: 'Main Course',
    dietType: 'Vegetarian',
    ratings: 4,
    skilLevel: 'Easy',
    dishType: 'cooced',
    serves: 4,
    ingredients: [
      { name: 'Spaghetti', amount: '12 oz' },
      { name: 'Olive oil', amount: '1/2 cup' },
      { name: 'Garlic', amount: '1 1/3 cloves, minced' },
      { name: 'Parsley', amount: '2 tbsp' },
      { name: 'Salt', amount: '1 dash' },
      { name: 'Pepper', amount: '2 dash' },
    ],
    instructions: [' Finely chop the garlic and parsley. Bring a large saucepan of water to a boil. Add spaghetti and cook until al dente (8-10 mins). Drain well, return to saucepan and cover.',
     ' In a medium frying pan over low heat, heat oil. Add garlic and cook gently 5-6 minutes. Do not let garlic brown.',
    'Remove from heat, add parsley and stir. Season with salt and pepper.','Pour warm garlic-oil mixture over spaghetti and toss to coat. Serve.'],
  };
  
    return (
     
    <BrowserRouter>
      <Routes>
        <Route path= "/"  element={<Home/>} />
        {/* <Route path= "CardOfIngredient"  element={<CardOfIngredient/>} /> */}
        <Route path= "/Home1"  element={<Home1/>} />
        <Route path ="/Results" element={<Results/>}/>
        <Route path ="/Login" element={<Login/>}/>
        <Route path ="/SingUp" element={<SingUP/>}/>
        <Route path ="/ListOfIngredients" element={<ListOfIngredients/>}/>
        <Route path ="/ListOfIngredientss" element={<ListOfIngredientss/>}/>
        {/* <Route path ="/AddRecipe" element={<AddRecipe ingredientsList={[]} />}/> */}
        <Route path ="/AddRecipe" element={<AddRecipe/>}/>
        <Route path= "/RecipeDetails"  element={<RecipeDetails />} />
        <Route path ="/UserCookBook" element={<UserCookBook/>}/>
        <Route path ="/RecipeSelectBar" element={<RecipeSelectBar/>}/>
        <Route path ="/RecipeIngRow" element={<RecipeIngRow/>}/>
        <Route path ="/UserCookBook" element={<UserCookBook/>}/>
        <Route path ="/UserCookBookk" element={<UserCookBookk/>}/>
      </Routes>
    </BrowserRouter>);

}

export default App;
