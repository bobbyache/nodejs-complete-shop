const path = require('path');
const express = require('express');

const router = express.Router();
module.exports = router;


// GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});