const locationModel = require('../models/locationModel');
const checkPositionsAndPois = require('../utils/checkPositionsAndPois');

const getLogsByPlate = async (placa) => {
  const positions = await locationModel.getPositionsByPlate(placa);
  const pois = await locationModel.getPois();

  const log = checkPositionsAndPois(positions, pois, placa);

  return { [placa]: log };
};

const getLogsByPlateAndDate = async (placa, date) => {
  const positions = await locationModel.getPositionsByPlateAndDate(placa, date);
  const pois = await locationModel.getPois();

  const log = checkPositionsAndPois(positions, pois, placa);

  return { [placa]: log };
};

module.exports = {
  getLogsByPlateAndDate,
  getLogsByPlate
};