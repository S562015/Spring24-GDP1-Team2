import employerModel from "../model/employerModel.js";

export const getEmployer = async (req, res) => {
  try {
    const organizations = await employerModel.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
