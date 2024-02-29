const initialState = {};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getJobs = () => {
  let data;
  try {
    handleGet("jobs").then((val) => (data = val));
    return data;
  } catch (e) {
    console.log(e);
  }
};
export default homeReducer;
