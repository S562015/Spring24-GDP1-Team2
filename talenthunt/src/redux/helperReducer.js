import {
  ASPIRANT,
  CURRENT_USER,
  LOGINTABIDX,
  SELECT_JOB_ID,
  SET_LOGIN_ERROR,
} from "./actionType";

const initialState = {
  authError: null,
  UserType: ASPIRANT,
  selectedJobID: "",
};

const helperReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        currentUser: action.data,
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        authError: action.data,
      };
    case LOGINTABIDX:
      return {
        ...state,
        UserType: action.data,
      };
    case SELECT_JOB_ID:
      return {
        ...state,
        selectedJobID: action.data,
      };
    default:
      return state;
  }
};

export default helperReducer;
