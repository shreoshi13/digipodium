//import express
const express = require('express');

//initialize express app
const app = express();
const port = 5000;

app.listen(port, ()=>{console.log('express server started at 5000')});