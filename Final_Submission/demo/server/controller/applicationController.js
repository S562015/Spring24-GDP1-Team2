import ApplicationModel from "../model/applicationModel.js";

// Get all applications
export const getApplications = async (req, res) => {
  try {
    const applications = await ApplicationModel.find();
    res.status(200).json(applications);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch applications", error: error.message });
  }
};

// Create a new application
export const createApplication = async (req, res) => {
  // Validate request body
  if (
    !req.body.aspirantId ||
    !req.body.jobId ||
    !req.body.applicationDate ||
    !req.body.status
  ) {
    return res.status(400).json({ message: "Incomplete application data" });
  }

  const { aspirantId, jobId, applicationDate, status } = req.body;

  try {
    const newApplication = new ApplicationModel({
      aspirantId,
      jobId,
      applicationDate,
      status,
    });

    const savedApplication = await newApplication.save();
    res.status(201).json(savedApplication);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create application", error: error.message });
  }
};

// Get an application by ID
export const getApplicationById = async (req, res) => {
  const { id } = req.params;

  try {
    const application = await ApplicationModel.findById(id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json(application);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch application", error: error.message });
  }
};
