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
    line1:{
      type: String,
      required: true,
    },
    line2:{
      type: String,
    },
    city:{
      type: String,
      required: true,
    },
    state:{
      type: String,
      Required: true,
    },
    zip:{
      type: String,
    }
  }
});

const AspirantModel = mongoose.model("aspirant", aspirantSchema);

export default AspirantModel;