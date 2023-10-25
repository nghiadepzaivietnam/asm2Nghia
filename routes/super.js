var express = require('express');
var router = express.Router();
var SuperModel = require('../models/SuperModel');

router.get('/', async (req, res) => {
  var superData = await SuperModel.find();
  res.render('super/index', { super: superData });
});

router.get('/admin', async (req, res) => {
  var superData = await SuperModel.find();
  res.render('super/admin', { super: superData });
});

router.get('/detail/:id', async (req, res) => {
  var id = req.params.id;
  var superData = await SuperModel.findById(id);
  res.render('super/detail', { super: superData });
});

router.get('/delete/:id', async (req, res) => {
  var id = req.params.id;
  await SuperModel.findByIdAndDelete(id);
  res.redirect('/super/admin');
});

router.get('/add', async (req, res) => {
  res.render('super/add');
});

router.post('/add', async (req, res) => {
  var superData = req.body;
  await SuperModel.create(superData);
  res.redirect('/super/admin');
});

router.get('/edit/:id', async (req, res) => {
  var id = req.params.id;
  var superData = await SuperModel.findById(id);
  res.render('super/edit', { super: superData });
});

router.post('/edit/:id', async (req, res) => {
  var id = req.params.id;
  var superData = req.body;
  await SuperModel.findByIdAndUpdate(id, superData);
  res.redirect('/super/admin');
});

router.post('/search', async (req, res) => {
  var keyword = req.body.name;
  var superData = await SuperModel.find({ name: new RegExp(keyword, "i") });
  res.render('super/index', { super: superData });
});

router.get('/admin/priceasc', async (req, res) => {
  var superData = await SuperModel.find().sort({ price: 1 });
  res.render('super/admin', { super: superData });
});

router.get('/admin/quantityasc', async (req, res) => {
  var superData = await SuperModel.find().sort({quantity:1});
  res.render('super/admin', { super: superData });
});

module.exports = router;