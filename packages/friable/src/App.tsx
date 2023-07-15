import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Home1 from './pages/Home/Home1';
import UserCookBookk from './pages/UserCookBook/UserCookBookk';
import { IIngredient, IRecipe } from 'shared_data';
import { RecipeContext } from './components/RecipeContext';
import RecipeDetailsPage from './pages/RecipeDetails/RecipeDetailsPage';

function App() {
    return (
        <RecipeContext.Provider value={{ selectedRecipe: null, setSelectedRecipe: () => { } }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home1" element={<Home1 />} />
                    <Route path="/Results" element={<Results />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/SingUp" element={<SingUP />} />
                    <Route path="/ListOfIngredients" element={<ListOfIngredients checklist={[]} handleRemoveIngredient={() => { }} handleClearChecklist={() => { }} />} />
                    <Route path="/ListOfIngredientss" element={<ListOfIngredientss />} />
                    <Route path="/AddRecipe" element={<AddRecipe />} />
                    <Route path="/RecipeDetails" element={<RecipeDetails />} />
                    <Route path="/RecipeDetailsPage" element={<RecipeDetailsPage />} />
                    <Route path="/UserCookBook" element={<UserCookBook />} />
                    <Route path="/RecipeSelectBar" element={<RecipeSelectBar />} />
                    <Route path="/RecipeIngRow" element={<RecipeIngRow />} />
                    <Route path="/UserCookBook" element={<UserCookBook />} />
                    <Route path="/UserCookBookk" element={<UserCookBookk />} />
                </Routes>
            </BrowserRouter>
        </RecipeContext.Provider>
    );
}

export default App;
