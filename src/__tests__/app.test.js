const chaiHttp = require('chai-http');
const chai = require('chai');
let app = require('../api/app');
const { expect } = chai;

describe('testa a rota \'/location\'', () => {
  let connection;
  const placaCorreta = 'TESTE001';

  before(() => {
    chai.use(chaiHttp);
  });

  beforeEach(() => {
    connection = chai.request(app)
      .get('/location')
  });

  it(`pesquisando pela placa \'${placaCorreta}\', deve retornar status code \'200\', e ter uma chave igual a placa - \'${placaCorreta}\'`, (done) => {
    // teste deve passar
    connection
      .query({ placa: placaCorreta})
      .end((_err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property(placaCorreta);
        done();
      });
  });
});
