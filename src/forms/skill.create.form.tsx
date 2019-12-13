import React from 'react';
import { Formik, Field } from 'formik';
import { skillValidator } from '../validations/skill.validator';

interface SkillProps {
  data?: {
    id: number,
    skill_name: string,
  } | null,
  handleSubmit: Function
}

const SkillForm = (props: SkillProps) => {
  const empId = props.data ? props.data.id : null;
  console.log('props.data', props.data);
  return (
    <Formik
      initialValues={{
        skill_name: props.data ? props.data.skill_name : "Javascript",
      }}
      onSubmit={(values, actions) => {
        props.handleSubmit(values, empId);
      }}
      validationSchema={skillValidator.skillCreate}
      render={({ errors, touched, isSubmitting, handleSubmit }) => (
        <form className="user" autoComplete="false" onSubmit={handleSubmit} noValidate>
          {/* {err && <span className="main-error">{err.message}</span>} */}
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              id="exampleInputFirstname"
              placeholder="Enter firstname..."
              autoComplete="off"
              name="skill_name" />
            <div className="error-box"><span className={"error " + (errors.skill_name && touched.skill_name ? "show" : "")}>{errors.skill_name}</span></div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-user btn-block"
            disabled={isSubmitting}>{props.data ? "Update" : "Create"}</button>
        </form>
      )} />
  );
}

export default SkillForm;