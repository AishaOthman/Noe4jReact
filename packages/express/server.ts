import express from 'express';
import cors from 'cors';
import  _ from "lodash";
import neo4j from 'neo4j-driver';
import {QueryPayload} from 'shared_data'; 

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
  app.get("/neo4j",(req,res)=>{
    const  driver =neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic("neo4j", "password"))
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