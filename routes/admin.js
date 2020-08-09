const express = require('express');

const router = express.Router();
module.exports = router;


// GET
router.get('/add-product', (req, res, next) => {
    console.log('Navigated to... Add Product!');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Products</button></form>');
});

// POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});