// https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates

function getDistanceFromCoord(lat1, lon1, lat2, lon2, rad) {
  var R = 6371000; // raio da terra aproximado em metros
  var dLat = deg2rad(lat2-lat1);  // converte graus em radianos
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));  
  var d = R * c; // calcula distancia em metros
  // console.log('Distancia em metros: ', d);
  
  return isWithinRadius(rad, d);
}

function isWithinRadius(radius, distance) {
  if (distance < radius) return true;
    return false; 
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

// teste manual
// const latitudeY = -23.67338275750472;
// const longitudeX = -46.78648726159119;
// const latitude = -23.674360451874854;
// const longitude = -46.78777596898742;
// const raio1 = 100;
// const raio2 = 200;
// console.log('Está dentro de um raio de 100m: ', getDistanceFromCoord(latitude, longitude, latitudeY, longitudeX, raio1))
// console.log('Está dentro de um raio de 200m: ', getDistanceFromCoord(latitude, longitude, latitudeY, longitudeX, raio2))
//

module.exports = getDistanceFromCoord;
