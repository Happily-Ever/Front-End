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
  console.log("LOGIN ACTION", history);
  console.log("USER IN ACTION", user);
  return dispatch => {
    dispatch({ type: "LOGIN_USER_START" });
    axiosWithAuth()
      .post("https://lambda-wedding-planner.herokuapp.com/api/auth/login", user)
      .then(res => {
        console.log("LOOKING FOR TOKEN IN RESPONSE", res);
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
  const token = localStorage.getItem("token");
  return dispatch => {
    dispatch({ type: "FETCH_WEDDINGS_START" });
    axiosWithAuth()
      .get("https://lambda-wedding-planner.herokuapp.com/api/posts/all")
      .then(res => {
        console.log(res.data);
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
  const token = localStorage.getItem("token");
  return dispatch => {
    dispatch({ type: "ADD_WEDDING_START" });
    axiosWithAuth()
      .post("https://lambda-wedding-planner.herokuapp.com/api/posts", wedding)
      .then(res => {
        console.log("ADD WEDDING ACTION", res);
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
  const token = localStorage.getItem("token");
  return dispatch => {
    dispatch({ type: "DELETE_WEDDING_START" });
    axiosWithAuth()
      .delete(`*http://LINK HERE${id}*`, {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        dispatch({ type: "DELETE_WEDDING_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "DELETE_WEDDING_FAILURE", payload: err.response });
      });
  };
};

export const editWedding = (wedding, id) => {
  const token = localStorage.getItem("token");
  return dispatch => {
    dispatch({ type: "EDIT_WEDDING_START" });
    axiosWithAuth()
      .put(`*LINK HERE${id}*`, wedding, {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        dispatch({ type: "EDIT_WEDDING_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "EDIT_WEDDING_FAILURE", payload: err.response });
      });
  };
};
