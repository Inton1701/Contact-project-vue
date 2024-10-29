const express = require("express");
// npm install dotenv
const envs = require("dotenv").config();
// npm install bodyParser
const bodyParser = require("body-parser");
// import nyo yung connection na ginawa ninyo 
const connectDB = require("./config/dbConnection");
// npm install cors(ginagamit ito para hindi magka error about security sa vue kapag tatawagin na ninyo yung api)
const cors = require('cors');

// tawagin nyo yung method na ginawa ninyo dun sa dbConnection.js
connectDB();

const app = express();
// import the routes
const route = require("./routes/routes");
// initialise the cors
app.use(cors()); 
// import error handlers
const errorHandler = require("./middleware/errorHandler");
// initialize the express.json para makagamit tayo ng json
app.use(express.json());
app.use("/", route);
app.use(errorHandler);
// if hindi available yung PORT 5000 yung 3000 ang gagamitin
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
