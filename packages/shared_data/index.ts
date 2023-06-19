export interface QueryPayload {
    payload: string | string [];
}
export interface IIngredient {
    name: string;
    amount: string;
  }
export interface IRecipe {
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
}
