import JobModel from "../model/jobModel.js";
import ApplicationModel from "../model/applicationModel.js";
import AspirantModel from "../model/aspirantModel.js";

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
    res.status(201).json(savedLog);
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

export const getJobByIds = async (req, res) => {
  const { emails } = req.query; // Retrieve the array of email IDs from query parameters
  const idsArray = Array.isArray(emails) ? emails : [emails]; // Ensure that idsArray is always an array
  console.log(idsArray);
  try {
    const applications = await JobModel.find({ _id: { $in: idsArray } });
    if (!applications || applications.length === 0) {
      return res.status(404).json({ message: "Jobs not found" });
    }
    res.status(200).json(applications);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch aspirants", error: error.message });
  }
};
