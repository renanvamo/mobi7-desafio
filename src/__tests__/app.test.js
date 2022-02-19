const chaiHttp = require('chai-http');
const chai = require('chai');
let app = require('../api/app');
const { expect } = chai;

describe('testa a rota \'/location\'', () => {
  let connection;
  const placaCorreta = 'TESTE001';
  const placaIncorreta1 = 'ABC';
  const placaIncorreta2 = 'ABC123456789';
  const dataValida = '18-12-2018';
  const dataInvalida = '2018-12-30';

  before(() => {
    chai.use(chaiHttp);
  });

  beforeEach(() => {
    connection = chai.request(app)
  });

  describe(`pesquisando pela placa \'${placaCorreta}\'`, () => {  
    it(`deve retornar status code \'200\', e ter uma chave igual a placa - \'${placaCorreta}\', e seu valor um array`, (done) => {
      connection
        .get('/location')
        .query({ placa: placaCorreta})
        .end((_err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property(placaCorreta);
          expect(res.body[placaCorreta]).to.be.an('array');
          done();
        });
    });

    it(`deve retornar \'564\' documentos'`, (done) => {
      connection
        .get('/location')
        .query({ placa: placaCorreta})
        .end((_err, res) => {
          expect(res.body[placaCorreta]).to.have.length(564);
          done();
        });
    });

    it(`o primeiro elemento da chave ${placaCorreta}, deve ser \'O veículo TESTE001 estava no dia 19/12/2018 às 15:22:01 à 28 km/h na posição (-25.56742701740896 -51.47653363645077) com ignição ligada\'`, (done) => {
      connection
        .get('/location')
        .query({ placa: placaCorreta})
        .end((_err, res) => {
          expect(res.body[placaCorreta][0]).to.equal('O veículo TESTE001 estava no dia 19/12/2018 às 15:22:01 à 28 km/h na posição (-25.56742701740896 -51.47653363645077) com ignição ligada');
          done();
        });
    });
  });

  describe(`pesquisando por uma placa incorreta`, () => {
    it(`\'${placaIncorreta1}\' deve retornar status code \'400\', e ter uma chave \'erro\', e informar o usuário que são mínimo 7 caracteres`, (done) => {
      connection
        .get('/location')
        .query({ placa: placaIncorreta1})
        .end((_err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('erro');
          expect(res.body.erro).to.be.a('string');
          expect(res.body.erro).to.equal('"placa" deve ter no mínimo 7 caracteres');
          done();
        });
    });

    it(`\'${placaIncorreta2}\' deve retornar status code \'400\', e ter uma chave \'erro\', e informar o usuário que são no máximo 8 caracteres`, (done) => {
      connection
        .get('/location')
        .query({ placa: placaIncorreta2})
        .end((_err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('erro');
          expect(res.body.erro).to.be.a('string');
          expect(res.body.erro).to.equal('"placa" deve ter no máximo 8 caracteres');
          done();
        });
    });
  });

  describe(`pesquisando por uma placa válida ${placaCorreta} e pela data válida ${dataValida}`, () => {
    it(`deve retornar status code \'200\', e ter uma chave igual a placa - \'${placaCorreta}\', e seu valor um array`, (done) => {
      connection
        .get(`/location/${dataValida}`)
        .query({ placa: placaCorreta })
        .end((_err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property(placaCorreta);
          expect(res.body[placaCorreta]).to.be.an('array');
          done();
        });
    });

    it(`deve retornar \'61\' documentos'`, (done) => {
      connection
        .get(`/location/${dataValida}`)
        .query({ placa: placaCorreta })
        .end((_err, res) => {
          expect(res.body[placaCorreta]).to.have.length(61);
          done();
        });
    });

    it(`o primeiro elemento da chave ${placaCorreta}, deve ser \'O veículo TESTE001 estava no dia 18/12/2018 às 00:18:25 à 0 km/h na posição (-25.363333 -51.468333) com ignição desligada\'`, (done) => {
      connection
        .get(`/location/${dataValida}`)
        .query({ placa: placaCorreta})
        .end((_err, res) => {
          expect(res.body[placaCorreta][0]).to.equal('O veículo TESTE001 estava no dia 18/12/2018 às 00:18:25 à 0 km/h na posição (-25.363333 -51.468333) com ignição desligada');
          done();
        });
    });
  });

  describe(`pesquisando por uma placa válida ${placaCorreta} e pela data inválida ${dataInvalida}`, () => {
    it(`deve retornar status code \'400\', e ter uma chave \'erro\', e informar que o formato \'data\' é inválido`, (done) => {
      connection
        .get(`/location/${dataInvalida}`)
        .query({ placa: placaCorreta })
        .end((_err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('erro');
          expect(res.body.erro).to.be.a('string');
          expect(res.body.erro).to.equal('"date" must be in DD-MM-YYYY format');
          done();
        });
    });
  });
});
