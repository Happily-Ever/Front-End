import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";
import { registerUser } from "../actions";

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

const NonFormikReg = props => {
  const { errors, touched, values, isSubmitting, status } = props;

  return (
    <LogReg>
      <H1>Please Register</H1>
      <Form>
        <Formo>
          <Label>
            Username
            <br />
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field
              type="text"
              name="username"
              placeholder="No profanity, please"
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
              placeholder="At least 7 characters"
              style={{ padding: ".5rem", borderRadius: "10px" }}
            />
          </Label>
          <Label>
            Email
            <br />
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field
              type="email"
              name="email"
              placeholder="At least 7 characters"
              style={{ padding: ".5rem", borderRadius: "10px" }}
            />
          </Label>
          <Label>
            Location
            <br />
            {touched.userLocation && errors.userLocation && (
              <p>{errors.userLocation}</p>
            )}
            <Field
              type="text"
              name="userLocation"
              placeholder="At least 7 characters"
              style={{ padding: ".5rem", borderRadius: "10px" }}
            />
          </Label>
          <Button type="submit">Register</Button>
          <H2>Have an Account?</H2>
          <NavLink
            to="/login"
            style={{
              color: "white",
              fontSize: "2rem",
              textDecoration: "underline"
            }}
          >
            Login
          </NavLink>
        </Formo>
      </Form>
    </LogReg>
  );
};

export default connect(
  null,
  { registerUser }
)(
  withFormik({
    mapPropsToValues({ username, password, email, userLocation }) {
      return {
        username: username || "",
        password: password || "",
        email: email || "",
        userLocation: userLocation || ""
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username field is required"),
      email: Yup.string().required("Email field is required"),
      userLocation: Yup.string().required("Location field is required"),
      password: Yup.string()
        .min(7, "Password must be at least 7 characters")
        .required("Password field is required")
    }),
    handleSubmit(values, { props }) {
      props.registerUser(
        {
          username: values.username,
          password: values.password,
          email: values.email,
          location: values.userLocation
        },
        props.history
      );
    }
  })(NonFormikReg)
);
