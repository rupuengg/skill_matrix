import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EmployeeForm from "../../../forms/employe.create.form";
import { getEmployee, updateEmployee } from "../../../actions/employee.action";

interface EmployeeUpdateProps {
  updateEmployee: Function;
  match: object;
}
const EmployeeUpdate = (props: any) => {
  useEffect(() => {
    const empId = props.match.params.id;
    props.getEmployee(empId);
  });

  if (!props.employee) return null;

  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/employee">Employees</Link>
        </li>
        <li className="breadcrumb-item active">Edit</li>
      </ol>
      <div className="card mb-3">
        <div className="card-body">
          <div className="">
            <div
              id="dataTable_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <div className="row">
                <div className="col-sm-12">
                  <div className="col-lg-6">
                    <div className="p-1">
                      <EmployeeForm
                        handleSubmit={props.updateEmployee}
                        data={props.employee}
                      />
                    </div>
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
    employee: store.employee.editEmp
  };
};

export default connect(mapStoreToProps, { getEmployee, updateEmployee })(
  EmployeeUpdate
);
