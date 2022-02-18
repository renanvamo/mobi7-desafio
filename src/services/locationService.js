const locationModel = require('../models/locationModel');
const checkPositionsAndPois = require('../utils/checkPositionsAndPois');
const filterPositionsByDate = require('../utils/filterPositionsByDate');

const getLogsByPlate = async (placa) => {
  const positions = await locationModel.getPositionsByPlate(placa);
  const pois = await locationModel.getPois();

  const log = checkPositionsAndPois(positions, pois, placa);

  return { [placa]: log };
};

const getLogsByPlateAndDate = async (placa, date) => {
  const positions = await locationModel.getPositionsByPlate(placa);
  const pois = await locationModel.getPois();

  const positionsFiltered = filterPositionsByDate(positions, date);

  const log = checkPositionsAndPois(positionsFiltered, pois, placa);

  return { [placa]: log };
};

module.exports = {
  getLogsByPlateAndDate,
  getLogsByPlate
};
