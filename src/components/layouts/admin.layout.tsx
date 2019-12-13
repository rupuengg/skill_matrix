import React from 'react';
import Sidebar from './admin/sidebar';
import Header from './admin/header';
import Flash from '../Flash';
import CommonHeader from './common/header';

const AdminLayout = (props: any) => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <Header render={(p: any) => <CommonHeader {...p} />} />
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