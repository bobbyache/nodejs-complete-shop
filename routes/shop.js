const express = require('express');

const router = express.Router();
module.exports = router;

router.get('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>');
});
