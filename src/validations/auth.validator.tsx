import * as Yup from 'yup';

const authLoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is mandatory").email("Email should be a email"),
  password: Yup.string().required("Password is mandatory").min(6, "Password: Too short").max(25, "Password: Too long")
});

const authForgotPassword = Yup.object().shape({
  email: Yup.string().required("Email is mandatory").email("Email should be a email")
});

const authResetPassword = Yup.object().shape({
  password: Yup.string().required('Password is required')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/, {
      message: 'Fill  valid password',
      excludeEmptyString: true
    }),
  passwordConfirmation: Yup.string().required('ConfirmPassword is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export const authValidator = {
  authLoginSchema,
  authForgotPassword,
  authResetPassword
};