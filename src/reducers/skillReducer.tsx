import { SKILL_LIST, SKILL_NO_DATA, SKILL_ADD, SKILL_EDIT, SKILL_DELETE, SKILL_UPDATE } from '../actiontypes/skill';

const initialState = {
  lists: [],
  noData: {},
  message: "",
  delete_id: ""
};

export const skillReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SKILL_LIST:
      return { ...state, lists: action.payload, editSkill: null, delete_id: "" };
    case SKILL_NO_DATA:
      return { ...state, noData: action.payload };
    case SKILL_ADD:
      return { ...state, message: action.payload };
    case SKILL_EDIT:
      return { ...state, editEmp: action.payload };
    case SKILL_UPDATE:
      return { ...state, message: action.payload };
    case SKILL_DELETE:
      return { ...state, message: action.payload.status, delete_id: action.payload.deleteId };
    default:
      return { ...state };
  }
}