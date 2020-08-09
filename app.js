
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// 3rd party middleware - Parse form body.
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

// Your middleware
app.use((req, res, next) => {
    console.log('Running through middleware!');
    next(); // this is middleware, so move onto the next route handler method
});


// Your routers
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3025);
