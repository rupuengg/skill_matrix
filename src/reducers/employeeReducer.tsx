import { EMPLOYEE_LIST, EMPLOYEE_SKILL, EMPLOYEE_NO_DATA, EMPLOYEE_ADD, EMPLOYEE_EDIT, EMPLOYEE_DELETE, EMPLOYEE_UPDATE } from '../actiontypes/employee';

const initialState = {
  lists: [],
  noData: {},
  message: "",
  delete_id: ""
};

export const employeeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case EMPLOYEE_LIST:
      return { ...state, lists: action.payload, editEmp: null, delete_id: "" };
    case EMPLOYEE_SKILL:
      return { ...state, lists: action.payload, delete_id: "" }
    case EMPLOYEE_NO_DATA:
      return { ...state, noData: action.payload };
    case EMPLOYEE_ADD:
      return { ...state, message: action.payload };
    case EMPLOYEE_EDIT:
      return { ...state, editEmp: action.payload };
    case EMPLOYEE_UPDATE:
      return { ...state, message: action.payload };
    case EMPLOYEE_DELETE:
      return { ...state, message: action.payload.status, delete_id: action.payload.deleteId };
    default:
      return { ...state };
  }
}
