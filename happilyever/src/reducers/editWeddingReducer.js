const initialState = {
  newWedding: [],
  isLoading: false,
  token: localStorage.getItem("token"),
  error: ""
};

export const editWeddingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_WEDDING_START":
      return {
        ...state,
        isLoading: true,
        token: localStorage.getItem("token")
      };

    case "EDIT_WEDDING_SUCCESS":
      return {
        ...state,
        isLoading: false,
        newWedding: action.payload
      };

    case "EDIT_WEDDING_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
  }
};
