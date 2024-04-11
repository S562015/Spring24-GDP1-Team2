import EmployerModel from "../model/employerModel.js";
import JobModel from "../model/jobModel.js";

export const getEmployers = async (req, res) => {
  try {
    const employers = await EmployerModel.find();
    res.status(200).json(employers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createEmployer = async (req, res) => {
  const log = new EmployerModel({
    organizationId: req.body.organizationId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password,
    role: req.body.role,
  });
  try {
    const savedLog = await log.save();
    console.log(savedLog);
    res.json(savedLog);
  } catch (err) {
    res.json({ message: err });
  }
};

export const getCreateEmployer = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await EmployerModel.findById(id);
    if (!application) {
      return res.status(404).json({ message: "Employer not found" });
    }
    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
