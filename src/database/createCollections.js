const connection = require('./connection');
const csvReader = require('./csvReader');

const createCollections = async () => {
  const positions = await csvReader("posicoes.csv");
  const pois = await csvReader("base_pois_def.csv");

  await dropDbMobi7();

  await connection().then((db) => db.collection('positions').insertMany(positions));
  await connection().then((db) => db.collection('pois').insertMany(pois));
  console.log('Os bancos de dados \'positions\' e \'pois\' foram preenchidos');
  process.exit();
};

const dropDbMobi7 = async () => {
  await connection().then((db) => db.dropDatabase());
};

createCollections();
