const connection = require('./connection');
const csvReader = require('./csvReader');

const createCollections = async () => {
  const positions = await csvReader("posicoes.csv");
  const pois = await csvReader("base_pois_def.csv");

  await dropDbMobi7();

  await connection().then((db) => db.collection('positions').insertMany(positions));
  await connection().then((db) => db.collection('pois').insertMany(pois));
  console.log('O banco de dados \'Mobi7\', com as collections \'positions\' e \'pois\' foram criados');
  process.exit();
};

const dropDbMobi7 = async () => {
  await connection().then((db) => db.dropDatabase());
};

createCollections();
