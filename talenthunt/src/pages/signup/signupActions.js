import { handlePost } from "../../utils";

export const createEmployer = (employerInfo) => {
  return async (dispatch) => {
    try {
      const res = await handlePost("employer/create", employerInfo);
      if (res.status === 200) {
        return res;
      }
    } catch (e) {
      console.log(e);
    }
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
