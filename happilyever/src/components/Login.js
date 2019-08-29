import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
// Redux
import { connect } from "react-redux";
import { loginUser } from "../actions";

const LogReg = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  padding: 1rem;
  width: 28%;
  background: #00a3ff;
  box-shadow: 0px 0px 24px rgba(0, 163, 255, 0.2);
  border-radius: 20px;
`;

const Formo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const H1 = styled.h1`
  text-align: center;
  color: white;
`;

const H2 = styled.h2`
  text-align: center;
  color: white;
`;

const Label = styled.label`
  margin-bottom: 1rem;
  color: white;
`;

const Button = styled.button`
  width: 25%;
  margin: 1rem auto;
`;

const NonFormik = props => {
  const { errors, touched, values, isSubmitting, status } = props;

  return (
    <LogReg>
      <H1>Please Login</H1>
      <Form>
        <Formo>
          <Label>
            Username
            <br />
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field
              type="text"
              name="username"
              placeholder="Username..."
              style={{ padding: ".5rem", borderRadius: "10px" }}
            />
          </Label>
          <Label>
            Password
            <br />
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field
              type="password"
              name="password"
              placeholder="Password..."
              style={{ padding: ".5rem", borderRadius: "10px" }}
            />
          </Label>
          <Button type="submit">Login</Button>
          <H2>Don't Have an Account?</H2>
          <NavLink
            to="/register"
            style={{
              color: "white",
              fontSize: "2rem",
              textDecoration: "underline"
            }}
          >
            Sign Up
          </NavLink>
        </Formo>
      </Form>
    </LogReg>
  );
};

export default connect(
  null,
  { loginUser }
)(
  withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Email field is required"),
      password: Yup.string()
        .min(7, "Password must be at least 7 characters")
        .required("Password field is required")
    }),
    handleSubmit(values, { props }) {
      console.log("VALUES IN FORM", values);
      props.loginUser(
        {
          username: values.username,
          password: values.password
        },
        props.history
      );
    }
  })(NonFormik)
);
