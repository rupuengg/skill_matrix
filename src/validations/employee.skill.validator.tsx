import * as Yup from 'yup';

const employeeSkillCreate = Yup.object().shape({
  // employee_id: Yup.string().required("Employee is required"),
  skill_id: Yup.string().required("Skill is required"),
  skill_version: Yup.string().required("Skill's version is mandatory"),
  exp_in_month: Yup.string().required("Exp(in months) is mandatory"),
  last_used: Yup.string().required("Last used(month year) is mandatory")
});

export const employeeSkillValidator = {
  employeeSkillCreate
};