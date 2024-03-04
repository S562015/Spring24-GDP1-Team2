import { handleGet, handlePost } from "../../utils";
import {
  GET_ALL_JOBS,
  GET_ORGANIZATION,
  CREATE_EMPLOYER,
} from "../../redux/actionType";

export const getJobs = () => {
  return async (dispatch) => {
    return handleGet("jobs")
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch({
            type: GET_ALL_JOBS,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
export const getOrganization = () => {
  return async (dispatch) => {
    return handleGet("jobs")
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch({
            type: GET_ORGANIZATION,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
