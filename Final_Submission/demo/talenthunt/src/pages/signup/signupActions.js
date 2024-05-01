import { handlePost } from "../../utils";
import { CREATE_EMPLOYER } from "../../redux/actionType";

export const createEmployer = async (employerInfo, dispatch) => {
  try {
    const response = await handlePost("employer/create", employerInfo);
    if (response.status === 200) {
      dispatch({
        type: CREATE_EMPLOYER,
        data: response.data,
      });
      return response.data;
    } else {
      throw new Error("Failed to create employer");
    }
  } catch (error) {
    console.error("Error creating employer:", error);
    throw error; // Re-throw error to propagate it to the caller
  }
};

export const createAspirant = async (aspirantInfo) => {
  try {
    const response = await handlePost("aspirant/create", aspirantInfo);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to create aspirant");
    }
  } catch (error) {
    console.error("Error creating aspirant:", error);
    throw error; // Re-throw error to propagate it to the caller
  }
};
