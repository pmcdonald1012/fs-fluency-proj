import express from "express"
import { ReadyForQueryMessage } from "pg-protocol/dist/messages.js";
import { pool } from "./database.js";
import dotenv from "dotenv";


dotenv.config();
const server = express();
server.use(express.json());
server.use(express.static("static"));

//allows index.html page to be displayed
server.use(express.static('public'));


//////Routes///////
server
   .get('/api/accounts/:id', async(req, res) => {
    const { id } = req.params;
    //get success indicator
     console.log('We got your GET request!');
        try {
            //make a request using helper function
            if (typeof(id) == 'number') {
                let data = (await pool.query('SELECT * FROM accounts WHERE accountid = $1;', [id]));
                res.send(data.rows)
            } else if (id == 'all' || id == undefined) {
                let data = (await pool.query('SELECT * FROM accounts ORDER BY accountid ASC;'));
                res.send(data.rows)
              }
        } catch (e) {
            console.error(e);
        }
   })
   .post('/api/update', async(req, res) => {
       if ((req.body["name"] || req.body["checking"] || req.body["savings"]) === '') {
        console.log("undefined input")
        res.send("undefined input")
       } else {
            const addToAccounts = (await pool.query('INSERT INTO accounts (checking, savings) VALUES ($1, $2) RETURNING *;', [req.body["savings"], req.body["checking"]]))

            const addToNames = (await pool.query('INSERT INTO users (name) VALUES ($1) RETURNING *;', [req.body["name"]]))
            
            const accountId = addToAccounts.rows[0]["accountid"];
            const userId = addToNames.rows[0]["userid"];

            const addToBank = (await pool.query("INSERT INTO bank (accountid, userid) VALUES ($1,$2);", [accountId, userId]));
        
        res.send(req.body);
       }
   })


//listen to port ...
const port = 8000;
server.listen(port, () => {
    console.log(`Express server is running on port: ${port}`);

})

