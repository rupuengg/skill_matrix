import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../../../actions/employee.action';

const Employee = (props: any) => {
  useEffect(() => {
    props.getEmployees();
  }, []);

  return (
    <div>
      <ol className="breadcrumb">
        {/* <li className="breadcrumb-item">
          <a href="/">Employees</a>
        </li> */}
        <li className="breadcrumb-item active">Employees</li>
      </ol>
      <div className="card mb-3">
        {/* <div className="card-header"><i className="fas fa-table"></i>Data Table Example</div> */}
        <div className="card-body">
          <div className="table-responsive">
            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
              {/* <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="dataTables_length" id="dataTable_length">
                    <label>Show <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label>
                  </div>
                </div>
              </div> */}
              <div className="row">
                <div className="col-sm-12">
                  <table className="table table-bordered dataTable" id="dataTable">
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting_asc"
                          aria-controls="dataTable"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending">Firstname</th>
                        <th
                          className="sorting"
                          aria-controls="dataTable"
                          aria-label="Position: activate to sort column ascending">Lastname</th>
                        <th
                          className="sorting"
                          aria-controls="dataTable"
                          aria-label="Office: activate to sort column ascending">Email</th>
                        <th
                          className="sorting"
                          aria-controls="dataTable"
                          aria-label="Age: activate to sort column ascending">Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.employees.map((emp: any) => (
                        <tr className="odd">
                          <td className="sorting_1">{emp.first_name}</td>
                          <td>{emp.last_name}</td>
                          <td>{emp.email}</td>
                          <td>{emp.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
    employees: store.employee.lists
  }
}

export default connect(mapStoreToProps, { getEmployees })(Employee);