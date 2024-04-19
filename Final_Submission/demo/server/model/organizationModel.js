import mongoose from "mongoose";
const { Schema } = mongoose;

const organizationSchema = new Schema({
  organizationName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description:{
    type: String,
  }
});

const OrganizationModel = mongoose.model("organization", organizationSchema);

export default OrganizationModel;
