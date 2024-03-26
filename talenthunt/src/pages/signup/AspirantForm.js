import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { InputField } from "../../components/textField";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import { cloneObject, handlePost } from "../../utils";
import { createAspirant } from "./signupActions";

const AspirantFrom = ({ signupWithUsernameAndPassword }) => {
  const [aspirantInfo, setAspirantInfo] = useState({});

  const handleChange = (key, value) => {
    let newValue = cloneObject(aspirantInfo);
    newValue[key] = value;
    setAspirantInfo(newValue);
  };

  const handleSubmit = async () => {
    const res = await createAspirant();
    signupWithUsernameAndPassword();
    console.log(res);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    // Regular expressions for validation
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()-_=+{};:,<.>?~]/.test(password);

    // Check if password meets all criteria
    const isValidPassword =
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar;

    setIsValid(isValidPassword);

    if (!isValidPassword) {
      setErrorMessage(
        "Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters."
      );
    } else {
      setErrorMessage("");
    }
  };

  return (
    <Box component="form" noValidate sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputField
            margin="normal"
            required
            fullWidth
            id="first"
            label="First Name"
            name="firstName"
            autoFocus
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            margin="normal"
            required
            fullWidth
            id="last-name"
            label="Last Name"
            name="lastName"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </Grid>
        <BasicDatePicker
          label="Date of Birth"
          onChange={(e) => handleChange("dateOfBirth", e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="qualification"
          label="qualification"
          name="qualification"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="orgisation-name"
          label="Orgisation Name"
          name="Orgisation Name"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="address-line1"
          label="Address line 1"
          name="line1"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="address-line2"
          label="Address line 2"
          name="line2"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="city"
          label="City"
          name="city"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="state"
          label="State"
          name="state"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="zipCode"
          label="zipCode"
          name="zip"
          type={"number"}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="email"
          label="e-Mail"
          name="email"
          type={"email"}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type={"password"}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          label="Confrim Password"
          name="confirmPassword"
          type={"password"}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Phone Number"
          name="phone"
          type={"phone"}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="schoolName"
          label="School Name"
          name="schoolName"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="degree"
          label="Degree"
          name="degree"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="major"
          label="Major"
          name="major"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="grade"
          label="Grade"
          name="grade"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <BasicDatePicker
          label="From"
          format="MMM-YYYY"
          onChange={(e) => handleChange("from", e.target.value)}
        />
        <BasicDatePicker
          label="To"
          format="MMM-YYYY"
          onChange={(e) => handleChange("to", e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="skill"
          label="Skill"
          name="skill"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="skill-level"
          label="Skill Level"
          name="level"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="expectedSalary-minimum"
          label="Expected Minimum Salary"
          name="minimum"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="expectedSalary-maximum"
          label="Expected Maximum Salary"
          name="maximum"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="preferredOrganizations"
          label="Preferred Organizations"
          name="preferredOrganizations"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </Grid>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit}
        disabled
      >
        Register
      </Button>
      <Grid container>
        <Grid item xs>
          <Link to="/login">Already have an account? SignIn</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AspirantFrom;
