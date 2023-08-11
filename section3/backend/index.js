//import express
const express = require('express');

//importing routers
const userRouter = require('./routers/userRouter');
const blogRouter = require('./routers/blogRouter');

//initialize express app
const app = express();
const port = 5000;

//middleware
app.use('/user', userRouter); 
app.use('/user', blogRouter); 

//routes
app.get('/', (request,response)=>{
    response.send('response from express');
});

//add
app.get('/add',(req,res)=>{
    res.send('add the data')
});
//getall
app.get('/getall',(req,res)=>{
    res.send('get the data')
});
//delete
app.get('/delete',(req,res)=>{
    res.send('delete the data')
});

app.listen(port, ()=>{console.log('express server started at 5000')});