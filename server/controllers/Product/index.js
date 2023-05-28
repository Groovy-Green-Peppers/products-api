const express = require('express');
const productController = require('./ProductController');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const results = await productController.getProducts();
    console.log(results);
    res.send(results.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const results = await productController.getProduct(req.params.id);
    res.send(results);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

router.get('/:id/styles', async (req, res) => {
  try {
    const results = await productController.getProductStyle(req.params.id);
    res.send(results);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

router.get('/:id/related', async (req, res) => {
  try {
    const results = await productController.getProductRelated(req.params.id);
    res.send(results);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

module.exports = router;
