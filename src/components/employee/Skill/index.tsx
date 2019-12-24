import React, { useEffect, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getProjectSkillsByEmployeeID,
  saveEmployeeProjectDetails
} from "../../../actions/projectSkill.action";
import { getlookUpData } from "../../../actions/lookUpMaster.action";
import { getProjects } from "../../../actions/project.action";

const EmployeeSkill = (props: any) => {
  const initialValue = [
    {
      id: 0,
      skill_name: "",
      ProjectSkillMapping: {
        ProjectSkillID: "",
        ProjectID: "",
        SkillID: "",
        LookUpProficiencyID: ""
      },
      employee_skill: {
        id: 0,
        employee_id: 0,
        skill_id: 0,
        skill_version: "",
        exp_in_month: "",
        last_used: "",
        ProficiencyID: 7,
        CreatedBy: 1,
        LastModifiedBy: null,
        createdAt: "",
        updatedAt: ""
      }
    }
  ];
  //const [projectSkillList, setprojectList] = useState([initialValue]);
  const [projectSkillList, setProjectSkillList] = useState(initialValue);
  useEffect(() => {
    //props.getEmployeeSkills();
    //props.getProjectDetailByEmployeeID();
    props.getlookUpData();
    //props.getProjectSkills(1);
    props.getProjectSkillsByEmployeeID(1);
  }, []);
  useEffect(() => {
    setProjectSkillList(props.projectSkills);
  }, [props.projectSkills]);

  // const handleDelete = (e: FormEvent<HTMLAnchorElement>, skillId: number) => {
  //   e.preventDefault();
  //   props.deleteEmployeeSkill(skillId);
  // };
  const handleChangeExperienceInMonths = (
    e: FormEvent<HTMLInputElement>,
    item: any
  ) => {
    e.preventDefault();
    if (item.employee_skill == null) {
      item.employee_skill = {
        id: item.id,
        employee_id: item.employee_id,
        skill_id: item.skill_id,
        skill_version: item.skill_version,
        exp_in_month: Number(e.currentTarget.value),
        last_used: item.last_used,
        ProficiencyID: item.ProficiencyID,
        CreatedBy: 1,
        LastModifiedBy: item.LastModifiedBy,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt
      };
    } else {
      item.employee_skill.exp_in_month = Number(e.currentTarget.value);
    }
    let projectSkillList = props.projectSkills.map((ps: any) =>
      ps.id === item.id ? { ...item } : ps
    );
    setProjectSkillList(projectSkillList);
  };
  const handleProficiencyChange = (
    e: FormEvent<HTMLSelectElement>,
    item: any
  ) => {
    e.preventDefault();
    if (item.employee_skill == null) {
      item.employee_skill = {
        id: item.id,
        employee_id: item.employee_id,
        skill_id: item.skill_id,
        skill_version: item.skill_version,
        exp_in_month: item.exp_in_month,
        last_used: item.last_used,
        ProficiencyID: Number(e.currentTarget.value),
        CreatedBy: 1,
        LastModifiedBy: item.LastModifiedBy,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt
      };
    } else {
      item.employee_skill.ProficiencyID = Number(e.currentTarget.value);
    }
    let projectSkillList = props.projectSkills.map((ps: any) =>
      ps.id === item.id ? { ...item } : ps
    );
    setProjectSkillList(projectSkillList);
  };
  const handleSubmit = (e: FormEvent<HTMLButtonElement>, item: any) => {
    e.preventDefault();

    item.map((i: any) => {
      if (i.employee_skill == null) {
        i.employee_skill = {
          id: 0,
          employee_id: 0,
          skill_id: i.id,
          skill_version: "",
          exp_in_month: "",
          last_used: "",
          ProficiencyID: 7,
          CreatedBy: 1,
          LastModifiedBy: null,
          createdAt: "",
          updatedAt: ""
        };
      }
    });
    let projectSkillList = props.projectSkills.map((ps: any) =>
      ps.employee_skill == null ? { ...item } : ps
    );
    let res = projectSkillList.filter(
      (t: any) => t.ProjectSkillMapping != null
    );
    props.saveEmployeeProjectDetails(res);
  };

  console.log("llllll", props.skills);
  let pName = props.projectName;
  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">Skills</li>
        <li className="add-new">
          <Link to="/employee/skills/create">
            <span className="fa fa-plus"></span> Add New
          </Link>
        </li>
      </ol>
      <div className="card mb-3">
        <div className="card-body">
          <div className="">
            <div
              id="dataTable_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <h4>Project: {pName}</h4>
              <h5>Must to have:</h5>
              <div>
                <form>
                  <div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="">
                          <div
                            id="dataTable_wrapper"
                            className="dataTables_wrapper dt-bootstrap4"
                          >
                            <div className="row">
                              <div className="col-sm-12">
                                <table
                                  className="table table-bordered dataTable"
                                  id="dataTable"
                                >
                                  <thead>
                                    <tr role="row">
                                      <th
                                        className="sorting_asc"
                                        aria-controls="dataTable"
                                        aria-sort="ascending"
                                        aria-label="Name: activate to sort column descending"
                                      >
                                        Skillname
                                      </th>
                                      <th
                                        aria-controls="dataTable"
                                        aria-label="Age: activate to sort column ascending"
                                      >
                                        Proficiency Required
                                      </th>
                                      <th
                                        aria-controls="dataTable"
                                        aria-label="Age: activate to sort column ascending"
                                      >
                                        Relevant Proficiency
                                      </th>
                                      <th
                                        aria-controls="dataTable"
                                        aria-label="Age: activate to sort column ascending"
                                      >
                                        Relevant Experience(in months)
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {projectSkillList.length > 0 &&
                                      projectSkillList.map(
                                        (projectSkill: any) =>
                                          projectSkill.ProjectSkillMapping !==
                                            undefined && (
                                            <tr
                                              className="odd"
                                              key={projectSkill.id}
                                            >
                                              <td className="sorting_1">
                                                {projectSkill.skill_name}
                                              </td>
                                              <td>
                                                <select
                                                  className="form-control col-sm-4"
                                                  id="selectProficiency"
                                                  disabled={true}
                                                  onChange={e =>
                                                    handleProficiencyChange(
                                                      e,
                                                      projectSkill
                                                    )
                                                  }
                                                >
                                                  <option
                                                    value=""
                                                    label="Select Proficiency"
                                                  ></option>
                                                  {props.lookUpList
                                                    .filter(
                                                      (proficiency: any) =>
                                                        proficiency.Type ===
                                                        "Proficiency"
                                                    )
                                                    .map((proficiency: any) => (
                                                      <option
                                                        key={
                                                          proficiency.LookUpID
                                                        }
                                                        value={
                                                          proficiency.LookUpID
                                                        }
                                                        selected={
                                                          projectSkill.ProjectSkillMapping !==
                                                            undefined &&
                                                          projectSkill
                                                            .ProjectSkillMapping
                                                            .LookUpProficiencyID ===
                                                            proficiency.LookUpID
                                                        }
                                                      >
                                                        {proficiency.Value}
                                                      </option>
                                                    ))}
                                                </select>
                                              </td>
                                              <td>
                                                <select
                                                  className="form-control col-sm-4"
                                                  id="selectRelevantProficiency"
                                                  onChange={e =>
                                                    handleProficiencyChange(
                                                      e,
                                                      projectSkill
                                                    )
                                                  }
                                                >
                                                  <option
                                                    value=""
                                                    label="Select Proficiency"
                                                  ></option>
                                                  {props.lookUpList
                                                    .filter(
                                                      (proficiency: any) =>
                                                        proficiency.Type ===
                                                        "Proficiency"
                                                    )
                                                    .map((proficiency: any) => (
                                                      <option
                                                        key={
                                                          proficiency.LookUpID
                                                        }
                                                        value={
                                                          proficiency.LookUpID
                                                        }
                                                        selected={
                                                          projectSkill.employee_skill !==
                                                            undefined &&
                                                          projectSkill
                                                            .employee_skill
                                                            .ProficiencyID ===
                                                            proficiency.LookUpID
                                                        }
                                                      >
                                                        {proficiency.Value}
                                                      </option>
                                                    ))}
                                                </select>
                                              </td>
                                              <td>
                                                {projectSkill.employee_skill !=
                                                  null}
                                                {
                                                  <input
                                                    type="text"
                                                    value={
                                                      projectSkill.employee_skill !=
                                                      null
                                                        ? projectSkill
                                                            .employee_skill
                                                            .exp_in_month
                                                        : 0
                                                    }
                                                    onChange={e =>
                                                      handleChangeExperienceInMonths(
                                                        e,
                                                        projectSkill
                                                      )
                                                    }
                                                  />
                                                }
                                              </td>
                                            </tr>
                                          )
                                      )}

                                    {!projectSkillList.length && (
                                      <tr>
                                        <td colSpan={5}>No records found</td>
                                      </tr>
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* GOOD TO HAVE */}
              <div>
                <h5>Good To Have:</h5>
                <form>
                  <div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="">
                          <div
                            id="dataTable_wrapper"
                            className="dataTables_wrapper dt-bootstrap4"
                          >
                            <div className="row">
                              <div className="col-sm-12">
                                <table
                                  className="table table-bordered dataTable"
                                  id="dataTable"
                                >
                                  <thead>
                                    <tr role="row">
                                      <th
                                        className="sorting_asc"
                                        aria-controls="dataTable"
                                        aria-sort="ascending"
                                        aria-label="Name: activate to sort column descending"
                                      >
                                        Skillname
                                      </th>
                                      <th
                                        aria-controls="dataTable"
                                        aria-label="Age: activate to sort column ascending"
                                      >
                                        Relevant Proficiency
                                      </th>
                                      <th
                                        aria-controls="dataTable"
                                        aria-label="Age: activate to sort column ascending"
                                      >
                                        Relevant Experience(in months)
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {projectSkillList.length > 0 &&
                                      projectSkillList.map(
                                        (projectSkill: any) =>
                                          projectSkill.ProjectSkillMapping ===
                                            undefined &&
                                          projectSkill.employee_skill !=
                                            null && (
                                            <tr
                                              className="odd"
                                              key={projectSkill.id}
                                            >
                                              <td className="sorting_1">
                                                {projectSkill.skill_name}
                                              </td>
                                              <td>
                                                <select
                                                  className="form-control col-sm-4"
                                                  id="selectRelevantProficiency"
                                                >
                                                  <option
                                                    value=""
                                                    label="Select Proficiency"
                                                  ></option>
                                                  {props.lookUpList
                                                    .filter(
                                                      (proficiency: any) =>
                                                        proficiency.Type ===
                                                        "Proficiency"
                                                    )
                                                    .map((proficiency: any) => (
                                                      <option
                                                        key={
                                                          proficiency.LookUpID
                                                        }
                                                        value={
                                                          proficiency.LookUpID
                                                        }
                                                        selected={
                                                          projectSkill.employee_skill !=
                                                            null &&
                                                          projectSkill
                                                            .employee_skill
                                                            .ProficiencyID ===
                                                            proficiency.LookUpID
                                                        }
                                                      >
                                                        {proficiency.Value}
                                                      </option>
                                                    ))}
                                                </select>
                                              </td>
                                              <td>
                                                {projectSkill.employee_skill !==
                                                  undefined}
                                                {
                                                  <input
                                                    type="text"
                                                    value={
                                                      projectSkill.employee_skill !=
                                                      null
                                                        ? projectSkill
                                                            .employee_skill
                                                            .exp_in_month
                                                        : 0
                                                    }
                                                    onChange={e =>
                                                      handleChangeExperienceInMonths(
                                                        e,
                                                        projectSkill
                                                      )
                                                    }
                                                  />
                                                }
                                              </td>
                                            </tr>
                                          )
                                      )}

                                    {!projectSkillList.length && (
                                      <tr>
                                        <td colSpan={5}>No records found</td>
                                      </tr>
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary ml-3 float-right"
                    onClick={e => handleSubmit(e, projectSkillList)}
                    // onClick={() => this.deleteUser(item.id)}
                  >
                    Save
                  </button>
                </form>
              </div>

              {/* END GOOD TO HAVE  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStoreToProps = (store: any) => {
  return {
    skills: store.employeeSkill.lists,
    removeEmpId: store.employeeSkill.delete_id,
    projectName: store.employeeSkill.projectName,
    lookUpList: store.lookUpMaster.lists,
    projectSkills: store.projectSkill.lists,
    projects: store.project.lists
  };
};

export default connect(mapStoreToProps, {
  getlookUpData,
  getProjects,
  //getProjectSkills,
  getProjectSkillsByEmployeeID,
  // getEmployeeSkills,
  // deleteEmployeeSkill,
  // getProjectDetailByEmployeeID
  saveEmployeeProjectDetails
})(EmployeeSkill);
