const initialState = {
  wedding: null,
  isLoading: false,
  token: localStorage.getItem("token"),
  error: ""
};

export const getWeddingToEdit = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WTE_START":
      return {
        ...state,
        isLoading: true,
        token: localStorage.getItem("token")
      };

    case "GET_WTE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        wedding: action.payload
      };

    case "GET_WTE_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
