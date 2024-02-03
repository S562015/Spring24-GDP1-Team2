import mongoose from "mongoose";
const { Schema } = mongoose;

const organizationSchema = new Schema({
  organization: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const OrganizationModel = mongoose.model("organization", organizationSchema);

export default OrganizationModel;
