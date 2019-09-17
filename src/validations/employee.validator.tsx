import * as Yup from 'yup';

const employeeCreate = Yup.object().shape({
  first_name: Yup.string().required("Firstname is required"),
  last_name: Yup.string().required("Lastname is required"),
  email: Yup.string().required("Email is mandatory").email("Email should be a email"),
  phone: Yup.string().required("Phone is mandatory")
});
export const employeeValidator = {
  employeeCreate
};