import { reqOptions } from "../helpers/common";
// import { OptionInterface } from '../interfaces/option.interface';

const getlookUpData = async () => {
  const request: Request = reqOptions(
    `http://localhost:8080/api/1.0/lookUpMasterDetails`,
    "GET"
  );
  return fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
};

const getProficiencyLevel = async (type: string) => {
  const request: Request = reqOptions(
    `http://localhost:8080/api/1.0/lookUpMasterDetails/${type}`,
    "GET"
  );
  return fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
};

const lookUpMasterService = {
  getlookUpData,
  getProficiencyLevel
};

export default lookUpMasterService;
