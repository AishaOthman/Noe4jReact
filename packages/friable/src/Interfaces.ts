interface ingredient {
  name: string;
  amount: string;
}
export interface IRecipe {
    recipeName: string;
    utherName: string;
    prepTime?:number;
    cookTime?:number;
    category?:string;
    diteType?:string;
    ratings?:number;
    skilLevel?:string;
    dishType?:string;
    serves?:number;
    ingredients:ingredient[]
    instructions:string[];
  }
  

  export interface IUser {
    userName:string;
    userEmail:string;
    userPassword:string;

  }