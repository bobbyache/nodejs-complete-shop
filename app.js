
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 3rd party middleware - Parse form body.
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    console.log('Running through middleware!');
    next(); // this is middleware, so move onto the next route handler method
});

app.get('/add-product', (req, res, next) => {
    console.log('Navigated to... Add Product!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Products</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3025);


/*
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // this is middleware, so move onto the next route handler method
});

app.use('/add-product', (req, res, next) => {
    console.log('Add Product!');
    res.send('<h1>Add Product</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3025);
*/
