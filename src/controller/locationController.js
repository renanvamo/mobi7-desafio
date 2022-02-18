const locationService = require('../services/locationService.js');

const getLogByDate = async (req, res) => {
  const { placa } = req.query;
  const result = await locationService.getLogByDate(placa);

  res.status(200).json(result);
};

module.exports = {
  getLogByDate
};
