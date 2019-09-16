import React from 'react';
import { Link } from 'react-router-dom';
import ForgetForm from './ForgetForm';

const ForgetPassword = () => {
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
                     <ForgetForm/>
                      <hr />
                      <div className="text-center">
                        <Link to="/Login">Back to Login</Link>
                      </div>
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


export default ForgetPassword;