import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../../helpers/common';
// import defultUserImg from '../iconfinder_8_3898372.svg';

const CommonHeader = (props: any) => {
  const [user, setUser] = useState({ first_name: "", profile_pic: "" });

  useEffect(() => {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString ? userString : "") : {};
    // if (props.user)
    //   setUser(props.user);
    // else
    setUser(user);
  }, [user]);

  const profilePic: string = baseUrl(user.profile_pic);

  return (
    <div>
      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>
        <li className="nav-item dropdown no-arrow">
          <Link className="nav-link dropdown-toggle" to="/" onClick={props.toggleProfile}>
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user.first_name}</span>
            <img className="img-profile rounded-circle" alt="" src={profilePic} />
          </Link>
          <div className={'dropdown-menu dropdown-menu-right shadow animated--grow-in ' + (props.is_profile_show ? 'show' : '')}>
            <Link className="dropdown-item" to="/profile"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>Profile</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/" onClick={props.handleLogout}><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>Logout</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

const mapStoreToProps = (store: any) => {
  return {
    user: store.auth.user
  };
};

export default connect(mapStoreToProps, null)(CommonHeader);