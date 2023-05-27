require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const productRoute = require('./controllers/Product');

const app = express();

app.use(morgan('dev'));

// These two middlewares work hand-in-hand with one another
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/products', productRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});
