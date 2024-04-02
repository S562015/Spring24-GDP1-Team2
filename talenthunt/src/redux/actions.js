import { CURRENT_USER, SET_LOGIN_ERROR } from "./actionType";

export const setCurrentUser = (data) => (dispatch) => {
  dispatch({
    type: CURRENT_USER,
    data,
  });
};

export const setError = (data) => (dispatch) => {
  dispatch({
    type: SET_LOGIN_ERROR,
    data,
  });
};
