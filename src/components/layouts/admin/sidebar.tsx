import React from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../../contexts/sidebar.context";

class Sidebar extends React.Component {
  render() {
    return (
      <SidebarContext.Consumer>
        {({ showSidebar }) => (
          <ul
            className={
              "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " +
              (showSidebar ? "toggled" : "")
            }
            id="accordionSidebar"
          >
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="/"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">Skill Matrix</div>
            </a>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
              <Link className="nav-link" to="/Dashboard">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">Interface</div>
            <li className="nav-item">
              <Link className="nav-link" to="/employee">
                <i className="fas fa-fw fa-cog"></i>
                <span>Employees</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Skills</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Project</span>
              </Link>
            </li>
          </ul>
        )}
      </SidebarContext.Consumer>
    );
  }
}

export default Sidebar;
