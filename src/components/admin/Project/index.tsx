import React, { useEffect, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProjects } from "../../../actions/project.action";
import { getlookUpData } from "../../../actions/lookUpMaster.action";
// import { getSkills, deleteSkill } from "../../../actions/skill.action";
import { getProjectSkills } from "../../../actions/projectSkill.action";

interface IProjectSkill {
  id: number;
  skill_name: string;
  ProjectSkillMapping: {
    ProjectSkillID: number;
    ProjectID: number;
    SkillID: number;
    LookUpProficiencyID: number;
  };
}

const Project = (props: any) => {
  const initialValue = [
    {
      id: 0,
      skill_name: "",
      ProjectSkillMapping: {
        ProjectSkillID: "",
        ProjectID: "",
        SkillID: "",
        LookUpProficiencyID: ""
      }
    }
  ];
  const [projectSkillList, setprojectList] = useState(initialValue);
  useEffect(() => {
    props.getlookUpData();
    setprojectList(props.projectSkills);
  });
  const handleClientChange = (
    e: FormEvent<HTMLSelectElement>,
    clientId: number
  ) => {
    e.preventDefault();
    props.getProjects(clientId);
  };

  const handleProjectChange = (
    e: FormEvent<HTMLSelectElement>,
    projectId: number
  ) => {
    e.preventDefault();
    props.getProjectSkills(projectId);
  };

  const handleCheckedChange = (e: FormEvent<HTMLInputElement>) => {};

  return (
    <div>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="selectClient">Select Client</label>
            <select
              className="form-control"
              id="selectClient"
              onChange={e => handleClientChange(e, Number(e.target.value))}
            >
              <option value="0" label="Select Client"></option>
              {props.lookUpList
                .filter((client: any) => client.Type === "Client")
                .map((client: any) => (
                  <option key={client.LookUpID} value={client.LookUpID}>
                    {client.Value}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="selectProject">Select Project</label>
            <select
              className="form-control"
              id="selectProject"
              onChange={e => handleProjectChange(e, Number(e.target.value))}
            >
              <option value="" label="Select Project"></option>
              {props.projects.map((projects: any) => (
                <option key={projects.ProjectID} value={projects.ProjectID}>
                  {projects.ProjectName}
                </option>
              ))}
            </select>
          </div>
        </div>
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
                              &nbsp;
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {projectSkillList.map((projectSkill: any) => (
                            <tr className="odd" key={projectSkill.id}>
                              <td className="sorting_1">
                                <input
                                  className="m-3"
                                  type="checkbox"
                                  id="tableDefaultCheck1"
                                  checked={
                                    projectSkill.ProjectSkillMapping !=
                                      undefined &&
                                    projectSkill.ProjectSkillMapping
                                      .ProjectSkillID > 0
                                  }
                                />
                                {projectSkill.skill_name}
                              </td>
                              <td>
                                <select
                                  className="form-control col-sm-4"
                                  id="selectProficiency"
                                >
                                  <option
                                    value=""
                                    label="Select Proficiency"
                                  ></option>
                                  {props.lookUpList
                                    .filter(
                                      (proficiency: any) =>
                                        proficiency.Type === "Proficiency"
                                    )
                                    .map((proficiency: any) => (
                                      <option
                                        key={proficiency.LookUpID}
                                        value={proficiency.LookUpID}
                                        selected={
                                          projectSkill.ProjectSkillMapping !=
                                            undefined &&
                                          projectSkill.ProjectSkillMapping
                                            .LookUpProficiencyID ==
                                            proficiency.LookUpID
                                        }
                                      >
                                        {proficiency.Value}
                                      </option>
                                    ))}
                                </select>
                              </td>
                            </tr>
                          ))}

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
          // onClick={() => this.deleteUser(item.id)}
        >
          Save
        </button>
      </form>
    </div>
  );
};

const mapStoreToProps = (store: any) => {
  return {
    lookUpList: store.lookUpMaster.lists,
    projects: store.project.lists,
    projectSkills: store.projectSkill.lists
  };
};

export default connect(mapStoreToProps, {
  getlookUpData,
  getProjects,
  getProjectSkills
})(Project);
