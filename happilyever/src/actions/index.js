import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//// Register User Action
export const registerUser = () => {
  return dispatch => {
    dispatch({ type: "REG_USER_START" });
    axios
      .get("dummyLink.com")
      .then(res => {
        dispatch({ type: "REG_USER_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "REG_USER_FAILURE", payload: err.data });
      });
  };
};

/// Login User Action

export const loginUser = user => {
  return dispatch => {
    dispactch({ type: "LOGIN_USER_START" });
    axiosWithAuth()
      .post("dummyendpoint.com", user)
      .then(res => {
        dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_USER_FAILURE", payload: err.response });
      });
  };
};
