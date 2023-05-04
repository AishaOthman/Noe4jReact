"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const lodash_1 = __importDefault(require("lodash"));
const neo4j_driver_1 = __importDefault(require("neo4j-driver"));
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
app.get("/neo4j", (req, res) => {
    const driver = neo4j_driver_1.default.driver('neo4j://localhost:7687', neo4j_driver_1.default.auth.basic("neo4j", "password"));
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
