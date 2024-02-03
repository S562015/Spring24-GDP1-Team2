import ApplicationModel from "../model/aspirantModel.js";

export const getApplication = async (req, res) => {
  try {
    const organizations = await ApplicationModel.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
