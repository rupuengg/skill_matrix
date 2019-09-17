import React from 'react';
import Sidebar from './employee/sidebar';
import Header from './employee/header';
import Flash from '../Flash';

const EmployeeLayout = (props: any) => {
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

export default EmployeeLayout;