const initialState = {
  newWedding: [],
  isLoading: false,
  token: localStorage.getItem("token"),
  error: ""
};

export const addWeddingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WEDDING_START":
      return {
        ...state,
        isLoading: true,
        token: localStorage.getItem("token")
      };

    case "ADD_WEDDING_SUCCESS":
      return {
        ...state,
        isLoading: false,
        newWedding: action.payload
      };

    case "ADD_WEDDING_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
  }
};
