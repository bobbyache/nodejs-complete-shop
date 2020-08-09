
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// 3rd party middleware - Parse form body.
app.use(bodyParser.urlencoded({ extended: false}));

// Your middleware
app.use((req, res, next) => {
    console.log('Running through middleware!');
    next(); // this is middleware, so move onto the next route handler method
});


// Your routers
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3025);
