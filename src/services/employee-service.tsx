import { reqOptions } from "../helpers/common";
// import { OptionInterface } from '../interfaces/option.interface';

const getEmployees = async () => {
  const request: Request = reqOptions(
    "http://localhost:8080/api/1.0/employees",
    "GET"
  );
  return fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
};

const getEmployee = async (empId: number) => {
  const request: Request = reqOptions(
    `http://localhost:8080/api/1.0/employees/${empId}`,
    "GET"
  );
  return fetch(request)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log("E Error", err);
    });
};

// Get Details of all employees for Dashboard
const getDetailsEmployee = async () => {
  debugger;
  const request: Request = reqOptions(
    "http://localhost:8080/api/1.0/dashboard/empskills",
    "GET"
  );
  return await fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
};

const createEmployee = async (data: any) => {
  const options: Request = reqOptions(
    "http://localhost:8080/api/1.0/employees",
    "POST",
    data
  );
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log("E Error", err);
    });
};
const updateEmployee = async (data: any, empId: number) => {
  const options: Request = reqOptions(
    `http://localhost:8080/api/1.0/employees/${empId}`,
    "PUT",
    data
  );
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log("E Error", err);
    });
};

const deleteEmployee = async (empId: number) => {
  const options: Request = reqOptions(
    `http://localhost:8080/api/1.0/employees/${empId}`,
    "DELETE"
  );
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log("E Error", err);
    });
};

const employeeService = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getDetailsEmployee
};

export default employeeService;
