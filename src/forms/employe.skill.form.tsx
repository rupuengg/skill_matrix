import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { employeeSkillValidator } from '../validations/employee.skill.validator';
import skillService from '../services/skill-service';
import employeeService from '../services/employee-service';

interface EmployeeSkillProps {
  data?: {
    id: number,
    employee_id: string,
    skill_id: string,
    skill_version: string,
    exp_in_month: string,
    last_used: string
  } | null,
  handleSubmit: Function
}

const EmployeSkillForm = (props: EmployeeSkillProps) => {
  const [employees, setEmployee] = useState([]);
  const [skills, setSkill] = useState([]);

  const empId = props.data ? props.data.id : null;
  useEffect(() => {
    skillService.getSkills()
      .then(res => {
        setSkill(res.data);
      });
    employeeService.getEmployees()
      .then(res => {
        setEmployee(res.data);
      })
  }, [])
  console.log('props.data', props.data);
  return (
    <Formik
      initialValues={{
        employee_id: props.data ? props.data.employee_id : "1",
        skill_id: props.data ? props.data.skill_id : "1",
        skill_version: props.data ? props.data.skill_version : "ES6",
        exp_in_month: props.data ? props.data.exp_in_month : "10",
        last_used: props.data ? props.data.last_used : "2018",
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        props.handleSubmit(values, empId);
      }}
      validationSchema={employeeSkillValidator.employeeSkillCreate}
      render={({ errors, touched, isSubmitting, handleSubmit }) => (
        <form className="user" autoComplete="false" onSubmit={handleSubmit} noValidate>
          {/* {err && <span className="main-error">{err.message}</span>} */}
          <div className="form-group">
            <Field
              component="select"
              className="form-control form-control-user"
              autoComplete="off"
              name="employee_id">
              {employees.map((employee: any) => <option value={employee.id}>{employee.first_name}</option>)}
            </Field>
            <div className="error-box"><span className={"error " + (errors.employee_id && touched.employee_id ? "show" : "")}>{errors.employee_id}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="select"
              className="form-control form-control-user"
              autoComplete="off"
              name="skill_id" >
              {skills.map((skill: any) => <option value={skill.id}>{skill.skill_name}</option>)}
            </Field>
            <div className="error-box"><span className={"error " + (errors.skill_id && touched.skill_id ? "show" : "")}>{errors.skill_id}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              placeholder="Enter email..."
              autoComplete="off"
              name="skill_version" />
            <div className="error-box"><span className={"error " + (errors.skill_version && touched.skill_version ? "show" : "")}>{errors.skill_version}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              placeholder="Enter phone..."
              autoComplete="off"
              name="exp_in_month" />
            <div className="error-box"><span className={"error " + (errors.exp_in_month && touched.exp_in_month ? "show" : "")}>{errors.exp_in_month}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              placeholder="Enter phone..."
              autoComplete="off"
              name="last_used" />
            <div className="error-box"><span className={"error " + (errors.last_used && touched.last_used ? "show" : "")}>{errors.last_used}</span></div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-user btn-block"
            disabled={isSubmitting}>{props.data ? "Update" : "Create"}</button>
        </form>
      )} />
  );
}

export default EmployeSkillForm;