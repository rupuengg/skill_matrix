import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { authValidator } from '../validations/auth.validator';

interface LoginFormProps {
  handleSubmit: Function,
  err?: {
    message: string
  }
}

const LoginForm = (props: LoginFormProps) => {
  const { handleSubmit, err } = props;
  return (
    <Formik
      initialValues={{ email: "admin@yopmail.com", password: "testing" }}
      onSubmit={(values, actions) => {
        handleSubmit(values.email, values.password)
          .then((res: any) => {
            actions.setSubmitting(false);
          });
      }}
      validationSchema={authValidator.authLoginSchema}
      render={({ handleSubmit, errors, touched, isSubmitting }) => (
        <form className="user" autoComplete="false" onSubmit={handleSubmit} noValidate>
          {err && <span className="main-error">{err.message}</span>}
          <div className="form-group">
            <Field
              component="input"
              type="email"
              className="form-control form-control-user"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email address..."
              autoComplete="off"
              name="email" />
            <div className="error-box"><span className={"error " + (errors.email && touched.email ? "show" : "")}>{errors.email}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="password"
              className="form-control form-control-user"
              id="exampleInputPassword"
              placeholder="Enter password"
              name="password" />
            <div className="error-box"><span className={"error " + (errors.password && touched.password ? "show" : "")}>{errors.password}</span></div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox small">
              <Field component="input" type="checkbox" className="custom-control-input" id="customCheck" />
              <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-user btn-block" disabled={isSubmitting}>Login</button>
        </form>
      )} />
  );
}

const mapStoreToProps = (store: any) => {
  return {
    err: store.auth.errors
  }
}

export default connect(mapStoreToProps)(LoginForm);