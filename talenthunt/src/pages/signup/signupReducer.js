import { createEmployer } from "./signupActions";

const initialState = {};

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case createEmployer:
      return Object.assign({}, state, {
        employer: action.data,
      });
    default:
      return state;
  }
}

export default signupReducer;
