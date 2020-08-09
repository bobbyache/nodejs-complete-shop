const express = require('express');

const router = express.Router();
module.exports = router;


router.get('/add-product', (req, res, next) => {
    console.log('Navigated to... Add Product!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Products</button></form>');
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});