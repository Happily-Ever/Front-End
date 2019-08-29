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
    dispatch({ type: "LOGIN_USER_START" });
    axiosWithAuth()
      .post("*Link Here*", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
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

export const weddingsList = history => {
  const token = localStorage.getItem("token");
  return dispatch => {
    dispatch({ type: "FETCH_WEDDINGS_START" });
    axiosWithAuth()
      .get("*Link HERE*", {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        dispatch({ type: "FETCH_WEDDINGS_SUCCESS", payload: res.data });
        history.push("/weddings");
      })
      .catch(err => {
        dispatch({ type: "FETCH_WEDDINGS_FAILURE", paylaod: err.response });
      });
  };
};

/// Add weddings to list Action

export const addWedding = wedding => {
  const token = localStorage.getItem("token");
  return dispatch => {
    dispatch({ type: "ADD_WEDDING_START" });
    axiosWithAuth()
      .post("*LINK HERE*", wedding, {
        headers: {
          Authorization: token
        }
      })
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
