"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const lodash_1 = __importStar(require("lodash"));
const neo4j_driver_1 = __importDefault(require("neo4j-driver"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 3001;
app.use((_req, res, next) => {
    // Continue to next middleware
    next();
});
app.get("/", (_req, res) => {
    const responseData = {
        payload: lodash_1.default.snakeCase("Server data returned successfully"),
    };
    res.json(responseData);
});
const driver = neo4j_driver_1.default.driver('neo4j://localhost:7687', neo4j_driver_1.default.auth.basic("neo4j", "password"));
app.get("/neo4j", (req, res) => {
    const session = driver.session();
    try {
        console.log("starting session!!");
        session.executeRead(txc => txc.run('match(n) return n').then((result) => {
            const recordsName = result.records.map(r => r.get('n').properties.name);
            const responseData = {
                payload: recordsName
            };
            res.json(responseData);
        }));
    }
    catch (e) {
        console.log("Query Failed!");
        session.close();
        res.status(500);
        res.render('error', { error: e });
    }
});
// app.get("/",(req,res)=>{
//   
//     const data :QueryPayload ={foo : "bar"}
//     res.json(data);
// });
app.listen(port, () => {
    console.log(' app listening att http://localhost:${port}');
});
const addRecipe = (driver, recipe) => __awaiter(void 0, void 0, void 0, function* () {
    const session = driver.session();
    let result;
    try {
        // Start a transaction
        const transaction = session.beginTransaction();
        // Create or find the nodes for category, dietType, skillLevel, and dishType
        const createOrFindNodes = ['category', 'dietType', 'skillLevel', 'dishType']
            .filter(prop => recipe[prop])
            .map(prop => {
            const query = `MERGE (a:${prop.charAt(0).toUpperCase() + prop.slice(1)} {name: $value})
                RETURN a as node
                `;
            // console.log(prop, query)
            return transaction.run(query, { value: recipe[prop] });
        });
        // Create or find the nodes for ingredients
        const createOrFindIngredientNodes = recipe.ingredients.map((ingredient) => {
            const query = `
                MERGE (b:Ingredient {name: $name})
                RETURN b as node
              `;
            // console.log(ingredient, query)
            return transaction.run(query, { name: ingredient.name });
        });
        // Wait for all the nodes to be created or found
        const nodes = yield Promise.all([...createOrFindNodes, ...createOrFindIngredientNodes]);
        // Create the recipe node
        const recipeNode = yield transaction.run(`
                CREATE (r:Recipe $props)
                RETURN r
              `, { props: (0, lodash_1.omit)(recipe, 'ingredients') });
        // Connect the recipe to the nodes with a RELATES_TO edge
        for (let node of nodes) {
            const recordNode = node.records[0].get('node');
            // console.log("node",node)
            if (recordNode.labels.includes('Ingredient')) {
                const ingredientIndex = recipe.ingredients.findIndex(ingredient => ingredient.name === recordNode.properties.name);
                yield transaction.run(`
                  MATCH (r:Recipe {recipeName: $recipeName}), (i:Ingredient {name: $name})
                  CREATE (r)-[:IS_IN {amount: $amount}]->(i)
                  CREATE (i)-[:CONTAINS]->(r)
                `, { recipeName: recipe.recipeName, name: recipe.ingredients[ingredientIndex].name, amount: recipe.ingredients[ingredientIndex].amount });
            }
            else {
                result = yield transaction.run(`
                  MATCH (r:Recipe {recipeName: $recipeName}), (node)
                  WHERE id(node) = $id
                  CREATE (r)-[:RELATES_TO]->(node)
                  return (r)
                `, { recipeName: recipe.recipeName, id: recordNode.identity.low });
            }
        }
        // Commit the transaction
        yield transaction.commit();
    }
    catch (error) {
        console.error('Error writing to database', error);
        result = error;
    }
    finally {
        session.close();
    }
    return result;
});
app.post("/neo4j/recipe", body_parser_1.default.json(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = req.body.recipe;
    const writeResult = yield addRecipe(driver, recipe);
    res.json({ writeResult });
}));
app.get('/neo4j/recipes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ingredients } = req.query;
    if (!Array.isArray(ingredients) || ingredients.some(ingredient => typeof ingredient !== 'string')) {
        return res.status(400).json({ error: 'Invalid ingredients.' });
    }
    { /**
  
  MATCH (r:Recipe)-[rel:IS_IN]->(i:Ingredient)
  WHERE i.name IN=='Cottage cheese'
  WITH r, COLLECT({name: i.name, amount: rel.amount}) as queriedIngredients, COUNT(i) as count
  WHERE count >= $ingredientCount
  MATCH (r)-[relAll:IS_IN]->(iAll:Ingredient)
  WITH r, queriedIngredients, COLLECT({name: iAll.name, amount: relAll.amount}) as allIngredients
  RETURN DISTINCT r as recipe, queriedIngredients, allIngredients
  
  MATCH (r:Recipe)-[rel:IS_IN]->(i:Ingredient)
      WHERE i.name IN $ingredients
      WITH r, COLLECT({name: i.name, amount: rel.amount}) as recipeIngredients, COUNT(i) as count
      WHERE count >= $ingredientCount
      RETURN DISTINCT r as recipe, recipeIngredients
  */
    }
    const session = driver.session();
    const query = `
  MATCH (r:Recipe)-[rel:IS_IN]->(i:Ingredient)
  WHERE i.name IN $ingredients
  WITH r, COLLECT({name: i.name, amount: rel.amount}) as queriedIngredients, COUNT(i) as count
  WHERE count >= $ingredientCount
  MATCH (r)-[relAll:IS_IN]->(iAll:Ingredient)
  WITH r, queriedIngredients, COLLECT({name: iAll.name, amount: relAll.amount}) as allIngredients
  RETURN DISTINCT r as recipe, queriedIngredients, allIngredients
`;
    try {
        const result = yield session.run(query, { ingredients, ingredientCount: ingredients.length });
        const recipes = result.records.map(record => (Object.assign(Object.assign({}, record.get('recipe').properties), { ingredients: record.get('allIngredients') })));
        res.json(recipes);
    }
    catch (error) {
        console.error('Error querying database', error);
        res.status(500).json({ error: 'Server error.' });
    }
    finally {
        session.close();
    }
}));
app.get('/neo4j/ingredients', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = driver.session();
    const query = `
    MATCH (i:Ingredient)
    RETURN i
  `;
    try {
        const result = yield session.run(query);
        const ingredients = result.records.map(record => record.get('i').properties);
        res.json(ingredients);
    }
    catch (error) {
        console.error('Error querying database', error);
        res.status(500).json({ error: 'Server error.' });
    }
    finally {
        session.close();
    }
}));
