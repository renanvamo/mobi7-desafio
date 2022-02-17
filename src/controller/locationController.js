const locationService = require('../services/locationService.js');

const getLog = (_req, res) => {
  const result = locationService.getLog();

  res.status(200).json(result);
};

module.exports = {
  getLog
};