const locationModel = require('../models/locationModel');
const getDistanceFromCoord = require('../utils/getDistanceFromCoord');


const getLogByDate = async (placa) => {
  const positions = await locationModel.getPositionsByPlate(placa);
  const pois = await locationModel.getPois();

  //necessário implementar a lógica para verificar se as coordenadas de posicao, estao dentro do radio de pois
  const result = 'O veículo TESTE001 estava no dia 19/12/18 às 15h07m19s a 10 km/h na posição (51.549662,-25.5244493) com ignição ligada.';

  return { result };
}

module.exports = {
  getLogByDate
};