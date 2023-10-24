var express = require('express');
var router = express.Router();
var CarModel = require('../models/CarModel');
var SuperModel = require('../models/SuperModel');

router.get('/', async (req,res) => {
  var car = await CarModel.find();
  var supercar  = await SuperModel.find();
res.render('home',{car:car, supercar:supercar});
})

module.exports = router;
