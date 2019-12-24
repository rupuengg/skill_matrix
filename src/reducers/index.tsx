import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { spinnerReducer } from "./spinnerReducer";
import { flashReducer } from "./flashReducer";
import { employeeReducer } from "./employeeReducer";
import { skillReducer } from "./skillReducer";
import { employeeSkillReducer } from "./employeeSkillReducer";
import { projectReducer } from "./projectReducer";
import { lookUpMasterReducer } from "./lookUpMasterReducer";
import { projectSkillReducer } from "./projectSkillReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  spinner: spinnerReducer,
  employee: employeeReducer,
  flash: flashReducer,
  skill: skillReducer,
  employeeSkill: employeeSkillReducer,
  project: projectReducer,
  lookUpMaster: lookUpMasterReducer,
  projectSkill: projectSkillReducer
});
