
import React from 'react';
import { Link } from 'react-router-dom';

const Registration: React.FC = (props: any) => {
  const handlePassword = () => {
    if (window.confirm("Press a Button")) {
      alert("Your Registered Successfully!")
    } else {
      alert("Retry Again!")
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
                        <h1 className="h4 text-gray-900 mb-4">Create New Account</h1>
                      </div>
                      <form className="user">
                      <div className="form-group">
                          <input type="text" className="form-control form-control-user" id="exampleInputEmail"  placeholder="Enter Full_Name..." />
                        </div>
  
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Enter Password" />
                        </div>
                    
                
                        <a href="index.html" className="btn btn-primary btn-user btn-block" onClick={handlePassword}>Registered</a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link to="/Login">Login</Link>
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

export default Registration;