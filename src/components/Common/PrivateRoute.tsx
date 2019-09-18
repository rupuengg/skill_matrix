import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import AdminLayout from '../layouts/admin.layout';
import EmployeeLayout from '../layouts/employee.layout';

let PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props: any) => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString ? userString : "");
      console.log('localStorage.getItem(\'user\')', user);
      if (Object.keys(user).length === 0) {
        return <Redirect to={{ pathname: '/login' }} />
      } else {
        switch (user.user_type) {
          case 'admin':
            return <AdminLayout><Component {...props} /></AdminLayout>;
          default:
            return <EmployeeLayout><Component {...props} /></EmployeeLayout>;
        }
      }
    } else return <Redirect to={{ pathname: '/login' }} />
  }} />
);

const mapStoreToProps = (store: any) => {
  return {
    user: store.auth.user
  };
};

export default connect(mapStoreToProps, {})(PrivateRoute);