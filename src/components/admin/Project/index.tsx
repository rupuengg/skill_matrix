import React, { useEffect, useState, FormEvent } from "react";
import { connect } from "react-redux";
import { getProjects } from "../../../actions/project.action";
import { getlookUpData } from "../../../actions/lookUpMaster.action";
import {
  getProjectSkills,
  upsertProjectSkills
} from "../../../actions/projectSkill.action";

interface IProjectSkill {
  ProjectSkillID: number;
  ProjectID: number;
  SkillID: number;
  LookUpProficiencyID: number;
}

const Project = (props: any) => {
  const initialValue = [
    {
      id: 0,
      skill_name: "",
      IsChecked: false,
      ProjectSkillMapping: {
        ProjectSkillID: 0,
        ProjectID: 0,
        SkillID: 0,
        LookUpProficiencyID: 0
      }
    }
  ];
  const [projectSkillList, setprojectList] = useState(initialValue);
  // const [saveStatus, setSaveStatus] = useState(true);
  const [projectId, setprojectId] = useState(0);
  useEffect(() => {
    props.getlookUpData();
    if (props.projectSkills !== undefined && props.projectSkills.length > 0) {
      setprojectList(props.projectSkills);
    }

    // if (props.projectSkills.length) {
    //   const projectSkill = props.projectSkills
    //     .filter((ps: any) => ps.IsChecked)
    //     .map((ps: any) => ps.ProjectSkillMapping);
    //   setsaveList(projectSkill);
    // }

    //   const projectSkill = props.projectSkills
    //     .filter((ps: any) => ps.ProjectSkillMapping != undefined)
    //     .map((ps: any) => ps.ProjectSkillMapping);

    //   setprojectList(projectSkill);
    // }

    // if (projectSkill.length > 0) {
    //   alert(projectSkill[0].ProjectSkillID);
    // }

    // if (
    //   projectSkillList != undefined &&
    //   projectSkillList.length > 0 &&
    //   projectSkillList[0].ProjectSkillMapping.LookUpProficiencyID > "0"
    // )
    //   alert(
    //     "Project Details" +
    //       projectSkillList[0].ProjectSkillMapping.LookUpProficiencyID
    //   );
  }, [props.projectSkills]);

  // if (props.projectSkills.length > 0) {
  //   const projectSkill1 = props.projectSkills.map((ps: any) => {
  //     if (ps.ProjectSkillMapping != undefined) {
  //       ps.IsChecked = true;
  //     } else {
  //       ps.IsChecked = false;
  //     }
  //     return ps;
  //   });
  // }
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
    setprojectId(projectId);
  };

  const handleSkillCheckedChange = (
    e: FormEvent<HTMLInputElement>,
    item: any
  ) => {
    item.IsChecked = !item.IsChecked;
    let projectSkillList = props.projectSkills.map((ps: any) =>
      ps.id === item.id ? { ...item } : ps
    );
    setprojectList(projectSkillList);
  };

  // const checkSaveStatus =()=> {
  //   if (projectSkillList.length) {
  //     const projectSkill = projectSkillList
  //       .filter((ps: any) => ps.IsChecked)
  //       .map((ps: any) =>
  //     props.upsertProjectSkills(projectSkill);
  //   }
  // };

  const handleProficiencyChange = (
    e: FormEvent<HTMLSelectElement>,
    item: any
  ) => {
    if (item.ProjectSkillMapping === null) {
      item.ProjectSkillMapping = {
        ProjectSkillID: 0,
        ProjectID: projectId,
        SkillID: item.id,
        LookUpProficiencyID: Number(e.currentTarget.value)
      };
    } else {
      item.ProjectSkillMapping.LookUpProficiencyID = Number(
        e.currentTarget.value
      );
    }
    let projectSkillList = props.projectSkills.map((ps: any) =>
      ps.id === item.id ? { ...item } : ps
    );
    setprojectList(projectSkillList);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    if (projectSkillList.length) {
      const projectSkill = projectSkillList
        .filter((ps: any) => ps.IsChecked)
        .map((ps: any) => ps.ProjectSkillMapping);
      props.upsertProjectSkills(projectSkill);
    }
  };

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
                          {props.projectSkills.length > 0 &&
                            projectSkillList.map((projectSkill: any) => (
                              <tr className="odd" key={projectSkill.id}>
                                <td className="sorting_1">
                                  <input
                                    className="m-3"
                                    type="checkbox"
                                    id="tableDefaultCheck1"
                                    checked={projectSkill.IsChecked}
                                    value={
                                      projectSkill.ProjectSkillMapping !==
                                        undefined &&
                                      projectSkill.ProjectSkillMapping
                                        .ProjectSkillID > 0
                                        ? projectSkill.ProjectSkillMapping
                                            .ProjectSkillID
                                        : 0
                                    }
                                    onChange={e =>
                                      handleSkillCheckedChange(e, projectSkill)
                                    }
                                  />
                                  {projectSkill.skill_name}
                                </td>
                                <td>
                                  <select
                                    className="form-control col-sm-4"
                                    id="selectProficiency"
                                    onChange={e =>
                                      handleProficiencyChange(e, projectSkill)
                                    }
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
                                            projectSkill.ProjectSkillMapping !==
                                              undefined &&
                                            projectSkill.ProjectSkillMapping
                                              .LookUpProficiencyID ===
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

                          {!props.projectSkills.length && (
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
          type="button"
          className="btn btn-primary ml-3 float-right"
          //disabled={!props.projectSkills.length || !saveStatus}
          onClick={e => handleSubmit(e)}
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
  getProjectSkills,
  upsertProjectSkills
})(Project);
