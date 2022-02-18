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
        const ignicao = positions[j].ignicao == 'true' ? 'ligada' : 'desligada';
        const fullData = positions[j].data_posicao;
        const data = formatDate(fullData);
        const hour = formatHour(fullData);
        const velocidade = positions[j].velocidade;
        const poiLat = positions[i].latitude;
        const poiLong = positions[j].longitude;

        const log = `O veículo ${placa} estava no dia ${data} às ${hour} à ${velocidade} km/h na posição (${poiLat} ${poiLong}) com ignição ${ignicao}`;
        
        await result.push(log)
      }
    }
  }

  return { [placa]: result };
}

const formatDate = (datetime) => {
  const date = new Date(datetime)
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const formatHour = (datetime) => {
  const date = new Date(datetime);
  return date.toString().slice(16, 24);
}

module.exports = {
  getLogByDate
};