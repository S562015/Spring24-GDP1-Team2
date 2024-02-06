import EmployerModel from "../model/employerModel.js";

export const getEmployers = async (req, res) => {
  try {
    const employers = await EmployerModel.find();
    res.status(200).json(employers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createEmployer = async (req, res) => {
  const log = new employerModel({
    organizationId: req.body.organizationId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password,
    role: req.body.lastName,
  });
  try {
    const savedLog = await log.save();
    res.json(savedLog);
  } catch (err) {
    res.json({ message: err });
  }
};
