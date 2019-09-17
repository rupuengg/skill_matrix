import React from 'react';
import Sidebar from './admin/sidebar';
import Header from './admin/header';
import Flash from '../Flash';

const AdminLayout = (props: any) => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <Header />
          <div className="container-fluid">
            <Flash />
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;