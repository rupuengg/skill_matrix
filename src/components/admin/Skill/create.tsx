import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SkillForm from '../../../forms/skill.create.form';
import { createSkill } from '../../../actions/skill.action';

interface EmployeCreateProps {
  createSkill: Function
}

const SkillCreate = (props: EmployeCreateProps) => {
  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="breadcrumb-item active">Create</li>
      </ol>
      <div className="card mb-3">
        {/* <div className="card-header"><i className="fas fa-table"></i>Data Table Example</div> */}
        <div className="card-body">
          <div className="">
            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
              <div className="row">
                <div className="col-sm-12">

                  <div className="col-lg-6">
                    <div className="p-1">
                      <SkillForm handleSubmit={props.createSkill} data={null} />
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

export default connect(null, { createSkill })(SkillCreate);