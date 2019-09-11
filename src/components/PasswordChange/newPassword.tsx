
import React from 'react';
import { Link } from 'react-router-dom';
const PasswordChange = () => {

  const handlePassword = () => {
    if (window.confirm("Press a Button")) {
      alert("Check your mail for reset your password ")
    } else {
      alert("Enter valid Email")
    }

  }

  return (

    <div className="bg-gradient-primary">
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
                        <h1 className="h4 text-gray-900 mb-4">Change Your Password</h1>
                        <p>Please provide the Email ID that you have used when you signed up</p>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                        </div>
            

                        
                        <a href="index.html" className="btn btn-primary btn-user btn-block" onClick={handlePassword}>Change Password</a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link to="/Login">Back to Login</Link>
                      </div>
                      <div className="text-center">
                        <Link to="/Registration">Create An Account</Link>
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


export default PasswordChange;