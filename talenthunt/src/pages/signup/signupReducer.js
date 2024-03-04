import { createEmployer } from "./signupActions";

const initialState = {};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case createEmployer:
      return {
        ...state,
        employer: action.data,
      };
    default:
      return state;
  }
};

export default signupReducer;
