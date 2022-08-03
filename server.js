import express from "express"
import { ReadyForQueryMessage } from "pg-protocol/dist/messages.js";
import { pool } from "./database.js";
import dotenv from "dotenv";

dotenv.config();

const server = express();
server.use(express.json());
server.use(express.static("static"));
let currentUser; 
//routes
server
 .post('/api/accounts/all', async (req, res) => {
     console.log(req.body);
     const id = req.body["userId"];
     console.log(id)
     currentUser = id;
     const getAll = (await pool.query('SELECT * FROM accounts WHERE userid = $1;', [id])).rows;
     console.log(getAll);
     res.send(getAll);
 })
 .post("/api/update", async (req, res) => {
    const checking = req.body["checking"];
    const saving = req.body["savings"];
    const userid = req.body["name"];
    const update = (await pool.query('UPDATE accounts SET checking = $1, savings = $2 WHERE userid = $3;',[checking, saving, userid]));

 })

//allows index.html page to be displayed
// server.use(express.static('public'));


//listen to port ...
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Express server is running on port: ${port}`);
})


