import ApplicationModel from "../model/applicationModel.js";

export const getApplication = async (req, res) => {
  try {
    const organizations = await ApplicationModel.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createApplication = async (req, res) => {
  const log = new ApplicationModel({
    aspirantId: req.body.aspirantId,
    jobId: req.body.jobId,
    applicationDate: req.body.applicationDate,
    status: req.body.status,
  });
  try {
    const savedLog = await log.save();
    res.json(savedLog);
  } catch (err) {
    res.json({ message: err });
  }
};
export const getApplicationById = async (req, res) => {
  const { id } = req.params; // Assuming ID is passed as a route parameter
  try {
    const application = await ApplicationModel.findById(id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
