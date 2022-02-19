const datePlateValidation = require("../validations/datePlateValidation");
const plateValidation = require("../validations/plateValidation");

const plate = (req, res, next) => {
  const { placa } = req.query;
  
  const { error: validationError } = plateValidation({ placa });
  ({ placa });
  if (validationError) {
    return res.status(400).json({ erro: validationError.details[0].message });
  };

  next();
};

const dateAndPlate = (req, res, next) => {
  const { placa } = req.query;
  const { date } = req.params;

  const { error: validationError } = datePlateValidation({ placa, date });
  if (validationError) {
    return res.status(400).json({ erro: validationError.details[0].message });
  };

  next();
};

module.exports = {
  plate,
  dateAndPlate,
}