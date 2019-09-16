import React from 'react';
import { Formik, Field } from 'formik';



const ForgetForm = () => (
    <div>
        <Formik
            initialValues={{
                email: '',
            }}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <form className="user" autoComplete="true" noValidate>
                    <h3 className="h4 text-gray-900 mb-4">Forget Password</h3>
        <p>Please provide the Email ID that you have used when you signed up</p>
                    <div className="form-group">
                        <Field
                            component="input"
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter email address..."
                            autoComplete="off"
                            name="email" validate={validateEmail} />
                        {errors.email && touched.email && <div className="main-error">{errors.email}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary btn-user btn-block" >Submit</button>
                </form>
            )}
        </Formik>
    </div>
);
function validateEmail(value: any) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}


export default ForgetForm;  