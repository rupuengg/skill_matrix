import React from "react";
import { Formik, Field } from "formik";
import { employeeValidator } from "../validations/employee.validator";

interface EmployeeProps {
  data?: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    emp_id: number;
    total_exp_in_month: number;
    relevant_exp_in_month: number;
    designation: string;
    createdBy: Number;
  } | null;
  handleSubmit: Function;
}

const EmployeForm = (props: EmployeeProps) => {
  const empId = props.data ? props.data.id : null;

  return (
    <Formik
      initialValues={{
        first_name: props.data ? props.data.first_name : "",
        last_name: props.data ? props.data.last_name : "",
        email: props.data ? props.data.email : "",
        phone: props.data ? props.data.phone : "",
        emp_id: props.data ? props.data.emp_id : "",
        total_exp_in_month: props.data ? props.data.total_exp_in_month : 0,
        relevant_exp_in_month: props.data
          ? props.data.relevant_exp_in_month
          : 0,
        designation: props.data ? props.data.designation : "",
        createdBy: props.data ? props.data.createdBy : 1
      }}
      onSubmit={values => {
        props.handleSubmit(values, empId);
      }}
      validationSchema={employeeValidator.employeeCreate}
      render={({ errors, touched, isSubmitting, handleSubmit }) => (
        <form
          className="user"
          autoComplete="false"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* {err && <span className="main-error">{err.message}</span>} */}
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              id="exampleInputEmpID"
              placeholder="Enter Employee ID..."
              autoComplete="off"
              name="emp_id"
            />
            <div className="error-box">
              <span
                className={
                  "error " + (errors.emp_id && touched.emp_id ? "show" : "")
                }
              >
                {errors.emp_id}
              </span>
            </div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              id="exampleInputFirstname"
              placeholder="Enter First Name..."
              autoComplete="off"
              name="first_name"
            />
            <div className="error-box">
              <span
                className={
                  "error " +
                  (errors.first_name && touched.first_name ? "show" : "")
                }
              >
                {errors.first_name}
              </span>
            </div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              id="exampleInputLastname"
              placeholder="Enter Last Name..."
              autoComplete="off"
              name="last_name"
            />
            <div className="error-box">
              <span
                className={
                  "error " +
                  (errors.last_name && touched.last_name ? "show" : "")
                }
              >
                {errors.last_name}
              </span>
            </div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              id="exampleInputEmail"
              placeholder="Enter Email..."
              autoComplete="off"
              name="email"
            />
            <div className="error-box">
              <span
                className={
                  "error " + (errors.email && touched.email ? "show" : "")
                }
              >
                {errors.email}
              </span>
            </div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              id="exampleInputPhone"
              placeholder="Enter Phone..."
              autoComplete="off"
              name="phone"
            />
            <div className="error-box">
              <span
                className={
                  "error " + (errors.phone && touched.phone ? "show" : "")
                }
              >
                {errors.phone}
              </span>
            </div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              id="exampleInputTotalExperienceInMonths"
              placeholder="Enter Total Experience (in months)..."
              autoComplete="off"
              name="total_exp_in_month"
            />
            <div className="error-box">
              <span
                className={
                  "error " +
                  (errors.total_exp_in_month && touched.total_exp_in_month
                    ? "show"
                    : "")
                }
              >
                {errors.total_exp_in_month}
              </span>
            </div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              id="exampleInputRelevantExperienceInMonths"
              placeholder="Enter Relevant Experience (in months)..."
              autoComplete="off"
              name="relevant_exp_in_month"
            />
            <div className="error-box">
              <span
                className={
                  "error " +
                  (errors.relevant_exp_in_month && touched.relevant_exp_in_month
                    ? "show"
                    : "")
                }
              >
                {errors.relevant_exp_in_month}
              </span>
            </div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              id="exampleInputDesignation"
              placeholder="Enter Designation..."
              autoComplete="off"
              name="designation"
            />
            <div className="error-box">
              <span
                className={
                  "error " +
                  (errors.designation && touched.designation ? "show" : "")
                }
              >
                {errors.designation}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-user btn-block"
            disabled={isSubmitting}
          >
            {props.data ? "Update" : "Create"}
          </button>
        </form>
      )}
    />
  );
};

export default EmployeForm;
