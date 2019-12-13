import React, { FormEvent } from "react";
import { connect } from "react-redux";
import { logout } from "../../../actions/auth.action";
import { SidebarContext } from "../../../contexts/sidebar.context";
import { Nav } from "react-bootstrap";
import "./header.css";
//  import ViewEmployee from '../../admin/Dashboard/ViewEmployee';

interface HeaderProps {
  logout: Function;
  render: Function;
}
interface HeaderStates {
  is_profile_show: boolean;
}

class Header extends React.Component<HeaderProps, HeaderStates> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      is_profile_show: false
    };
  }

  toggleProfile = (e: FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.setState({
      is_profile_show: !this.state.is_profile_show
    });
  };

  handleLogout = (e: FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div>
        <SidebarContext.Consumer>
          {({ showSidebar }) => (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light search small"
                    id="serach"
                    placeholder="Search for..."
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="Search"
                    >
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>

              {this.props.render({
                ...this.state,
                toggleProfile: this.toggleProfile,
                handleLogout: this.handleLogout
              })}
            </nav>
          )}
        </SidebarContext.Consumer>
        <Nav fill variant="tabs">
          <Nav.Item>
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Employee">Employee List</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default connect(null, { logout })(Header);
