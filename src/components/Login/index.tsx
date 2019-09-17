import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import LoginForm from '../../forms/login.form';
import { authentication } from '../../actions/auth.action';
import { Link } from 'react-router-dom';

const Login = (props: any) => {
  return (
    <div className="bg-gradient-primary" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>

                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <LoginForm handleSubmit={props.authentication} />
                      <hr />
                      <div className="text-center">
                        <Link to="/ForgetPassword">Forget Password</Link>
                      </div>
                      {/* <div className="text-center">
                        <Link to="/register">Create An Account</Link>
                      </div> */}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default connect(null, { authentication })(Login);