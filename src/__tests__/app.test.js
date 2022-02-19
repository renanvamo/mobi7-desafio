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

  describe(`pesquisando pela placa \'${placaCorreta}\'`, () => {  
    it(`deve retornar status code \'200\', e ter uma chave igual a placa - \'${placaCorreta}\', e seu valor um array`, (done) => {
      connection
        .query({ placa: placaCorreta})
        .end((_err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property(placaCorreta);
          expect(res.body[placaCorreta]).to.be.an('array');
          done();
        });
    });
  
    it(`deve retornar \'724\' documentos'`, (done) => {
      connection
        .query({ placa: placaCorreta})
        .end((_err, res) => {
          expect(res.body[placaCorreta]).to.have.length(564);
          done();
        });
    });

    it(`o primeiro elemento da chave ${placaCorreta}, deve ser \'O veículo TESTE001 estava no dia 19/12/2018 às 15:22:01 à 28 km/h na posição (-25.56742701740896 -51.47653363645077) com ignição ligada\'`, (done) => {
      connection
        .query({ placa: placaCorreta})
        .end((_err, res) => {
          expect(res.body[placaCorreta][0]).to.equal('O veículo TESTE001 estava no dia 19/12/2018 às 15:22:01 à 28 km/h na posição (-25.56742701740896 -51.47653363645077) com ignição ligada');
          done();
        });
    });
  });
});
