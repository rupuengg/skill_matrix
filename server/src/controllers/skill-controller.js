const skillService = require('../services/skill-service');
const { OK, SERVER_ERROR } = require('../constants/httpConstant');
const { SKILL } = require('../constants/msgConstant');

const createSkill = async (req, res) => {
  try {
    const emp = await skillService.createSkill(req.body);
    return res.status(OK).json({ status: SKILL.CREATED, data: emp });
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
}

const getSkills = async (req, res) => {
  try {
    const emps = await skillService.getSkills();
    return res.status(OK).json({ data: emps });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const getSkill = async (req, res) => {
  try {
    const emp = await skillService.getSkill(req.params.id);
    return res.status(OK).json(emp);
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const deleteSkill = async (req, res) => {
  try {
    const emp = await skillService.deleteSkill(req.params.id);
    return res.status(OK).json({ status: SKILL.DELETED, data: req.params.id });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const updateSkill = async (req, res) => {
  try {
    const emp = await skillService.updateSkill(req.body, req.params.id);
    return res.status(OK).json({ status: SKILL.UPDATED, data: emp });
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
}

const skillController = {
  createSkill,
  getSkills,
  getSkill,
  deleteSkill,
  updateSkill
};

module.exports = skillController;