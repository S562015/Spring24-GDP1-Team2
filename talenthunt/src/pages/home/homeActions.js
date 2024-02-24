import { handleGet, handlePost } from "../../utils";

export const getJobs = (employerInfo) => {
  return async (dispatch) => {
    try {
      const res = await handleGet("/jobs");
      if (res.status === 200) {
        return res;
      }
    } catch (e) {
      console.log(e);
    }
  };
};
