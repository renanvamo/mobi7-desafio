const getDistanceFromCoord = require('../utils/getDistanceFromCoord');
const formatDate = require('./formatDate');
const formatHour = require('./formatHour');

const checkPositionsAndPois = (positions, pois, placa) => {
  const filteredPositions = [];
  pois.map((poi) => (
    positions.map((position) => {
      if (getDistanceFromCoord(position.latitude, position.longitude, poi.latitude, poi.longitude, poi.raio)) {
        const ignicao = position.ignicao == 'true' ? 'ligada' : 'desligada';
        const fullData = position.data_posicao;
        const data = formatDate(fullData);
        const hour = formatHour(fullData);
        const velocidade = position.velocidade;
        const poiLat = poi.latitude;
        const poiLong = poi.longitude;

        const log = `O veículo ${placa} estava no dia ${data} às ${hour} à ${velocidade} km/h na posição (${poiLat} ${poiLong}) com ignição ${ignicao}`;
        
        filteredPositions.push(log);
      }
    })
  ));

  return filteredPositions;
};

module.exports = checkPositionsAndPois;
