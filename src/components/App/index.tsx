import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../helpers/store';

import Login from '../Login';
import Home from '../Home';
import { PrivateRoute } from '../Common/PrivateRoute';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
