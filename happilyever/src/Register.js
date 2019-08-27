import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import {NavLink} from "react-router-dom";
import * as Yup from "yup";
import axios from "axios"

function NonFormikReg({errors, touched, values, isSubmitting, status}) {
  const [users, addUser] = useState([]);
  useEffect(()=>{
    if(status){
      addUser([...users, status])
    }
  }, [status]);



  return (
    <div className="loginregister">
      <h1>Please Register</h1>
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
        <button disabled={isSubmitting}>Submit</button>
        <h2>Have an Account?</h2>
        <NavLink /*to " "*/>Login</NavLink>
      </Form>
    </div>
  )
}

const Register = withFormik({
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
    handleSubmit(values, {resetForm, setSubmitting}){
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
})(NonFormikReg);

export default Register;