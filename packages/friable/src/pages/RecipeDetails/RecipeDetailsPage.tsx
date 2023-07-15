import { useRecipeContext } from "../../components/RecipeContext";


const RecipeDetailsPage: React.FC = () => {


  const { selectedRecipe } = useRecipeContext();
console.log(selectedRecipe)
  if (!selectedRecipe) {
    // Handle case where no recipe is selected
    return <div>No recipe selected.</div>;
  }

  // Render the recipe details using the selectedRecipe

  return (
    <div>
      <h1>{selectedRecipe.recipeName}</h1>
      <p>Description: {selectedRecipe.description}</p>
      {/* Display other recipe details */}
    </div>
  );
};

export default RecipeDetailsPage;
