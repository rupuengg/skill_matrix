import {
  PROJECT_SKILL_LIST,
  PROJECT_SKILL_NO_DATA
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
      return { ...state, lists: action.payload };
    case PROJECT_SKILL_NO_DATA:
      return { ...state, noData: action.payload };
    default:
      return { ...state };
  }
};
