const express = require('express');
const router = express.Router();

//addblog
router.get('/addblog',(req,res)=>{
    res.send('response from user addblog');
});

//getbyid
router.get('/getbyid',(req,res)=>{
    res.send('response from user getbyid');
});

//getall
router.get('/getall',(req,res)=>{
    res.send('response from user getall');
});

module.exports=router;
