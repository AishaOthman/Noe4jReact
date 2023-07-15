export interface QueryPayload {
    payload: string | string [];
}
export interface IIngredient {
    name: string;
    amount: string;
  }
  
export interface IRecipe {
      recipeName: string;
      description?:string;
      authorName: string;
      prepTime:number;
      cookTime:number;
      category:string;
      dietType:string;
      ratings?:number;
      skilLevel:string;
      serves:number;
      ingredients:IIngredient[]
      instructions:string[];
}

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
