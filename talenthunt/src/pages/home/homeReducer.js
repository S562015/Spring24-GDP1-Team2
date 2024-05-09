import {
  ALL_ASPIRANT,
  GET_ALL_APPLICATION,
  GET_ALL_JOBS,
} from "../../redux/actionType";
const initialState = {
  applicationList: null,
  appliedData: "",
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_JOBS:
      return {
        ...state,
        jobList: action.data,
      };
    case GET_ALL_APPLICATION:
      return {
        ...state,
        applicationList: action.data,
      };
    case ALL_ASPIRANT:
      return {
        ...state,
        appliedData: action.data,
      };
    default:
      return state;
  }
};

export default homeReducer;
