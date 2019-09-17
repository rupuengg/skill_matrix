import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../helpers/store';

import Login from '../Login';
import Home from '../Home';
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

import EmployeeSkill from '../employee/Skill';
import EmployeeSkillCreate from '../employee/Skill/create';
import EmployeeSkillUpdate from '../employee/Skill/update';

const App: React.FC = (props: any) => {
  return (
    <SidebarProvider>
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/ForgetPassword" component={ForgetPassword} />

            {/* Profile */}
            <PrivateRoute exact path="/profile" component={Profile} />

            {/* Dashboard */}
            <PrivateRoute exact path="/dashboard" component={Dashboard} />

            {/* Employee */}
            <PrivateRoute exact path="/employee" component={Employee} />
            <PrivateRoute exact path="/employee/create" component={EmployeCreate} />
            <PrivateRoute exact path="/employee/update/:id" component={EmployeeUpdate} />

            {/* Skills */}
            <PrivateRoute exact path="/skills" component={Skill} />
            <PrivateRoute exact path="/skills/create" component={SkillCreate} />
            <PrivateRoute exact path="/skills/update/:id" component={SkillUpdate} />

            {/* Employee Skills */}
            <PrivateRoute exact path="/employee/skills" component={EmployeeSkill} />
            <PrivateRoute exact path="/employee/skills/create" component={EmployeeSkillCreate} />
            <PrivateRoute exact path="/employee/skills/update/:id" component={EmployeeSkillUpdate} />
            <Spinner />
          </div>
        </Router>
      </Provider>
    </SidebarProvider>
  );
}

export default App;
