import { handleGet, handlePost } from "../../utils";
import {
  GET_ALL_JOBS,
  GET_ORGANIZATION,
  CREATE_EMPLOYER,
  CREATE_ASPIRANT,
} from "../../redux/actionType";
import { toast } from "react-toastify";

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

export const createJob = (data, callback) => async (dispatch) => {
  try {
    const res = await handlePost("jobs/create", data);
    if ((res.status = 201)) {
      toast.success("Job Posted");
      callback();
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const createApplication = (data, callback) => async (dispatch) => {
  try {
    const res = await handlePost("application/create", data);
    console.log({ res });
    if ((res.status = 201)) {
      toast.success("Job applied ");
      if (callback) callback();
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const getOrganization = () => {
  return async (dispatch) => {
    return handleGet("organization")
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
