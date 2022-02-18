const locationModel = require('../models/locationModel');

const getLogByDate = async (placa) => {
  const positions = await locationModel.getPositionsByPlate(placa);
  const pois = await locationModel.getPois();

  const log = checkPositionsAndPois(positions, pois, placa);

  return { [placa]: log };
};

module.exports = {
  getLogByDate
};