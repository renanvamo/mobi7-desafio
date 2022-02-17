const connection = require('../database/connection');

const getDocuments = (collection) => connection().then((db) => db.collection(collection));

const getPositions = async () => {
  const positions = await getDocuments('positions');
  return positions;
};

const getPois = async () => {
  const pois = await getDocuments('pois');
  return pois
}

module.exports = {
  getPositions,
  getPois
};
