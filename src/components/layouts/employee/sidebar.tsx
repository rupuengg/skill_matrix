import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../../contexts/sidebar.context';

class Sidebar extends React.Component {
  render() {
    return (
      <SidebarContext.Consumer>
        {({ showSidebar }) => (
          <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " + (showSidebar ? "toggled" : "")} id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">Skill Matrix</div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
              <Link className="nav-link" to="/Logindashboard">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">
              Interface
            </div>
            <li className="nav-item">
              <Link className="nav-link" to="/employee/skills">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Skills</span>
              </Link>
            </li>
          </ul>
        )}
      </SidebarContext.Consumer>
    );
  }
}

export default Sidebar;