import React from 'react';
import {
  Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../helpers/store';

import Login from '../Login';
import Home from '../Home';
import { PrivateRoute } from '../Common/PrivateRoute';
import Registration from '../Registration/registration';
import Spinner from '../Spinner';
import { history } from '../../helpers/history';
// Admin
import Employee from '../admin/Employee';
import Dashboard from '../admin/Dashboard';
import Skills from '../admin/Skills';
import ForgetPassword from '../ForgetPassword/ForgetPassword';

const App: React.FC = (props: any) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Route exact path="/register" component={Registration} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/ForgetPassword" component={ForgetPassword} />
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
