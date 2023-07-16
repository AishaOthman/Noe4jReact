import { useContext,createContext } from 'react'

import { IRecipe } from 'shared_data';

interface IRecipeContext {
  selectedRecipe: IRecipe | null;
  setSelectedRecipe: (recipe: IRecipe | null) => void;
}

export const RecipeContext = createContext<IRecipeContext>({
  selectedRecipe: null,
  setSelectedRecipe: () => {},
});


export const useRecipeContext = () => useContext(RecipeContext);
{/*
const [recipe,setRecipe] = useState(null);
...
<RecipeContext.Provider value={{ selectedRecipe: recipe, setSelectedRecipe: setRecipe }}>
*/}