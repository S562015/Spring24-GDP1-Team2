import {CURRENT_USER, LOGINTABIDX, SET_LOGIN_ERROR} from "./actionType";

const initialState = {
  authError: null,
  tabIdx: 0,
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
      tabIdx: action.data,
    };
    default:
      return state;
  }
};

export default helperReducer;
