import { LOOKUP_LIST } from "../actiontypes/lookUpMaster";

const initialState = {
  lists: [],
  noData: {},
  message: "",
  delete_id: ""
};
export const lookUpMasterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOOKUP_LIST:
      console.log(action.payload);
      return {
        ...state,
        lists: action.payload
        //editProject: null
        //delete_id: ""
      };
    // case PROJECT_NO_DATA:
    //   return { ...state, noData: action.payload };
    // case PROJECT_ADD:
    //   return { ...state, message: action.payload };
    // case PROJECT_EDIT:
    //   return { ...state, editEmp: action.payload };
    // case PROJECT_UPDATE:
    //   return { ...state, message: action.payload };
    // case PROJECT_DELETE:
    //   return {
    //     ...state,
    //     message: action.payload.status,
    //     delete_id: action.payload.deleteId
    //   };
    default:
      return { ...state };
  }
};
