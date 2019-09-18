import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { employeeSkillValidator } from '../validations/employee.skill.validator';
import skillService from '../services/skill-service';
import employeeService from '../services/employee-service';

interface EmployeeSkillProps {
  data?: {
    id: number,
    employee_id: number,
    skill_id: string,
    skill_version: string,
    exp_in_month: string,
    last_used: string
  } | null,
  handleSubmit: Function,
  empId?: string
}

const EmployeSkillForm = (props: EmployeeSkillProps) => {
  const [employees, setEmployee] = useState([]);
  const [skills, setSkill] = useState([]);

  const empId = props.data ? props.data.id : null;

  useEffect(() => {
    employeeService.getEmployees()
      .then(res => {
        setEmployee(res.data);
      });
    skillService.getSkills()
      .then(res => {
        setSkill(res.data);
      });
  }, []);
  console.log('props.empId', props.empId);

  if (props.empId === null) return null;

  return (
    <Formik
      initialValues={{
        employee_id: props.empId ? props.empId : (props.data ? props.data.employee_id : props.empId),
        skill_id: props.data ? props.data.skill_id : "",
        skill_version: props.data ? props.data.skill_version : "",
        exp_in_month: props.data ? props.data.exp_in_month : "",
        last_used: props.data ? props.data.last_used : "",
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        props.handleSubmit(values, empId);
      }}
      validationSchema={employeeSkillValidator.employeeSkillCreate}
      render={({ errors, touched, isSubmitting, handleSubmit, values }) => (
        <form className="user" autoComplete="false" onSubmit={handleSubmit} noValidate>
          {/* {err && <span className="main-error">{err.message}</span>} */}
          <div className="form-group">
            <Field
              component="select"
              className="form-control"
              autoComplete="off"
              name="employee_id"
              value={values.employee_id}>
              <option value="" label="Select Employee"></option>
              {employees.map((employee: any) => <option key={employee.id} value={employee.id}>{employee.first_name}</option>)}
            </Field>
            <div className="error-box"><span className={"error " + (errors.employee_id && touched.employee_id ? "show" : "")}>{errors.employee_id}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="select"
              className="form-control"
              name="skill_id"
              id="skill_id"
              value={values.skill_id}
              placeholder="Select Skill">
              <option value="" label="Select Skill"></option>
              {skills.map((skill: any) => <option key={skill.id} value={skill.id}>{skill.skill_name}</option>)}
            </Field>
            <div className="error-box"><span className={"error " + (errors.skill_id && touched.skill_id ? "show" : "")}>{errors.skill_id}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control"
              placeholder="Enter version..."
              autoComplete="off"
              name="skill_version" />
            <div className="error-box"><span className={"error " + (errors.skill_version && touched.skill_version ? "show" : "")}>{errors.skill_version}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control"
              placeholder="Enter exp in months"
              autoComplete="off"
              name="exp_in_month" />
            <div className="error-box"><span className={"error " + (errors.exp_in_month && touched.exp_in_month ? "show" : "")}>{errors.exp_in_month}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control"
              placeholder="Enter last used year"
              autoComplete="off"
              name="last_used" />
            <div className="error-box"><span className={"error " + (errors.last_used && touched.last_used ? "show" : "")}>{errors.last_used}</span></div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-user btn-block"
            disabled={isSubmitting}>{props.data ? "Update" : "Create"}</button>
        </form >
      )} />
  );
}

export default EmployeSkillForm;