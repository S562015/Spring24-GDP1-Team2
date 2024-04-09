import { CURRENT_USER, SET_LOGIN_ERROR } from "./actionType";

export const setCurrentUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: CURRENT_USER,
      data,
    });
  };
};
export const setError = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOGIN_ERROR,
      data,
    });
  };
};
