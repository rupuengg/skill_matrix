import * as Yup from 'yup';

const employeeSkillCreate = Yup.object().shape({
  employee_id: Yup.string().required("Firstname is required"),
  skill_id: Yup.string().required("Lastname is required"),
  skill_version: Yup.string().required("Email is mandatory"),
  exp_in_month: Yup.string().required("Phone is mandatory"),
  last_used: Yup.string().required("Phone is mandatory")
});

export const employeeSkillValidator = {
  employeeSkillCreate
};