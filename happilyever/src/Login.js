import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function nonFormik({errors, touched}) {
  return (
    <div className="loginregister">
      <h1>Please Login</h1>
      <Form>
        <p>Username</p>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field 
            type="text" 
            name="username"
            placeholder="No profanity, please"/>
        <p>Password</p>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field
            type="password" 
            name="password"
            placeholder="Must be at least 7 characters"/>
        <button>Submit</button>
      </Form>
    </div>
  )
}

const Login = withFormik({
    mapPropsToValues({username, password}){
        return {
            username: username || "",
            password: password || ""
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Must be a traditional email format")
            .required("Email field is required"),
        password: Yup.string()
            .min(7, "Password must be at least 7 characters")
            .required("Password field is required")
    }),
    handleSubmit(values){
        console.log(values);
    }
})(nonFormik);

export default Login;