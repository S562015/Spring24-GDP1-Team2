import React from "react";
import { auth } from "../../firebase";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import { InputField } from "../../components/textField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Profile = () => {
  console.log(auth.currentUser);
  const handleChange = async () => {};
  return (
    <>
      <h1> ProfilePage {auth.currentUser.email} </h1>
      <Box component="form" noValidate sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <BasicDatePicker
              label="Date of Birth"
              onChange={(e) => handleChange("dateOfBirth", "14/19")}
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
              onChange={(e) => handleChange("from", e)}
            />
            <BasicDatePicker
              label="To"
              format="MMM-YYYY"
              onChange={(e) => handleChange("to", e)}
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
        </Grid>
      </Box>
    </>
  );
};
export default Profile;
