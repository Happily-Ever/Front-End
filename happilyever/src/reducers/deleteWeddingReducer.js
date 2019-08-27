const initialState = {
  isLoading: false,
  deletedWedding: [],
  message: ""
};

export const deletedWeddingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_WEDDING_START":
      return {
        ...state,
        isLoading: true,
        message: ""
      };

    case "DELETE_WEDDING_SUCCESS":
      return {
        ...state,
        isLoading: false,
        message: "Wedding deleted Successfully",
        deletedWedding: action.payload
      };
    case "DELETED_WEDDING_FAILURE":
      return {
        ...state,
        isLoading: false,
        message: "Wedding not deleted. Try again"
      };
    default:
      return state;
  }
};
