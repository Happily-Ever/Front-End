import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import {NavLink} from "react-router-dom";
import * as Yup from "yup";
import axios from "axios"

function nonFormik({errors, touched, values,isSubmitting}) {
  const [users, addUser] = useState();
  useEffect(()=>{
    if(status){
      addUser([...users, status])
    }
  }, [status]);
  return (
    <div className="loginregister">
      <h1>Please Login</h1>
      <Form>
        <label>Username
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field 
            type="text" 
            name="username"
            placeholder="No profanity, please"/>
        </label>
        <label>Password
        {touched.password && errors.password && <p>{errors.password}</p>}
          <Field
            type="password" 
            name="password"
            placeholder="Must be at least 7 characters"/>
        </label>
        <label>
            I accept the Terms of Service 
            <Field type="checkbox" name="tos" checked={values.tos}/>
        </label>
        <button disabled={isSubmitting}>Submit</button>
        <h2>No Account?</h2>
        <NavLink>Sign Up</NavLink>
      </Form>
    </div>
  )
}

const Login = withFormik({
    mapPropsToValues({username, password}){
        return {
            username: username || "",
            password: password || "",
            tos: tos || false
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Must be a traditional email format")
            .required("Email field is required"),
        password: Yup.string()
            .min(7, "Password must be at least 7 characters")
            .required("Password field is required"),
        tos: Yup.bool()
            .required("You must accept our terms")
    }),
    handleSubmit(values, {resetForm}){
        axios.post(/*"API",*/ values)
             .then(result => {
               console.log(result);
               resetForm();
               setSubmitting(false);
             })
             .catch(err=>{
               console.log(err);
               setSubmitting(false);
             })
    }
})(nonFormik);

export default Login;