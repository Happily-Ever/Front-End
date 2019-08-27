import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//// Register User Action
export const registerUser = () => {
  return dispatch => {
    dispatch({ type: "REG_USER_START" });
    axios
      .get("*LINK HERE*")
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
      .post("*Link Here*", user)
      .then(res => {
        localStorage.setItem("token", "*res value here*");
        dispatch({
          type: "LOGIN_USER_SUCCESS",
          payload: {
            token: localStorage.getItem("token"),
            data: res.data
          }
        });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_USER_FAILURE", payload: err.response });
      });
  };
};

/// Logout User Action

export const logoutUser = user => {
  return {
    type: "LOGOUT_USER_SUCCESS"
  };
};

/// Get list of weddings Action

export const weddingsList = () => {
  return dispatch => {
    dispatch({ type: "FETCH_WEDDINGS_START" });
    axiosWithAuth()
      .get("*LINK HERE*")
      .then(res => {
        dispatch({ type: "FETCH_WEDDINGS_START", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_WEDDINGS_FAILURE", paylaod: err.response });
      });
  };
};

/// Add weddings to list Action

export const addWedding = wedding => {
  return dispatch => {
    dispatch({ type: "ADD_WEDDING_START" });
    axiosWithAuth()
      .post("*LINK HERE*", wedding)
      .then(res => {
        dispatch({ type: "ADD_WEDDING_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "ADD_WEDDING_FAILURE", payload: err.response });
      });
  };
};

/// delete wedding action

export const deleteWedding = id => {
  return dispatch => {
    dispatch({ type: "DELETE_WEDDING_START" });
    axiosWithAuth()
      .delete(`*http://LINK HERE${id}*`)
      .then(res => {
        dispatch({ type: "DELETE_WEDDING_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "DELETE_WEDDING_FAILURE", payload: err.response });
      });
  };
};
