import React from 'react';
import { Formik, Field } from 'formik';
import { employeeValidator } from '../validations/employee.validator';

interface EmployeeProps {
  data?: {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    phone: string
  } | null,
  handleSubmit: Function
}

const EmployeForm = (props: EmployeeProps) => {
  const empId = props.data ? props.data.id : null;
  console.log('props.data', props.data);
  return (
    <Formik
      initialValues={{
        first_name: props.data ? props.data.first_name : "",
        last_name: props.data ? props.data.last_name : "",
        email: props.data ? props.data.email : "",
        phone: props.data ? props.data.phone : "",
      }}
      onSubmit={(values, actions) => {
        props.handleSubmit(values, empId);
      }}
      validationSchema={employeeValidator.employeeCreate}
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
              name="first_name" />
            <div className="error-box"><span className={"error " + (errors.first_name && touched.first_name ? "show" : "")}>{errors.first_name}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              id="exampleInputLastname"
              placeholder="Enter lastname..."
              autoComplete="off"
              name="last_name" />
            <div className="error-box"><span className={"error " + (errors.last_name && touched.last_name ? "show" : "")}>{errors.last_name}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              id="exampleInputEmail"
              placeholder="Enter email..."
              autoComplete="off"
              name="email" />
            <div className="error-box"><span className={"error " + (errors.email && touched.email ? "show" : "")}>{errors.email}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              id="exampleInputPhone"
              placeholder="Enter phone..."
              autoComplete="off"
              name="phone" />
            <div className="error-box"><span className={"error " + (errors.phone && touched.phone ? "show" : "")}>{errors.phone}</span></div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-user btn-block"
            disabled={isSubmitting}>{props.data ? "Update" : "Create"}</button>
        </form>
      )} />
  );
}

export default EmployeForm;