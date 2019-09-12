import * as Yup from 'yup';

const authLoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is mandatory").email("Email should be a email"),
  password: Yup.string().required("Password is mandatory").min(6, "Password: Too short").max(25, "Password: Too long")
});

const authForgotPassword = Yup.object().shape({
  email: Yup.string().required("Email is mandatory").email("Email should be a email")
});

export const authValidator = {
  authLoginSchema,
  authForgotPassword
};