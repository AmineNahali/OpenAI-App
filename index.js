const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

//Init express object
const app = express();

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//Endpoints
app.use('/openai',require('./routes/openaiRoutes'));
//Static directory
app.use(express.static(path.join(__dirname,'public')));

//Listen on port 5000
app.listen(port, ()=>{console.log(`Server started on port ${port}`);});