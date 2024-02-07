import JobModel from "../model/jobModel.js";

export const getJobDetails = async (req, res) => {
  try {
    const organizations = await JobModel.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createJobPost = async (req, res) => {
  const log = new JobModel({
    employerId: req.body.employerId,
    title: req.body.title,
    qualificationRequired: req.body.qualificationRequired,
    jobDescription: req.body.jobDescription,
  });
  try {
    const savedLog = await log.save();
    res.json(savedLog);
  } catch (err) {
    res.json({ message: err });
  }
};
