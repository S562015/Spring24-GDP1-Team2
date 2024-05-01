import { GET_ALL_JOBS } from "../../redux/actionType";
const initialState = {};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_JOBS:
      return {
        ...state,
        jobList: action.data,
      };
    default:
      return state;
  }
};

export default homeReducer;
