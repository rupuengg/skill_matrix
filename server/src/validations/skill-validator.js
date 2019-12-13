const Joi = require('joi');

module.exports = {
  skillValidator: {
    create: {
      body: {
        skill_name: Joi.string().trim().required(),
      }
    },
    get_employee: {
      params: {
        id: Joi.number().required()
      }
    },
    update: {
      body: {
        skill_name: Joi.string().trim().required(),
      },
      params: {
        id: Joi.number().required()
      }
    },
  }
};