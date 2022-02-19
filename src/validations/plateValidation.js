const Joi = require('joi'); 

const plateValidation = (data) => {
  const schema = Joi.object({
    placa: Joi.string().min(7).max(8).required(),
  })
    .messages({
      'string.base': '{{#label}} deve ser uma stri',
      'string.min': '{{#label}} deve ter no mínimo {{#limit}} caracteres',
      'string.max': '{{#label}} deve ter no máximo {{#limit}} caracteres',
      'any.required': 'O campo {{#label}} é obrigatório',
    })
    .validate(data);
  return schema;
};

module.exports = plateValidation;
