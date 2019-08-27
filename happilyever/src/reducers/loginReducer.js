const initialState = {
  isLogged: false,
  user: [],
  token: null,
  error: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_START":
      return {
        ...state,
        isLogged: false
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        isLogged: true,
        user: action.payload,
        token: localStorage.getItem("token")
      };

    case "LOGIN_USER_FAILURE":
      return {
        ...state,
        isLogged: false,
        error: ""
      };

    default:
      return state;
  }
};
