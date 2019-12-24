import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import { employeeSkillValidator } from "../validations/employee.skill.validator";
import skillService from "../services/skill-service";
import employeeService from "../services/employee-service";
import lookupMasterService from "../services/lookUpMaster-service";
interface EmployeeSkillProps {
  data?: {
    id: number;
    employee_id: number;
    skill_id: string;
    ProficiencyID?: Number;
    ProficiencyValue?: string;
    skill_version?: string;
    exp_in_month?: string;
    last_used?: string;
    CreatedBy: number;
  } | null;
  handleSubmit: Function;
  empId?: string;
}
const EmployeSkillForm = (props: EmployeeSkillProps) => {
  const [employees, setEmployee] = useState([]);
  const [skills, setSkill] = useState([]);
  const [proficiencyLevel, setProficiencyLevel] = useState([]);

  const empId = props.data ? props.data.id : null;

  useEffect(() => {
    employeeService.getEmployees().then(res => {
      setEmployee(res.data);
    });
    skillService.getSkills().then(res => {
      setSkill(res.data);
    });
    lookupMasterService.getProficiencyLevel("Proficiency").then(res => {
      if (res.data != undefined) {
        setProficiencyLevel(res.data);
      }
    });
  }, []);

  // console.log('props.empId', props.empId);

  if (props.empId === null) return null;

  return (
    <Formik
      initialValues={{
        employee_id: props.empId
          ? props.empId
          : props.data
          ? props.data.employee_id
          : props.empId,
        skill_id: props.data ? props.data.skill_id : "",
        ProficiencyID: props.data ? props.data.ProficiencyID : 7,
        ProficiencyValue: props.data ? props.data.ProficiencyValue : "",
        skill_version: props.data ? props.data.skill_version : "1",
        exp_in_month: props.data ? props.data.exp_in_month : "1",
        last_used: props.data ? props.data.last_used : "1",
        CreatedBy: 1
      }}
      onSubmit={(values, actions) => {
        debugger;
        console.log(values);
        props.handleSubmit(values, empId);
      }}
      validationSchema={employeeSkillValidator.employeeSkillCreate}
      render={({ errors, touched, isSubmitting, handleSubmit, values }) => (
        <form
          className="user"
          autoComplete="false"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* {err && <span className="main-error">{err.message}</span>} */}
          <div className="form-group">
            <label>Name</label>
            <Field
              component="select"
              className="form-control"
              autoComplete="off"
              name="employee_id"
              value={values.employee_id}
              disabled={true}
            >
              <option value="" label="Select Employee"></option>
              {employees.map((employee: any) => (
                <option key={employee.id} value={employee.id}>
                  {employee.first_name}
                </option>
              ))}
            </Field>
            {/* <div className="error-box">
              <span
                className={
                  "error " +
                  (errors.employee_id && touched.employee_id ? "show" : "")
                }
              >
                {errors.employee_id}
              </span>
            </div> */}
          </div>
          <div className="form-group">
            <label>Skill</label>
            <Field
              component="select"
              className="form-control"
              name="skill_id"
              id="skill_id"
              value={values.skill_id}
              placeholder="Select Skill"
              disabled={props.data ? true : false}
            >
              <option value="" label="Select Skill"></option>
              {skills.map((skill: any) => (
                <option key={skill.id} value={skill.id}>
                  {skill.skill_name}
                </option>
              ))}
            </Field>
            {/* <div className="error-box">
              <span
                className={
                  "error " + (errors.skill_id && touched.skill_id ? "show" : "")
                }
              >
                {errors.skill_id}
              </span>
            </div> */}
          </div>
          <div className="form-group">
            <label>Proficiency Level</label>
            <Field
              component="select"
              className="form-control"
              placeholder="Select Proficiency"
              name="ProficiencyID"
              id="ProficiencyID"
              value={values.ProficiencyID}
            >
              <option value="" label="Select Proficiency Level"></option>
              {proficiencyLevel.map((value: any) => (
                <option key={value.LookUpID} value={value.LookUpID}>
                  {value.Value}
                </option>
              ))}
            </Field>
            {/* <div className="error-box">
              <span
                className={
                  "error " +
                  (errors.ProficiencyID && touched.ProficiencyID ? "show" : "")
                }
              >
                {errors.ProficiencyID}
              </span>
            </div> */}
          </div>
          <div className="form-group">
            <label>Proficiency Level</label>
            <Field
              component="input"
              className="form-control"
              placeholder="Relevant Experience"
              name="exp_in_month"
              id="exp_in_month"
              value={values.exp_in_month}
            ></Field>
            {/* <div className="error-box">
              <span
                className={
                  "error " +
                  (errors.ProficiencyID && touched.ProficiencyID ? "show" : "")
                }
              >
                {errors.ProficiencyID}
              </span>
            </div> */}
          </div>
          <button type="submit" className="btn btn-primary btn-user btn-block">
            {props.data ? "Update" : "Create"}
          </button>
        </form>
      )}
    />
  );
};

export default EmployeSkillForm;
