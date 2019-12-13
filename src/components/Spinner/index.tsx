import React from 'react';
import { connect } from 'react-redux';
import { SpinnerProps } from '../../interfaces/spinne.interface';

class Spinner extends React.Component<SpinnerProps> {
  render() {
    const { spinner } = this.props;
    if (spinner) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return null;
  }
}

const mapStoreToProps = (store: any) => {
  return {
    spinner: store.spinner.spinner
  }
};

export default connect(mapStoreToProps, null)(Spinner);