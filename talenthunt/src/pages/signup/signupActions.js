import { handleGet, handlePost } from "../../utils";
import { GET_ALL_JOBS, CREATE_EMPLOYER } from "../../redux/actionType";

export const createEmployer = (employerInfo) => {
  return async (dispatch) => {
    return handlePost("employer/create", employerInfo)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch({
            type: CREATE_EMPLOYER,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const createAspirant = (aspirantInfo) => {
  return async (dispatch) => {
    try {
      const res = await handlePost("aspirant/create", aspirantInfo);
      if (res.status === 200) {
        return res;
      }
    } catch (e) {
      console.log(e);
    }
  };
};
