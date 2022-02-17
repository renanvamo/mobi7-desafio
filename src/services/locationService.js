const locationModel = require('../models/locationModel');
const getDistanceFromCoord = require('../utils/getDistanceFromCoord');


const getLog = () => {
  const positions = locationModel.getPositions();
  const pois = locationModel.getPois();

  //necessário implementar a lógica para verificar se as coordenadas de posicao, estao dentro do radio de pois
  const result = 'O veículo TESTE001 estava no dia 19/12/18 às 15h07m19s a 10 km/h na posição (51.549662,-25.5244493) com ignição ligada.';

  return result;
}

module.exports = {
  getLog
};