import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth.action';
import { SidebarContext } from '../../../contexts/sidebar.context';

interface HeaderProps {
  logout: Function,
  render: Function
}
interface HeaderStates {
  is_profile_show: boolean
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
  }

  handleLogout = (e: FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <SidebarContext.Consumer>
        {({ showSidebar }) => (
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
            </button>

            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              {/* <div className="input-group">
                <input type="text" className="form-control bg-light search small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div> */}
            </form>

            {this.props.render({
              ...this.state,
              toggleProfile: this.toggleProfile,
              handleLogout: this.handleLogout
            })}
          </nav>
        )}
      </SidebarContext.Consumer>
    );
  }
}

export default connect(null, { logout })(Header);