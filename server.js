import express from "express"
import { ReadyForQueryMessage } from "pg-protocol/dist/messages.js";
import { pool } from "./database.js";


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
       console.log(req.body);
       res.send(req.body);
   })


//listen to port ...
const port = 8000;
server.listen(port, () => {
    console.log(`Express server is running on port: ${port}`);

})
