const csvtojson = require("csvtojson");

const readCSV = (file) => (
  csvtojson()
    .fromFile(__dirname + '/' + file)
    .then(csvData => csvData)
    .catch(_err => new Error('Arquivo inválido'))
);

module.exports = readCSV;
