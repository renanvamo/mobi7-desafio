const locationModel = require('../models/locationModel');
const checkPositionsAndPois = require('../utils/checkPositionsAndPois');
const formatDate = require('../utils/formatDate');

const getLogsByPlate = async (placa) => {
  const positions = await locationModel.getPositionsByPlate(placa);
  const pois = await locationModel.getPois();

  const log = checkPositionsAndPois(positions, pois, placa);

  return { [placa]: log };
};

const getLogsByPlateAndDate = async (placa, date) => {
  const positions = await locationModel.getPositionsByPlate(placa);
  const pois = await locationModel.getPois();

  const positionsFiltered = [];
  for (let i = 0; i < positions.length; i += 1) {
    const formattedDate = formatDate(new Date(positions[i].data_posicao)).split('/').join('-');

    if (date.match(formattedDate)) {
      positionsFiltered.push(positions[i]);
    };
  };

  const log = checkPositionsAndPois(positionsFiltered, pois, placa);

  return { [placa]: log };
};

module.exports = {
  getLogsByPlateAndDate,
  getLogsByPlate
};
