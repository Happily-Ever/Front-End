import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//// Register User Action
export const registerUser = (user, history) => {
  return dispatch => {
    dispatch({ type: "REG_USER_START" });
    axios
      .post(
        "https://lambda-wedding-planner.herokuapp.com/api/auth/register",
        user
      )
      .then(res => {
        dispatch({ type: "REG_USER_SUCCESS", payload: res.data });
        history.push("/login");
      })
      .catch(err => {
        dispatch({ type: "REG_USER_FAILURE", payload: err.data });
      });
  };
};

/// Login User Action

export const loginUser = (user, history) => {
  return dispatch => {
    dispatch({ type: "LOGIN_USER_START" });
    axiosWithAuth()
      .post("https://lambda-wedding-planner.herokuapp.com/api/auth/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: "LOGIN_USER_SUCCESS",
          payload: {
            token: localStorage.getItem("token"),
            data: res.data
          }
        });
      }, history.push("/"))
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

export const weddingsList = history => {
  return dispatch => {
    dispatch({ type: "FETCH_WEDDINGS_START" });
    axiosWithAuth()
      .get("https://lambda-wedding-planner.herokuapp.com/api/posts/all")
      .then(res => {
        console.log("RESSsssssssss", res);
        dispatch({ type: "FETCH_WEDDINGS_SUCCESS", payload: res.data });
        history.push("/weddings");
      })
      .catch(err => {
        dispatch({ type: "FETCH_WEDDINGS_FAILURE", paylaod: err.response });
      });
  };
};

/// Add weddings to list Action

export const addWedding = (wedding, history) => {
  return dispatch => {
    dispatch({ type: "ADD_WEDDING_START" });
    axiosWithAuth()
      .post("https://lambda-wedding-planner.herokuapp.com/api/posts", wedding)
      .then(res => {
        dispatch({ type: "ADD_WEDDING_SUCCESS", payload: res.data });
        history.push("/weddings");
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
      .delete(`https://lambda-wedding-planner.herokuapp.com/api/posts/${id}`)
      .then(res => {
        dispatch({ type: "DELETE_WEDDING_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "DELETE_WEDDING_FAILURE", payload: err.response });
      });
  };
};

/// Put edited Wedding
export const editWedding = (id, history) => {
  console.log("ID IN EDIT WEDDING", id, history);

  return dispatch => {
    dispatch({ type: "EDIT_WEDDING_START" });
    axiosWithAuth()
      .put(`https://lambda-wedding-planner.herokuapp.com/api/posts/${id}`)
      .then(res => {
        dispatch({ type: "EDIT_WEDDING_SUCCESS", payload: res.data });
        history.push("/weddings");
      })
      .catch(err => {
        dispatch({ type: "EDIT_WEDDING_FAILURE", payload: err.response });
      });
  };
};

///  Get wedding To Edit

export const weddingToEdit = id => {
  console.log("ID IN ACTION", id);
  return dispatch => {
    dispatch({ type: "GET_WTE_START" });
    axiosWithAuth()
      .get(`https://lambda-wedding-planner.herokuapp.com/api/posts/${id}`)
      .then(res => {
        console.log("RES IN SINGLE USER WITH EDIT BUTTON", res);
        dispatch({ type: "GET_WTE_SUCCESS", payload: res.data });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({ type: "GET_WTE_FAILURE", payload: err.response });
      });
  };
};
