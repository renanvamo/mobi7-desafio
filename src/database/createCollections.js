const connection = require('./connection');
const csvReader = require('./csvReader');
// const positionsCSV = require('../database/filesCSV/posicoes.csv');
// const poisCSV = require('../database/filesCSV/base_pois_def.csv');

const createCollections = async () => {
  const positions = await csvReader("posicoes.csv");
  const pois = await csvReader("base_pois_def.csv");

  await drop();

  connection().then((db) => db.collection('positions').insertMany(positions));
  connection().then((db) => db.collection('pois').insertMany(pois));
};

const drop = async () => {
  await connection().then((db) => db.dropDatabase());
};

createCollections();
process.exit();
