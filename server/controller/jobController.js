import JobModel from "../model/jobModel.js";

export const getJobDetails = async (req, res) => {
  try {
    const organizations = await JobModel.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
