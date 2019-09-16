import React from 'react';
import { connect } from 'react-redux';

const Flash = (props: any) => {
  if (props.message === "") return null;

  return (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading"><i className="fa fa-check"></i> {props.message}</h4>
      {/* <hr /> */}
      {/* <p className="mb-0">Whnever you need to, be sure to use margin utilities to keep things nice and tidy.</p> */}
    </div>
  );
};

const mapStoreToProps = (store: any) => {
  return {
    message: store.flash.message
  };
};

export default connect(mapStoreToProps, {})(Flash);