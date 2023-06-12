import express from 'express';
import cors from 'cors';
import  _, { omit } from "lodash";
import neo4j, { Driver } from 'neo4j-driver';
import bodyParser from 'body-parser';
import { QueryPayload, IRecipe, ingredient } from 'shared_data';

const app = express();
app.use(cors());
const port = 3001;

app.use((_req, res, next) => {
  
    // Continue to next middleware
    next();
  });
  app.get("/", (_req, res) => {
    const responseData: QueryPayload = {
        payload: _.snakeCase("Server data returned successfully"),
    };
  
    res.json(responseData);
  });
  const  driver =neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic("neo4j", "password"))
  app.get("/neo4j",(req,res)=>{
   
    const session = driver.session();
    try{
      console.log("starting session!!")
      session.executeRead(txc=> txc.run('match(n) return n').then((result: { records: any[]; })=> {
        const recordsName:string[] = result.records.map(r => r.get('n').properties.name);
        const responseData:QueryPayload = {
          payload:recordsName
        }
        res.json(responseData);
      }))
   
    }catch(e){
      console.log("Query Failed!");
      session.close();
      res.status(500)
      res.render('error', { error: e })
    }
  
  })
  
  

// app.get("/",(req,res)=>{

//   
//     const data :QueryPayload ={foo : "bar"}
//     res.json(data);
// });

app.listen(port,()=>{
    console.log(' app listening att http://localhost:${port}');
});

const addRecipe = async (driver: Driver, recipe: IRecipe) => {
  const session = driver.session();
  let result;
  try {
    // Start a transaction
    const transaction = session.beginTransaction();


    // Create or find the nodes for category, dietType, skillLevel, and dishType
    const createOrFindNodes = ['category', 'dietType', 'skillLevel', 'dishType']
      .filter(prop => recipe[prop as keyof IRecipe])
      .map(prop => {
        const query = `MERGE (a:${prop.charAt(0).toUpperCase() + prop.slice(1)} {name: $value})
        RETURN a as node
        `;
        // console.log(prop, query)
        return transaction.run(query, { value: recipe[prop as keyof IRecipe] });
      });


    // Create or find the nodes for ingredients
    const createOrFindIngredientNodes = recipe.ingredients.map((ingredient: ingredient) => {
      const query = `
        MERGE (b:Ingredient {name: $name})
        RETURN b as node
      `;
      // console.log(ingredient, query)
      return transaction.run(query, { name: ingredient.name });
    });


    // Wait for all the nodes to be created or found
    const nodes = await Promise.all([...createOrFindNodes, ...createOrFindIngredientNodes]);


    // Create the recipe node


    const recipeNode = await transaction.run(
      `
        CREATE (r:Recipe $props)
        RETURN r
      `,
      { props: omit(recipe, 'ingredients') }
    );


    // Connect the recipe to the nodes with a RELATES_TO edge
    for (let node of nodes) {
      const recordNode = node.records[0].get('node');
      // console.log("node",node)
      if (recordNode.labels.includes('Ingredient')) {
        const ingredientIndex = recipe.ingredients.findIndex(ingredient => ingredient.name === recordNode.properties.name);
        await transaction.run(
          `
          MATCH (r:Recipe {recipeName: $recipeName}), (i:Ingredient {name: $name})
          CREATE (r)-[:IS_IN {amount: $amount}]->(i)
          CREATE (i)-[:CONTAINS]->(r)
        `,
          { recipeName: recipe.recipeName, name: recipe.ingredients[ingredientIndex].name, amount: recipe.ingredients[ingredientIndex].amount }
        );
      } else {
        result = await transaction.run(
          `
          MATCH (r:Recipe {recipeName: $recipeName}), (node)
          WHERE id(node) = $id
          CREATE (r)-[:RELATES_TO]->(node)
          return (r)
        `,
          { recipeName: recipe.recipeName, id: recordNode.identity.low }
        );
      }
    }


    // Commit the transaction
    await transaction.commit();
  } catch (error) {
    console.error('Error writing to database', error);
    result = error;
  } finally {
    session.close();
  }
  return result;
}

app.post("/neo4j/recipe", bodyParser.json(), async (req, res) => {
  const recipe = req.body.recipe as IRecipe
  const writeResult = await addRecipe(driver, recipe);
  res.json({writeResult})
})
app.get('/neo4j/recipes', async (req, res) => {
  const { ingredients } = req.query;


  if (!Array.isArray(ingredients) || ingredients.some(ingredient => typeof ingredient !== 'string')) {
    return res.status(400).json({ error: 'Invalid ingredients.' });
  }


  const session = driver.session();
  const query = `
    MATCH (r:Recipe)-[rel:IS_IN]->(i:Ingredient)
    WHERE i.name IN $ingredients
    WITH r, COLLECT({name: i.name, amount: rel.amount}) as recipeIngredients, COUNT(i) as count
    WHERE count >= $ingredientCount
    RETURN DISTINCT r as recipe, recipeIngredients
`;
 
  try {
    const result = await session.run(query, { ingredients, ingredientCount: ingredients.length  });
    const recipes = result.records.map(record => ({ ...record.get('recipe').properties, ingredients: record.get('recipeIngredients') }));


    res.json(recipes);
  } catch (error) {
    console.error('Error querying database', error);
    res.status(500).json({ error: 'Server error.' });
  } finally {
    session.close();
  }
});




app.get('/neo4j/ingredients', async (req, res) => {
  const session = driver.session();
  const query = `
    MATCH (i:Ingredient)
    RETURN i
  `;
 
  try {
    const result = await session.run(query);
    const ingredients = result.records.map(record => record.get('i').properties);


    res.json(ingredients);
  } catch (error) {
    console.error('Error querying database', error);
    res.status(500).json({ error: 'Server error.' });
  } finally {
    session.close();
  }
});

