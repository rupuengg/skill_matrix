const Joi = require('joi');

module.exports = {
  employeeSkillValidator: {
    create: {
      body: {
        employee_id: Joi.string().trim().required(),
        skill_id: Joi.string().trim().required(),
        skill_version: Joi.string().trim().required(),
        exp_in_month: Joi.string().trim().required(),
        last_used: Joi.string().trim().required()
      }
    },
    get_employee: {
      params: {
        id: Joi.number().required()
      }
    },
    update: {
      body: {
        employee_id: Joi.string().trim().required(),
        skill_id: Joi.string().trim().required(),
        skill_version: Joi.string().trim().required(),
        exp_in_month: Joi.string().trim().required(),
        last_used: Joi.string().trim().required()
      },
      params: {
        id: Joi.number().required()
      }
    },
  }
};