import mongoose from "mongoose";
const { Schema } = mongoose;

const applicationSchema = new Schema({
  aspirantId: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  applicationDate:{
    type: Date,
    required: true,
  },
  status:{
    type: String,
  }
});

const ApplicationModel = mongoose.model("application", applicationSchema);

export default ApplicationModel;