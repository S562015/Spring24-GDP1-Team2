import mongoose from "mongoose";
const { Schema } = mongoose;

const aspirantSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth:{
    type: Date,
    required: true,
  },
  qualification:{
    type: Date,
    required: true,
  },
  address:{
    type: String,
    required: true,
  }
});

const AspirantModel = mongoose.model("aspirant", aspirantSchema);

export default AspirantModel;