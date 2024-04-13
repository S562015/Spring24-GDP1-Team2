import JobModel from "../model/jobModel.js";
import ApplicationModel from "../model/applicationModel.js";

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
    salary: req.body.salary,
    location: req.body.salary,
    jobType: req.body.jobType,
  });
  try {
    const savedLog = await log.save();
    res.json(savedLog);
  } catch (err) {
    res.json({ message: err });
  }
};

export const getJobId = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await JobModel.findById(id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
