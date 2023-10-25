var express = require('express');
var router = express.Router();
// const CarModel=require('../models/CarModel');
var CarModel = require('../models/CarModel');

// Get homePAGE
router.get('/', async (req,res) => {
  var car = await CarModel.find();
res.render('car/index',{car:car})

})

router.get('/admin',async(req,res) => {
    var car=await CarModel.find();
    res.render('car/admin',{car:car})
})

router.get('/detail/:id',async(req,res) => {
    var id=req.params.id;
    var car=await CarModel.findById(id);
    res.render('car/detail',{car:car})
})

router.get('/delete/:id',async(req,res)=>{
    var id = req.params.id;
    await CarModel.findByIdAndDelete(id);
    res.redirect('/car/admin')
})

router.get('/add', async(req, res)=>{
    res.render('car/add')
})

router.post('/add',async(req, res)=>{
    var car=req.body;
    await CarModel.create(car)
    res.redirect('/car/admin')
})

router.get('/edit/:id',async(req, res)=>{
    var id=req.params.id;
    var car= await CarModel.findById(id);
    res.render('car/edit',{car:car})
})

router.post('/edit/:id',async(req,res)=>{
    var id=req.params.id;
    var car=req.body;
    await CarModel.findByIdAndUpdate(id, car)
    res.redirect('/car/admin');
})
router.post('/search',async(req,res)=>{
    var keyword=req.body.name;
    var car=await CarModel.find({name: new RegExp(keyword,"i")});
    res.render('car/index',{car:car});
})

router.get('/admin/priceasc',async(req,res)=>{
    var car=await CarModel.find().sort({price:1});
    res.render('car/admin',{car:car})
})
router.get('/admin/quantityasc',async(req,res)=>{
    var car=await CarModel.find().sort({quantity:1});
    res.render('car/admin',{car:car})
})

module.exports = router;