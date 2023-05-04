import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3001;
export interface QueryPayload {
    foo:string;
}

app.get("/",(req,res)=>{

   // res.setHeader('Access-Control-Allow-Origin','*');
    const data :QueryPayload ={foo : "bar"}
    res.json(data);
});

app.listen(port,()=>{
    console.log(' app listening att http://localhost:${port}');
});