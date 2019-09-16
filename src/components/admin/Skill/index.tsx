import React, { useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSkills, deleteSkill } from '../../../actions/skill.action';

const Employee = (props: any) => {
  useEffect(() => {
    props.getSkills();
    // eslint-disable-next-line
  }, [props.removeEmpId]);

  const handleDelete = (e: FormEvent<HTMLAnchorElement>, skillId: number) => {
    e.preventDefault();
    props.deleteSkill(skillId);
  };

  return (
    <div>
      <ol className="breadcrumb">
        {/* <li className="breadcrumb-item">
          <a href="/">Employees</a>
        </li> */}
        <li className="breadcrumb-item active">Skills</li>
        <li className="add-new"><Link to="/skills/create"><span className="fa fa-plus"></span> Add New</Link></li>
      </ol>
      <div className="card mb-3">
        {/* <div className="card-header"><i className="fas fa-table"></i>Data Table Example</div> */}
        <div className="card-body">
          <div className="">
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
                          aria-label="Name: activate to sort column descending">Skillname</th>
                        <th
                          aria-controls="dataTable"
                          aria-label="Age: activate to sort column ascending">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.skills.map((skill: any) => (
                        <tr className="odd" key={skill.id}>
                          <td className="sorting_1">{skill.skill_name}</td>
                          <td>
                            <Link to={"/skills/update/" + skill.id}>
                              <i className="fa fa-edit"></i>
                            </Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link to="/" onClick={(e) => handleDelete(e, skill.id)}>
                              <i className="fa fa-trash"></i>
                            </Link>
                          </td>
                        </tr>
                      ))}

                      {!props.skills.length && <tr>
                        <td colSpan={5}>
                          No records found
                        </td>
                      </tr>}
                    </tbody>
                  </table>
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
    skills: store.skill.lists,
    removeEmpId: store.skill.delete_id
  }
}

export default connect(mapStoreToProps, { getSkills, deleteSkill })(Employee);