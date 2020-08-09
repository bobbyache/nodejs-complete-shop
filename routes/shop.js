const path = require('path');
const express = require('express');

const router = express.Router();
module.exports = router;

router.get('/', (req, res, next) => {
    console.log('In another middleware!');
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});
