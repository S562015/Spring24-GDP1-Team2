import { handleGet, handlePost, handleGetBody } from "../../utils";
import {
  GET_ALL_JOBS,
  GET_ORGANIZATION,
  CREATE_EMPLOYER,
  CREATE_ASPIRANT,
  GET_ALL_APPLICATION,
  ALL_ASPIRANT,
} from "../../redux/actionType";
import { toast } from "react-toastify";
import { border } from "@mui/system";

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
export const getApplications = () => {
  return async (dispatch) => {
    return handleGet("applications/")
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch({
            type: GET_ALL_APPLICATION,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getAllAspirant = (body, callback) => {
  return async (dispatch) => {
    return handleGetBody("aspirant/get/", body)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch({
            type: ALL_ASPIRANT,
            data: response.data,
          });
          if (callback) {
            callback(response.data);
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getAllJobs = (body, callback) => {
  return async (dispatch) => {
    return handleGetBody("jobs/get/", body)
      .then((response) => {
        if (response.status === 200) {
          if (callback) {
            callback(response.data);
          }
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
      dispatch(getJobs());
      if (callback) callback();
    }
  } catch (error) {
    toast.error(error.message);
  }
};

///applications/${id}/update-status

export const updateApplication = (data, callback) => async (dispatch) => {
  try {
    const res = await handlePost(
      `applications/${data["_id"]}/update-status`,
      data,
    );
    if ((res.status = 201)) {
      toast.success("application updated ");
      dispatch(getJobs());
      if (callback) callback();
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const createApplication = (data, callback) => async (dispatch) => {
  try {
    const res = await handlePost("applications/create", data);
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
