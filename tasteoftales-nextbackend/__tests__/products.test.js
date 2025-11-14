const request = require('supertest');
const app = require('../express-server');

describe('Products API', () => {
  let createdId;

  test('GET /api/products returns array', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/products creates a product', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({ name: 'Test Coffee', price: 99 })
      .set('Accept', 'application/json');
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Test Coffee');
    createdId = res.body.id;
  });

  test('PUT /api/products/:id updates a product', async () => {
    const res = await request(app)
      .put(`/api/products/${createdId}`)
      .send({ name: 'Updated Coffee', price: 111 })
      .set('Accept', 'application/json');
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createdId);
    expect(res.body.name).toBe('Updated Coffee');
  });

  test('DELETE /api/products/:id deletes a product', async () => {
    const res = await request(app)
      .delete(`/api/products/${createdId}`)
      .set('Accept', 'application/json');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ success: true });
  });
});
