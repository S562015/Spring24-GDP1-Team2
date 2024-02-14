import mongoose from "mongoose";
const { Schema } = mongoose;

const aspirantSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  qualification: {
    type: Date,
    required: true
  },
  address: {
    line1: {
      type: String,
      required: true
    },
    line2: {
      type: String
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      Required: true
    },
    zip: {
      type: String
    }
  },
  education: [
    {
      schoolName: {
        type: String
      },
      degree: {
        type: String
      },
      major: {
        type: String
      },
      grade: {
        type: Number
      },
      from: {
        type: Date,
        format: "MMM-yyyy"
      },
      to: {
        type: Date,
        format: "MMM-yyyy"
      }
    }
  ],
  skills: [
    {
      skill: {
        type: String
      },
      level: {
        type: String,
        enum: ["Expert", "Moderate", "Basic"]
      }
    }
  ],
  email: {
    type: String
  },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`
    },
    required: [true, "User phone number required"]
  },
  applicationDate: {
    type: Date,
    default: Date.now
  },
  expectedSalary: {
    minimum: {
      type: Number
    },
    maximum: {
      typr: Number
    }
  },
  preferedOrganizations: [
    {
      type: String
    }
  ]
});

const AspirantModel = mongoose.model("aspirant", aspirantSchema);

export default AspirantModel;
