import React from 'react';
import { withFormik, Form, Field } from "formik";

function nonFormik() {
  return (
    <div className="loginregister">
      <h1>Please Login</h1>
      <Form>
        <p>Username</p>
        <Field 
            type="text" 
            name="username"
            placeholder="No profanity, please"/>
        <p>Password</p>
        <Field
            type="password" 
            name="password"
            placeholder="Must contain a numeral"/>
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
    handleSubmit(values){
        console.log(values);
    }
})(nonFormik);

export default Login;