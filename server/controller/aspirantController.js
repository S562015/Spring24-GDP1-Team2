import AspirantModel from "../model/aspirantModel.js";
import ApplicationModel from "../model/applicationModel.js";

export const getAspirants = async (req, res) => {
  try {
    const organizations = await AspirantModel.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAspirants = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      qualification,
      address,
      education,
      skills,
      email,
      phone,
      applicationDate,
    } = req.body;

    let aspirant = {
      firstName,
      lastName,
      dateOfBirth,
      qualification,
      email,
      phone,
      address,
      education,
      skills,
      applicationDate,
    };
    const log = new AspirantModel(aspirant);
    const savedLog = await log.save();
    res.json(savedLog);
  } catch (err) {
    res.json({ message: err });
  }
};

export const getAspirantbyId = async (req, res) => {
  const { id } = req.params;

  try {
    const application = await AspirantModel.findById(id);
    if (!application) {
      return res.status(404).json({ message: "Aspirant not found" });
    }
    res.status(200).json(application);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch AspirantModel", error: error.message });
  }
};
