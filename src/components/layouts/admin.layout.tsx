import React from 'react';
import Sidebar from './admin/sidebar';
import Header from './admin/header';
import Flash from '../Flash';

class AdminLayout extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Header />
            <div className="container-fluid">
              <Flash />
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLayout;