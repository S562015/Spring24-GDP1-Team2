import AspirantModel from "../model/aspirantModel.js";
import ApplicationModel from "../model/applicationModel.js";
import mongoose from "mongoose";
import multer from "multer";

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
    console.log(req.body);
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

export const getAspirantById = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  try {
    const application = await AspirantModel.find({ email: id });
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

// Controller to get multiple aspirants by _id
export const getAspirantsByIds = async (req, res) => {
  const { emails } = req.query; // Retrieve the array of email IDs from query parameters
  const idsArray = Array.isArray(emails) ? emails : [emails]; // Ensure that idsArray is always an array
  console.log(idsArray);
  try {
    const applications = await AspirantModel.find({ _id: { $in: idsArray } });
    if (!applications || applications.length === 0) {
      return res.status(404).json({ message: "Aspirants not found" });
    }
    res.status(200).json(applications);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch aspirants", error: error.message });
  }
};

export const uploadFile = async (req, res) => {
  try {
    // Extract file information
    const { file } = req;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    console.log(file);

    // Extract the necessary identifier from the request to find the document
    const { aspirantId } = req.body; // Assuming aspirantId is passed in the body
    if (!aspirantId) {
      return res.status(400).json({ message: "Aspirant ID is required" });
    }

    // Find the document in the collection
    const aspirant = await AspirantModel.findById(aspirantId);
    if (!aspirant) {
      return res.status(404).json({ message: "Aspirant not found" });
    }

    // Update the document with the file information
    aspirant.pdf = file.filename; // Assuming you want to store the filename in a field called 'pdf'
    const updatedAspirant = await aspirant.save();

    // Respond with the updated document
    res.json({ status: "ok", updatedAspirant });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
