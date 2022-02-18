const locationService = require('../services/locationService.js');

const getLogsByPlate = async (req, res) => {
  const { placa } = req.query;
  const result = await locationService.getLogsByPlate(placa);

  res.status(200).json(result);
};

const getLogsByPlateAndDate = async (req, res) => {
  const { placa } = req.query;
  const { date } = req.params;
   
  const result = await locationService.getLogsByPlateAndDate(placa, date);

  res.status(200).json(result);
};

module.exports = {
  getLogsByPlateAndDate,
  getLogsByPlate,
};
