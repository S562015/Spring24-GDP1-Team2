import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../pages/home/homeReducer";
import signupReducer from "../pages/signup/signupReducer";

export default combineReducers({
  homeReducer,
  signupReducer,
});
