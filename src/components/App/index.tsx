import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../helpers/store';

import Login from '../Login';
import Home from '../Home';
import PasswordChange from '../PasswordChange/newPassword';
import { PrivateRoute } from '../Common/PrivateRoute';
import Registration from '../Registration/registration';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
      
          <Route exact path="/Registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/PasswordChange" component={PasswordChange} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
