const Joi = require('joi').extend(require('@joi/date')); 

const datePlateValidation = (data) => {
  const schema = Joi.object({
    placa: Joi.string().min(7).max(8).required(),
    date: Joi.date().format('DD-MM-YYYY').utc().required(),
  })
    .messages({
      'string.base': '{{#label}} deve ser uma string',
      'string.min': '{{#label}} deve ter no mínimo {{#limit}} caracteres',
      'string.max': '{{#label}} deve ter no máximo {{#limit}} caracteres',
      'any.required': 'O campo {{#label}} é obrigatório',
      'string.date': 'A data deve ser válida',
      'any.required': 'O campo {{#label}} é obrigatório',
    })
    .validate(data);
  return schema;
};

module.exports = datePlateValidation;
