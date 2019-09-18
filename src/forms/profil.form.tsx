import React from 'react';
import { Formik, Field } from 'formik';
import { profileValidator } from '../validations/profile.validator';
import Thumb from '../components/Thumb';

interface ProfileProps {
  user: {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    phone: string
  } | null,
  handleSubmit: Function
}

const ProfileForm = (props: any) => {
  const profileId = props.user ? props.user.id : null;

  return (
    <Formik
      initialValues={{ ...props.user, file: null }}
      onSubmit={(values, actions) => {
        props.handleSubmit(values, profileId);
        actions.setSubmitting(false);
      }}
      validationSchema={profileValidator.profileCreate}
      render={({ values, errors, touched, isSubmitting, handleSubmit, setFieldValue }) => (
        <form encType="multipart/form-data" className="user" autoComplete="false" onSubmit={handleSubmit} noValidate>
          {/* {err && <span className="main-error">{err.message}</span>} */}
          <div className="form-group">
            <label htmlFor="file">Profile pic</label>
            <br />
            <input id="file" name="file" type="file" onChange={(event: any) => {
              setFieldValue("file", event.currentTarget.files[0]);
            }} />
            <br />
            <Thumb file={values.file} />
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              placeholder="Enter firstname..."
              autoComplete="off"
              name="first_name" />
            <div className="error-box"><span className={"error " + (errors.first_name && touched.first_name ? "show" : "")}>{errors.first_name}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              placeholder="Enter lastname..."
              autoComplete="off"
              name="last_name" />
            <div className="error-box"><span className={"error " + (errors.last_name && touched.last_name ? "show" : "")}>{errors.last_name}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              placeholder="Enter email..."
              autoComplete="off"
              name="email" />
            <div className="error-box"><span className={"error " + (errors.email && touched.email ? "show" : "")}>{errors.email}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control form-control-user"
              placeholder="Enter phone..."
              autoComplete="off"
              name="phone" />
            <div className="error-box"><span className={"error " + (errors.phone && touched.phone ? "show" : "")}>{errors.phone}</span></div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-user btn-block"
            disabled={isSubmitting}>Save</button>
        </form>
      )} />
  );
}

export default ProfileForm;