import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../pages/home/homeReducer";
import helperReducer from "./helperReducer";
import signupReducer from "../pages/signup/signupReducer";

export default combineReducers({
  homeReducer,
  helperReducer,
  signupReducer,
});
