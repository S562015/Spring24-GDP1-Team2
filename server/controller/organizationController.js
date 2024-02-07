import OrganizationModel from "../model/organizationModel.js";

export const getOrganizations = async (req, res) => {
  try {
    const organizations = await OrganizationModel.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createOrganization = async (req, res) => {
  const log = new OrganizationModel({
    organizationName: req.body.organizationName,
    description: req.body.description,
    location: req.body.location,
  });
  try {
    const savedLog = await log.save();
    res.json(savedLog);
  } catch (err) {
    res.json({ message: err });
  }
};
