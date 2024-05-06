import EmployerModel from "../model/employerModel.js";

export const getEmployers = async (req, res) => {
  try {
    const employers = await EmployerModel.find();
    res.status(200).json(employers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createEmployer = async (req, res) => {
  const {
    organizationId,
    firstName,
    lastName,
    email,
    userName,
    password,
    role,
  } = req.body;
  const log = new EmployerModel({
    organizationId,
    firstName,
    lastName,
    email,
    userName,
    password,
    role,
  });
  try {
    const savedLog = await log.save();
    console.log(savedLog);
    res.status(201).json(savedLog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getEmployerById = async (req, res) => {
  const { id } = req.params;
  console.log("getEmployerById", { req });
  try {
    const employer = await EmployerModel.find({ email: id });
    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }
    res.status(200).json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
