import { EMPLOYEE_LIST, EMPLOYEE_NO_DATA, EMPLOYEE_ADD } from '../actiontypes/employee';

const initialState = {
  lists: [],
  noData: {},
  message: ""
};

export const employeeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case EMPLOYEE_LIST:
      return { ...state, lists: action.payload };
    case EMPLOYEE_NO_DATA:
      return { ...state, noData: action.payload };
    case EMPLOYEE_ADD:
      return { ...state, message: action.payload };
    default:
      return { ...state };
  }
}