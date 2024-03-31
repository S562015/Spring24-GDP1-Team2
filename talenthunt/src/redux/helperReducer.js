import { CURRENT_USER } from "./actionType";

const initialState = {};

const helperReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        currentUser: action.data,
      };
    default:
      return state;
  }
};

export default helperReducer;
