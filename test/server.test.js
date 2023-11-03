const superTest = require ('supertest');

 

test('devo conhecer mais propriedades do jest', async () => {
    const request = superTest('http://localhost:3001'); // Use a URL correta
    const resultado = await request.get('/');
    expect(resultado.status).toBe(200);
  });
