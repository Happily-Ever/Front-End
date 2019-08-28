import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const LogReg = styled.div`  
display: flex;
flex-direction: column;
margin: 3rem auto;
padding: 1rem;
width: 28%;
background: #00A3FF;
box-shadow: 0px 0px 24px rgba(0, 163, 255, 0.2);
border-radius: 20px;
`

const Formo = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`

const H1 = styled.h1`
text-align: center;
color: white;
`

const H2 = styled.h2`
text-align: center;
color: white;
`

const Label = styled.label`
margin-bottom: 1rem;
color: white;
`

const Button = styled.button`
width: 25%;
margin: 1rem auto;
`


function NonFormik({errors, touched, values, isSubmitting, status}) {
  const [users, addUser] = useState();
  useEffect(()=>{
    if(status){
      addUser([...users, status])
    }
  }, [status, users]);



  return (
    <LogReg>
      <H1>Add a Wedding</H1>
      <Form>
      <Formo>
        <Label>Spouse #1<br/>
          {touched.spouse1 && errors.spouse1 && <p>{errors.spouse1}</p>}
          <Field 
            type="text" 
            name="spouse1"
            style={{padding: ".5rem", borderRadius: "10px"}}/>
        </Label>
        <Label>Spouse #2<br/>
        {touched.spouse2 && errors.spouse2 && <p>{errors.spouse2}</p>}
          <Field
            type="text" 
            name="spouse2"
            style={{padding: ".5rem", borderRadius: "10px"}}/>
        </Label>
        <Label>Wedding Date<br/>
        {touched.date && errors.date && <p>{errors.date}</p>}
            <Field 
            type="text"
            name="date"
            style={{padding: ".5rem", borderRadius: "10px"}}/>
        </Label>
        <Label>City<br/>
        {touched.city && errors.city && <p>{errors.city}</p>}
            <Field 
            type="text"
            name="city"
            style={{padding: ".5rem", borderRadius: "10px"}}/>
        </Label>
        <Label>Venue<br/>
        {touched.venue && errors.venue && <p>{errors.venue}</p>}
            <Field 
            type="text"
            name="venue"
            style={{padding: ".5rem", borderRadius: "10px"}}/>
        </Label>  
        <Button disabled={isSubmitting}>Submit</Button>
        </Formo>
      </Form>
    </LogReg>
  )
}

const WeddingForm = withFormik({
    mapPropsToValues({spouse1, spouse2, date, city, venue}){
        return {
            spouse1: spouse1 || "",
            spouse2: spouse2 || "",
            date: date || "",
            city: city || "",
            venue: venue || ""
        }
    },
    validationSchema: Yup.object().shape({
        spouse1: Yup.string()
            .required("This field is required"),
        spouse2: Yup.string()
            .required("This field is required"),
        date: Yup.string()
            .required("This field is required"),
        city: Yup.string()
            .required("This field is required"),
        venue: Yup.string()
            .required("This field is required"),
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
})(NonFormik);


export default WeddingForm;