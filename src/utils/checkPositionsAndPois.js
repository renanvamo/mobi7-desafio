const getDistanceFromCoord = require('../utils/getDistanceFromCoord');
const formatDate = require('./formatDate');
const formatHour = require('./formatHour');

const checkPositionsAndPois = (positions, pois, placa) => {
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
        
        result.push(log);
      }
    }
  }
  return result;
};

module.exports = checkPositionsAndPois;
