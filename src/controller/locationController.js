const locationService = require('../services/locationService.js');
const plateValidation = require('../validations/plateValidation.js');
const datePlateValidation = require('../validations/datePlateValidation.js');

const getLogsByPlate = async (req, res) => {
  const { placa } = req.query;
  
  const { error: validationError } = plateValidation
  ({ placa });
  if (validationError) {
    return res.status(400).json({ erro: validationError.details[0].message });
  };

  const result = await locationService.getLogsByPlate(placa);
  
  res.status(200).json(result);
};

const getLogsByPlateAndDate = async (req, res) => {
  const { placa } = req.query;
  const { date } = req.params;

  const { error: validationError } = datePlateValidation({ placa, date });
  if (validationError) {
    return res.status(400).json({ erro: validationError.details[0].message });
  };
   
  const result = await locationService.getLogsByPlateAndDate(placa, date);

  res.status(200).json(result);
};

module.exports = {
  getLogsByPlateAndDate,
  getLogsByPlate,
};
