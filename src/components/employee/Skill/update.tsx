import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EmployeSkillForm from '../../../forms/employe.skill.form';
import { getEmployeeSkill, updateEmployeeSkill } from '../../../actions/employee-skill.action';

interface EmployeeUpdateProps {
  updateEmployee: Function,
  match: object
}

const EmployeeSkillUpdate = (props: any) => {
  console.log('props.employee.skills', props.skill);
  useEffect(() => {
    const empId = props.match.params.id;
    props.getEmployeeSkill(empId);
    // eslint-disable-next-line
  }, []);

  if (!props.skill) return null;

  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/employee/skills">Skills</Link>
        </li>
        <li className="breadcrumb-item active">Edit</li>
      </ol>
      <div className="card mb-3">
        <div className="card-body">
          <div className="">
            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
              <div className="row">
                <div className="col-sm-12">

                  <div className="col-lg-6">
                    <div className="p-1">
                      <EmployeSkillForm handleSubmit={props.updateEmployeeSkill} data={props.skill} />
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
    skill: store.employeeSkill.editEmp
  };
};

export default connect(mapStoreToProps, { getEmployeeSkill, updateEmployeeSkill })(EmployeeSkillUpdate);