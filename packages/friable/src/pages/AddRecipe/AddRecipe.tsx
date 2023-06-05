import React from 'react'
import { Link } from "react-router-dom";
import AddNewRecipeForm from '../../components/addNewRecipeForm';



const AddRecipe=()=> {
  return (
    <div>
      <div>Hello</div>
      <Link to="/"> to results</Link>
      <Link to="/Login"> to Login</Link>
     <AddNewRecipeForm/>
    </div>
  )
}

export default AddRecipe