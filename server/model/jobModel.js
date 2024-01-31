import mongoose from "mongoose";
const { Schema } = mongoose;

const jobSchema = new Schema({
  employerId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  qualificationRequired:{
    type: String,
    required: true,
  },
  jobDescription:{
    type: String,
    required: true,
  }
});

const jobModel = mongoose.model("job", jobSchema);

export default jobModel;
