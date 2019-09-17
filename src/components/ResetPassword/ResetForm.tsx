import React from 'react';
import { Formik, Field } from 'formik';
import { authValidator } from '../../validations/auth.validator';

const ResetForm = () => {

    return (
        <Formik
            initialValues={{ password: "", passwordConfirmation: "" }}
            onSubmit={values => {
                console.log(values);
            }}

            validationSchema={authValidator.authResetPassword}
            render={({ handleSubmit, errors, touched }) => (
                <form className="user" autoComplete="false" onSubmit={handleSubmit} noValidate>
                    <h3 className="h4 text-gray-900 mb-4">Reset Password</h3>
                    <div className="form-group">
                        <Field
                            component="input"
                            type="Password"
                            className="form-control form-control-user"
                            aria-describedby="PasswordHelp"
                            placeholder="Enter New Password ..."
                            autoComplete="off"
                            name="password" />
                        {errors.password && touched.password ? (<span className="error">{errors.password}</span>) : null}

                    </div>
                    <div className="form-group">
                        <Field
                            component="input"
                            type="Password"
                            className="form-control form-control-user"
                            aria-describedby="PasswordHelp"
                            placeholder="Enter New Password ..."
                            autoComplete="off"
                            name="passwordConfirmation" />
                        {errors.passwordConfirmation && touched.passwordConfirmation ? (<span className="error">{errors.passwordConfirmation}</span>) : null}
                       <p>Password Should be min 8 char Atleast One UpperCase,One LowerCase,one numeric digit,and one special character</p>
                    </div>
                    <button type="submit" className="btn btn-primary btn-user btn-block" >Submit</button>

                </form>
            )} />
    );
}
// function validatePassword(value: any) {
//     let error;
//     if (!value) {
//         error = 'Required';
//     } else if (!/^^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/i.test(value)) {
//         error = 'Fill  valid password';
//     }
//     return error;
// }


export default ResetForm;  