import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import ProfileForm from "../../forms/profil.form";
import { userGet, profileUpdate } from "../../actions/user.action";

const Profile = (props: any) => {
  useEffect(() => {
    props.userGet();
    // eslint-disable-next-line
  }, []);

  if (Object.keys(props.user).length === 0) return null;

  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">Profile</li>
        {/* <li className="add-new"><Link to="/employee/create">Edit</Link></li> */}
      </ol>
      <div className="card mb-3">
        <div className="card-body">
          <div className="">
            <div
              id="dataTable_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="p-1">
                    <ProfileForm
                      handleSubmit={props.profileUpdate}
                      user={props.user}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStoreToProps = (store: any) => {
  return {
    user: store.auth.user
  };
};

export default connect(mapStoreToProps, { userGet, profileUpdate })(Profile);
