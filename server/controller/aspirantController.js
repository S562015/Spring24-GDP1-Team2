import AspirantModel from "../model/aspirantModel.js";

export const getAspirants = async (req, res) => {
  try {
    const organizations = await AspirantModel.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
