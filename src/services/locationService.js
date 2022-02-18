const locationModel = require('../models/locationModel');
const getDistanceFromCoord = require('../utils/getDistanceFromCoord');


const getLogByDate = async (placa) => {
  const positions = await locationModel.getPositionsByPlate(placa);
  const pois = await locationModel.getPois();


  //necessário implementar a lógica para verificar se as coordenadas de posicao, estao dentro do raio de pois
  // const result = 'O veículo TESTE001 estava no dia 19/12/18 às 15h07m19s a 10 km/h na posição (51.549662,-25.5244493) com ignição ligada.';
  const result = [];
  for (let i = 0; i < pois.length; i += 1) {
    for (let j = 0; j < positions.length; j += 1) {
      if (getDistanceFromCoord(positions[j].latitude, positions[j].longitude, pois[i].latitude, pois[i].longitude, pois[i].raio)) {
        const log = `O veículo ${placa} estava no dia ${positions[j].data_posicao} à ${positions[j].velocidade} km/h na posição (${positions[j].latitude} ${positions[j].longitude}) com ignição ${positions[j].ignicao}`
        
        await result.push(log)
      }
    }
  }

  return { [placa]: result };
}

module.exports = {
  getLogByDate
};