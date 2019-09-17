import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth.action';
import { SidebarContext } from '../../../contexts/sidebar.context';
import defultUserImg from '../iconfinder_8_3898372.svg';

interface HeaderProps {
  logout: Function
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
    const { is_profile_show } = this.state;

    return (
      <SidebarContext.Consumer>
        {({ showSidebar }) => (
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
            </button>

            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input type="text" className="form-control bg-light search small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>

            <ul className="navbar-nav ml-auto">
              <div className="topbar-divider d-none d-sm-block"></div>
              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggleProfile}>
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                  <img className="img-profile rounded-circle" alt="" src={defultUserImg} />
                </a>
                <div className={'dropdown-menu dropdown-menu-right shadow animated--grow-in ' + (is_profile_show ? 'show' : '')} aria-labelledby="userDropdown">
                  <Link className="dropdown-item" to="/profile"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>Profile</Link>
                  {/* <a className="dropdown-item" href="/"><i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>Activity Log</a> */}
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/" data-toggle="modal" data-target="#logoutModal" onClick={this.handleLogout}><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>Logout</a>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </SidebarContext.Consumer>
    );
  }
}

export default connect(null, { logout })(Header);