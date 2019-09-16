import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { employeeValidator } from '../validations/employee.validator';
import { createEmployee } from '../actions/employee.action';

const EmployeForm = (props: any) => {
  return (
    <Formik
      initialValues={{ first_name: "Mohit", last_name: "Kohli", email: "mkohli@bhavnacorp.com", phone: "9876543210" }}
      onSubmit={(values, actions) => {
        props.createEmployee(values);
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
          <button type="submit" className="btn btn-primary btn-user btn-block" disabled={isSubmitting}>Create</button>
        </form>
      )} />
  );
}

export default connect(null, { createEmployee })(EmployeForm);