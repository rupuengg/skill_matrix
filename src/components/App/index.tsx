import React from 'react';
import {
  Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../helpers/store';

import Login from '../Login';
import Home from '../Home';
import PasswordChange from '../PasswordChange/newPassword';
import { PrivateRoute } from '../Common/PrivateRoute';
import Registration from '../Registration/registration';
import Spinner from '../Spinner';
import { history } from '../../helpers/history';
// Admin
import Employee from '../admin/Employee';
import Dashboard from '../admin/Dashboard';
import Skills from '../admin/Skills';


const App: React.FC = (props: any) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Route exact path="/Registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/PasswordChange" component={PasswordChange} />
          <PrivateRoute exact path="/" component={Home} />

          <PrivateRoute exact path="/employee" component={Employee} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/skills" component={Skills} />
          <Spinner />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
