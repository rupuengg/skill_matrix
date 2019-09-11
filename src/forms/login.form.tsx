import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { LoginFormProps } from '../interfaces/auth-interface';
import { userLogin } from '../actions/user.action';

class LoginForm extends React.Component {
  render() {
    return (
      <form className="user" noValidate >
        <div className="form-group">
          <Field
            component="input"
            type="email"
            className="form-control form-control-user"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter Email Address..."
            name="email" />
          {/* {is_submit && !email && <span className="error">Error</span>} */}
        </div>
        <div className="form-group">
          <Field
            component="input"
            type="password"
            className="form-control form-control-user"
            id="exampleInputPassword"
            placeholder="Password"
            name="password" />
          {/* {is_submit && !password && <span className="error">Error</span>} */}
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox small">
            <Field component="input" type="checkbox" className="custom-control-input" id="customCheck" />
            <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
      </form>
    );
  }
}

// export default reduxForm({
//   form: 'login'
// })(LoginForm);