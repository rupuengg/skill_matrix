import { EMPLOYEE_SKILL_LIST, EMPLOYEE_SKILL_NO_DATA, EMPLOYEE_SKILL_ADD, EMPLOYEE_SKILL_EDIT, EMPLOYEE_SKILL_DELETE, EMPLOYEE_SKILL_UPDATE } from '../actiontypes/employee.skill';

const initialState = {
  lists: [],
  noData: {},
  message: "",
  delete_id: ""
};
export const employeeSkillReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case EMPLOYEE_SKILL_LIST:
      return { ...state, lists: action.payload, editEmp: null, delete_id: "" };
    case EMPLOYEE_SKILL_NO_DATA:
      return { ...state, noData: action.payload };
    case EMPLOYEE_SKILL_ADD:
      return { ...state, message: action.payload };
    case EMPLOYEE_SKILL_EDIT:
      return { ...state, editEmp: action.payload };
    case EMPLOYEE_SKILL_UPDATE:
      return { ...state, message: action.payload };
    case EMPLOYEE_SKILL_DELETE:
      return { ...state, message: action.payload.status, delete_id: action.payload.deleteId };
    default:
      return { ...state };
  }
}
