import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EmployeSkillForm from '../../../forms/employe.skill.form';
import { createEmployeeSkill } from '../../../actions/employee-skill.action';

interface EmployeCreateProps {
  createEmployeeSkill: Function,
  employeId: string
}

const EmployeeSkillCreate = (props: EmployeCreateProps) => {
  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/employee/skills">Skills</Link>
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
                      <EmployeSkillForm handleSubmit={props.createEmployeeSkill} data={null} empId={props.employeId} />
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

const mapStoreToProps = (store: any) => {
  return {
    employeId: store.auth.user.employeeId
  };
};

export default connect(mapStoreToProps, { createEmployeeSkill })(EmployeeSkillCreate);