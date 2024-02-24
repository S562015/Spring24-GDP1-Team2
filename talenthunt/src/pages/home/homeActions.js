import { handleGet, handlePost } from "../../utils";
import { handlePost } from "../../utils";

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

export const getOrganization = () => {
  return async (dispatch) => {
    try {
      const res = await handleGet("/application");
      if (res.status === 200) {
        return res;
      }
    } catch (e) {
      console.log(e);
    }
  };
};
