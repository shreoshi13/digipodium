const express = require('express');
const router = express.Router();

//addblog
router.post('/addblog',(req,res)=>{
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

//getbyid
router.get('/getbyid',(req,res)=>{
    Model.find({})
    .then((result) => {
        res.json(result);

    }).catch((err) => {
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

module.exports=router;
