const request = require('supertest');
const express = require('express');
const mockProducts = require('../../sampleData/products.json');

const app = express();
const routes = require('../controllers/Product/index');

app.use('/products', routes);

describe('/products', () => {
  test('responds with products data', async () => {
    const result = await request(app).get('/products');
    console.log(result);
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual(mockProducts);
    expect(result.header['content-type']).toContain('json');
  });
});
