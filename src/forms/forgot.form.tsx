import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { authValidator } from '../validations/auth.validator';
import { userLogin } from '../actions/user.action';

interface LoginFormProps {
  userLogin: Function,
  err?: {
    message: string
  }
}

const LoginForm = (props: LoginFormProps) => {
  const { userLogin, err } = props;
  return (
    <Formik
      initialValues={{ email: "admin@yopmail.com", password: "testing" }}
      onSubmit={(values, actions) => {
        userLogin(values.email, values.password)
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
            {errors.email && touched.email ? (<span className="error">{errors.email}</span>) : null}
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="password"
              className="form-control form-control-user"
              id="exampleInputPassword"
              placeholder="Enter password"
              name="password" />
            {errors.password && touched.password ? (<span className="error">{errors.password}</span>) : null}
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

export default connect(mapStoreToProps, { userLogin })(LoginForm);