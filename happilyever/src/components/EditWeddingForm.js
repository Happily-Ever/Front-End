import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { connect } from "react-redux";
import { editWedding } from "../actions";

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

function NonFormik({
  errors,
  touched,
  values,
  isSubmitting,
  status,
  editWedding,
  match,
 wedding
}) {
 

  

  console.log("WEDDING IN STATE", wedding);

  return (
    <LogReg>
      <H1>Edit a Wedding</H1>
      <Form>
        <Formo>
          <Label>
            Couple Name
            <br />
            {touched.couple_name && errors.couple_name && (
              <p>{errors.couple_name}</p>
            )}
            <Field
              type="text"
              name="couple_name"
              style={{ padding: ".5rem", borderRadius: "10px" }}
            />
          </Label>
          <Label>
            Wedding Date
            <br />
            {touched.wedding_date && errors.wedding_date && (
              <p>{errors.wedding_date}</p>
            )}
            <Field
              type="text"
              name="wedding_date"
              style={{ padding: ".5rem", borderRadius: "10px" }}
            />
          </Label>
          <Label>
            City
            <br />
            {touched.wedding_location && errors.wedding_location && (
              <p>{errors.wedding_location}</p>
            )}
            <Field
              type="text"
              name="wedding_location"
              style={{ padding: ".5rem", borderRadius: "10px" }}
            />
          </Label>
          <Label>
            Theme
            <br />
            {touched.wedding_theme && errors.wedding_theme && (
              <p>{errors.wedding_theme}</p>
            )}
            <Field
              type="text"
              name="wedding_theme"
              style={{ padding: ".5rem", borderRadius: "10px" }}
            />
          </Label>
          <Button
            onClick={() => editWedding(wedding.id)}
            disabled={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Formo>
      </Form>
    </LogReg>
  );
}

const mapStateToProps = state => {
  console.log("EDIT WEDDING FORM", state.getWeddingToEdit.wedding);
  return {
    wedding: state.getWeddingToEdit.wedding
  };
};

export default connect(
  mapStateToProps,
  { editWedding }
)(
  withFormik({
    mapPropsToValues({
      couple_name,
      wedding_date,
      wedding_location,
      wedding_theme
    }) {
      return {
        couple_name: couple_name || "",
        wedding_date: wedding_date || "",
        wedding_location: wedding_location || "",
        wedding_theme: wedding_theme || ""
      };
    },
    validationSchema: Yup.object().shape({
      couple_name: Yup.string().required("This field is required"),
      wedding_date: Yup.string().required("This field is required"),
      wedding_location: Yup.string().required("This field is required"),
      wedding_theme: Yup.string().required("This field is required")
    }),
    handleSubmit(values, { props }) {
      console.log("PROPS IN COUPLE", props);
      console.log(values);
      props.editWedding(
        {
          couple_name: values.couple_name,
          wedding_date: values.wedding_date,
          wedding_location: values.wedding_location,
          wedding_theme: values.wedding_theme
        },
        props.history
      );
    }
  })(NonFormik)
);
