import React, { useEffect } from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { USER_LOGIN } from '../../actiontypes/user';

import Login from '../Login';
// import Home from '../Home';
import PrivateRoute from '../Common/PrivateRoute';
import Spinner from '../Spinner';
import { history } from '../../helpers/history';
// Admin
import Profile from '../Profile';
import Employee from '../admin/Employee';
import EmployeCreate from '../admin/Employee/create';
import EmployeeUpdate from '../admin/Employee/update';
import Dashboard from '../admin/Dashboard';
import Skill from '../admin/Skill';
import SkillCreate from '../admin/Skill/create';
import SkillUpdate from '../admin/Skill/update';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import SidebarProvider from '../../providers/sidebar.provider';
import LoginDashboard from '../Login/LoginDashboard';
import EmployeeSkill from '../employee/Skill';
import EmployeeSkillCreate from '../employee/Skill/create';
import EmployeeSkillUpdate from '../employee/Skill/update';
import Home from '../Home';
import { Redirect } from 'react-router-dom';

const App: React.FC = (props: any) => {
  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString ? userString : "")
      props.userSet(user);
    }

  });
  return (
    <SidebarProvider>
      <Router history={history}>
        <div className="App">
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          {/* <PrivateRoute exact path="/" component={LoginDashboard} /> */}
                {/* LoginDashboard */}
          <PrivateRoute exact path="/Logindashboard" component={LoginDashboard} />
          <Route exact path="/ForgetPassword" component={ForgetPassword} />

          <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        

          {/* Profile */}
          <PrivateRoute exact path="/profile" component={Profile} />

          {/* Admin Pages */}
          <PrivateRoute exact path="/employee" component={Employee} />
          <PrivateRoute exact path="/employee/create" component={EmployeCreate} />
          <PrivateRoute exact path="/employee/update/:id" component={EmployeeUpdate} />
          <PrivateRoute exact path="/skills" component={Skill} />
          <PrivateRoute exact path="/skills/create" component={SkillCreate} />
          <PrivateRoute exact path="/skills/update/:id" component={SkillUpdate} />
          {/* Admin Pages End */}

          {/* Employee Pages */}
          <PrivateRoute exact path="/employee/skills" component={EmployeeSkill} />
          <PrivateRoute exact path="/employee/skills/create" component={EmployeeSkillCreate} />
          <PrivateRoute exact path="/employee/skills/update/:id" component={EmployeeSkillUpdate} />
          {/* Employee Pages End */}
          <Spinner />
        </div>
      </Router>
    </SidebarProvider>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    userSet: (user: any) => dispatch({ type: USER_LOGIN, payload: user })
  };
};

export default connect(null, mapDispatchToProps)(App);
