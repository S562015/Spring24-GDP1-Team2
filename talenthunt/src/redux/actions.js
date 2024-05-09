import {
  CURRENT_USER,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGINTABIDX,
  SELECT_JOB_ID,
  SET_LOGIN_ERROR,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionType";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

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

export const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

// Thunk action creator
export const signUp =
  (email, password, displayName, callback) => async (dispatch) => {
    dispatch(signupRequest());
    try {
      // Sign up with email and password
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Something went wrong, try again!");
      }

      // Include the display name in the user profile
      await updateProfile(res, { displayName: displayName });
      callback();
      dispatch(signupSuccess(res.user));
      toast.success("Login Successful");
    } catch (err) {
      console.log({ es: err.message });
      dispatch(signupFailure(err.message));
      toast.error(err.message);
    }
  };

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (email, password, callback) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    dispatch(loginSuccess(res.user));
    callback();
    return res;
  } catch (err) {
    toast.error(err.message);
    dispatch(loginFailure(err.message));
  }
};

export const logoutUser = (email, password) => async (dispatch) => {
  // dispatch(loginRequest());
  try {
    const res = await auth.signOut();
    dispatch(loginSuccess(null));
    return res;
  } catch (err) {
    dispatch(loginFailure(err.message));
  }
};

export const handleLoginTabIndex = (val) => {
  return (dispatch) => {
    dispatch({
      type: LOGINTABIDX,
      data: val,
    });
  };
};

export const selectedJobID = (val) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_JOB_ID,
      data: val,
    });
  };
};
