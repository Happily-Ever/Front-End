const initialState = {
  weddings: [],
  isLoading: false,
  error: ""
};

export const weddingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEDDINGS_START":
      return {
        ...state,
        isLoading: true
      };

    case "FETCH_WEDDINGS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        weddings: action.payload
      };

    case "FETCH_WEDDINGS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
