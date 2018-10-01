const express = require('express'),
      router = express.Router({mergeParams:true});

const Product = require('../models/product');
const config = require('../config/database');

// INDEX - show all products
router.get('/', (req, res) => {
  // Get all products from DB
  Product.find({}, function(err, allProducts) {
      if(err) throw err;
      return res.json(allProducts);
  });
});

// SHOW - shows more info about one product
router.get('/:id', (req, res) => {
  //find the product with provided ID
  Product.findById(req.params.id).exec((err, foundProduct) => {
    if(err || !foundProduct) {
        res.json({success: false, msg: 'Product not found'});
    } else {
        res.json(foundProduct);
    }
  });
});

module.exports = router;
