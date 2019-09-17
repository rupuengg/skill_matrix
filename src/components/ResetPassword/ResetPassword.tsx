import React from 'react';
import { Link } from 'react-router-dom';
import ResetForm from './ResetForm';

const ResetPassword = () => {
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
                  
                     <ResetForm/>
                    {/* password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character */}
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


export default ResetPassword;