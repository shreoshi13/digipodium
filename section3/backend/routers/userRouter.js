const express = require('express');
const Model = require('../models/userModel');

const router = express.Router();

router.post('/add',(req,res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//getall
router.get('/getall',(req,res)=>{
    Model.find({})
    .then((result) => {
        res.json(result);

    }).catch((err) => {
        res.status(500).json(err);

    });
});
//getbyid
router.get('/getbyid',(req,res)=>{
    res.send('response from user getbyid');
});
//delete
router.get('/delete',(req,res)=>{
    res.send('response from user delete');
});
//update
router.get('/update',(req,res)=>{
    res.send('response from user update');
});

//

module.exports=router;
