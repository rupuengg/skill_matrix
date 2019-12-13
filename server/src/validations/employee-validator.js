const Joi = require('joi');

module.exports = {
  employeeValidator: {
    create: {
      body: {
        first_name: Joi.string().trim().required(),
        last_name: Joi.string().trim().required(),
        email: Joi.string().trim().required().email(),
        phone: Joi.string().trim().required()
      }
    },
    get_employee: {
      params: {
        id: Joi.number().required()
      }
    },
    update: {
      body: {
        first_name: Joi.string().trim().required(),
        last_name: Joi.string().trim().required(),
        email: Joi.string().trim().required().email(),
        phone: Joi.string().trim().required()
      },
      params: {
        id: Joi.number().required()
      }
    },
  }
};