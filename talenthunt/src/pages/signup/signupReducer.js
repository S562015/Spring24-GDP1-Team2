import { CREATE_ASPIRANT, CREATE_EMPLOYER } from "../../redux/actionType";

const initialState = {
  employerInfo: null,
  aspirantInfo: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EMPLOYER:
      return {
        ...state,
        employerInfo: action.data,
      };
    case CREATE_ASPIRANT:
      return {
        ...state,
        aspirantInfo: action.data,
      };
    default:
      return state;
  }
};

export default signupReducer;
