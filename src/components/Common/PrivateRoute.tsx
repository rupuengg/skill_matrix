import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminLayout from '../layouts/admin.layout';

export const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props: any) => (
    localStorage.getItem('token')
      ? <AdminLayout><Component {...props} /></AdminLayout>
      : <Redirect to={{ pathname: '/login' }} />
  )} />
);