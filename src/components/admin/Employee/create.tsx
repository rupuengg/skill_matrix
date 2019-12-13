import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EmployeeForm from '../../../forms/employe.create.form';
import { createEmployee } from '../../../actions/employee.action';

interface EmployeCreateProps {
  createEmployee: Function
}
const EmployeCreate = (props: EmployeCreateProps) => {
  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/employee">Employees</Link>
        </li>
        <li className="breadcrumb-item active">Create</li>
      </ol>
      <div className="card mb-3">
       <div className="card-body">
          <div className="">
            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
              <div className="row">
                <div className="col-sm-12">
                  <div className="col-lg-6">
                    <div className="p-1">
                      <EmployeeForm handleSubmit={props.createEmployee} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default connect(null, { createEmployee })(EmployeCreate);