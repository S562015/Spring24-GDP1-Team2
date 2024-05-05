import { handlePost } from "../../utils";
import {
  CREATE_ASPIRANT,
  CREATE_EMPLOYER,
  GET_ALL_JOBS,
} from "../../redux/actionType";

export const createEmployer = (employerInfo) => async (dispatch) => {
  try {
    const res = await handlePost("employer/create", employerInfo);
    dispatch({ type: CREATE_EMPLOYER, data: res.data });
  } catch (error) {
    dispatch({ type: CREATE_ASPIRANT, data: null });
  }
};

export const createAspirant = (data) => async (dispatch) => {
  try {
    const res = await handlePost("aspirant/create", data);
    dispatch({ type: CREATE_ASPIRANT, data: res.data });
  } catch (error) {
    dispatch({ type: CREATE_ASPIRANT, data: null });
  }
};
