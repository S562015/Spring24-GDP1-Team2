import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../pages/home/homeReducer";
import helperReducer from "./helperReducer";

export default combineReducers({
  homeReducer,
  helperReducer,
});
