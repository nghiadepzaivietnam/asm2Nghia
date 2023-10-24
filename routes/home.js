var express = require('express');
var router = express.Router();
const CarModel=require('../models/CarModel');

router.get('/',async(req,res)=>{
    var car=await CarModel.find();
    ///var super=await SuperModel.find();
    res.render('home',{car:car})
})


module.exports = router;
