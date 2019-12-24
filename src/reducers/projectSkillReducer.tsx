import {
  PROJECT_SKILL_LIST,
  PROJECT_SKILL_NO_DATA,
  PROJECT_SKILL_UPSERT
} from "../actiontypes/projectSkill";

const initialState = {
  lists: [],
  noData: {},
  message: "",
  delete_id: ""
};

export const projectSkillReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PROJECT_SKILL_LIST:
      let projectSkills = action.payload;
      if (action.payload !== undefined && action.payload.length > 0) {
        projectSkills = action.payload.map((ps: any) => {
          if (ps.ProjectSkillMapping !== undefined) {
            ps.IsChecked = true;
          } else {
            ps.IsChecked = false;
          }
          return ps;
        });
      }
      return { ...state, lists: projectSkills };
    case PROJECT_SKILL_UPSERT:
      return { ...state, message: action.payload };
    case PROJECT_SKILL_NO_DATA:
      return { ...state, noData: action.payload };
    default:
      return { ...state };
  }
};
