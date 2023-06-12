import React from 'react'
import { Link } from "react-router-dom";
import AddNewRecipeForm from '../../components/addNewRecipeForm';
import WriteToDBComponent from '../../components/WriteToDBComponent'
import SearchComponent from '../../components/SearchComponent'
import { IRecipe } from 'shared_data';

const AddRecipe=()=> {
  return (
    <div>
    <div>Hello</div>
      <Link to="/"> to results</Link>
      <Link to="/Login"> to Login</Link>
      <AddNewRecipeForm />
      <WriteToDBComponent/>
      <SearchComponent/>
    </div>
  )
}
export const defaultRecipe:IRecipe = {
  recipeName: "Pasta",
  utherName: "Sam",
  prepTime: 20,
  cookTime: 30,
  category: "dinner",
  diteType: "Vegan",
  ratings: 5,
  skilLevel: "medium",
  dishType: "plate",
  serves: 2,
  ingredients: [
      {name: "pasta", amount: "200 grams"},
      {name: "olive oil", amount: "2 tbs"},
      {name: "garlic", amount: "2 cloves"},
      {name: "salt", amount: "to taste"},
      {name: "pepper", amount: "to taste"},
  ],
  instructions: [
      "Boil the pasta until al dente",
      "In a pan, saute the garlic in olive oil",
      "Mix the pasta with the garlic and oil",
      "Season with salt and pepper"
  ],
};




export const defaultRecipe2:IRecipe = {
  recipeName: "PastaV2",
  utherName: "Frodo",
  prepTime: 20,
  cookTime: 30,
  category: "dinner",
  diteType: "Vegan",
  ratings: 3,
  skilLevel: "easy",
  dishType: "plate",
  serves: 2,
  ingredients: [
      {name: "pasta", amount: "200 grams"},
      {name: "olive oil", amount: "2 tbs"},
      {name: "garlic", amount: "2 cloves"},
      {name: "salt", amount: "to taste"},
      {name: "pepper", amount: "to taste"},
      {name: "ketchup", amount: "a lot"},
      {name: "mayo", amount: "a little less than a lot"},
  ],
  instructions: [
      "Boil the pasta until al dente",
      "In a pan, saute the garlic in olive oil",
      "Mix the pasta with the garlic and oil",
      "Season with salt and pepper",
      "add the ketchup and mayo and mix with the pasta"
  ],
};

export default AddRecipe