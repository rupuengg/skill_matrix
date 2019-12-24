import lookUpMasterService from "../services/lookUpMaster-service";
import { SPINNER_SHOW, SPINNER_HIDE } from "../actiontypes/spinner";
import { LOOKUP_LIST, LOOKUP_NO_DATA } from "../actiontypes/lookUpMaster";
import { FLASH_SHOW, FLASH_HIDE } from "../actiontypes/flash";
import { history } from "../helpers/history";

export const getlookUpData = () => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await lookUpMasterService.getlookUpData().then(res => {
    console.log(res);
    if (res.data.length > 0) {
      dispatch({
        type: LOOKUP_LIST,
        payload: res.data
      });
    } else {
      dispatch({
        type: LOOKUP_NO_DATA,
        payload: res
      });
    }
    dispatch({ type: SPINNER_HIDE });
  });
};

export const getProficiencyLevel = (typeVal: string) => async (
  dispatch: any
) => {
  dispatch({ type: SPINNER_SHOW });
  await lookUpMasterService.getProficiencyLevel(typeVal).then(res => {
    if (res.data.length > 0) {
      debugger;
      dispatch({
        type: LOOKUP_LIST,
        payload: res.data
      });
    } else {
      dispatch({
        type: LOOKUP_NO_DATA,
        payload: res
      });
    }
    dispatch({ type: SPINNER_HIDE });
  });
};
