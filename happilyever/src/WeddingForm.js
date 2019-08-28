import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

function FormikWeddingForm({ values, errors, touched, isSubmitting }) {
  return (
      
    <Form>
      <div>
        {touched.bridesname && errors.bridesname && <p>{errors.bridesname}</p>}
        <Field type="text" name="Brides name" placeholder="Brides name" />
      </div>
      <div>
        {touched.groomsname && errors.groomsname && <p>{errors.groomsname}</p>}
        <Field type="text" name="Grooms name" placeholder="Grooms name" />
      </div>
      
      <button type="submit" disabled={isSubmitting}>Login &rarr;</button>
    </Form>
    
  );
}

const WeddingForm = withFormik({
  mapPropsToValues({ bridesname, groomsname }) {
    return {
      bridesname: bridesname || "",
      groomsname: groomsname || "",
      
    };
  },
  validationSchema: Yup.object().shape({
      bridesname: Yup.string()
      .required("bridesname is required"),
    groomsname: Yup.string()
      .required("groomsname is required")
  }),
//   handleSubmit(values, formikBag) {
//     //console.log(formikBag);
//     if (values.bridesname === "alreadytaken@atb.dev") {
//       formikBag.setErrors({ bridesname: "That bridesname is already taken" });
//     } else {
//       axios
//         .post("", values)
//         .then(res => {
//           localStorage.setItem('token', res.data.token);
//           formikBag.props.history.push('');
//           console.log(res);
//           formikBag.resetForm();
//           formikBag.setSubmitting(false);

//         })
//         .catch(err => {
//           console.log(err); 
//         });
    //}
  //}
})(FormikWeddingForm);
 
export default WeddingForm;