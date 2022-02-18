const connection = require('../database/connection');

const getDocuments = (collection) => connection().then((db) => db.collection(collection));

const getPositionsByPlate = async (placa) => {
  const collection = await getDocuments('positions');
  const positions = await collection.find({ placa }).toArray();

  return positions;
};

const getPositionsByPlateAndDate = async (placa, date) => {
  const collection = await getDocuments('positions');
  const positions = await collection.find({ placa, data_posicao: date }).toArray();

  console.log(positions.length);
  return positions;
};

const getPois = async () => {
  const collection = await getDocuments('pois');
  const pois = await collection.find().toArray();

  return pois;
}

module.exports = {
  getPositionsByPlateAndDate,
  getPositionsByPlate,
  getPois
};
