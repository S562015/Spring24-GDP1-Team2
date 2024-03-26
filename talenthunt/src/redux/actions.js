import { CURRENT_USER } from "./actionType";

export const setCurrentUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: CURRENT_USER,
      data,
    });
  };
};
