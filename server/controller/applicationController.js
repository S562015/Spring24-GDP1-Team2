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
    status: req.body.status
  });
  try {
    const savedLog = await log.save();
    res.json(savedLog);
  } catch (err) {
    res.json({ message: err });
  }
};
