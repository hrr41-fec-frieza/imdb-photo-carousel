const axios = require('axios');
const api = axios.create({ baseURL: 'http://localhost:3000' });

describe('Server tests', () => {
  test('Data should be an object', async () => {
    const data = await api.get("/photos");
    expect(typeof data).toBe('object');
  });
});
