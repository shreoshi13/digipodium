const express = require('express');
const Model = require('../models/productModel');

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
    Model.find({})
    .then((result) => {
        res.json(result);

    }).catch((err) => {
        res.status(500).json(err);

    });
});
//delete
router.post('/delete',(req,res)=>{
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
//update
router.post('/update',(req,res)=>{
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


module.exports=router;
