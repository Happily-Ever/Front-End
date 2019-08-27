const initialState = {
  isLogged: true,
  token: localStorage.getItem("token"),
  error: ""
};

export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGOUT_USER_START":
      return {
        ...state,
        isLogged: true,
        token: localStorage.getItem("token"),
        error: ""
      };
    case "LOGOUT_USER_SUCCESS":
      return {
        ...state,
        isLogged: false,
        token: localStorage.clear()
      };

    case "LOGOUT_USER_FAILURE":
      return {
        ...state,
        isLogged: true,
        token: null,
        error: action.payload
      };

    default:
      return state;
  }
};
