import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import { InputField } from "../../components/textField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getAspirant } from "../signup/signupActions";
import { convertToAspirantSchema, flattenAspirantData } from "../../utils";

const CenteredBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledPaper = styled(Paper)({
  padding: "30px",
  maxWidth: "800px",
  width: "100%",
});

const FileInputContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  margin: "20px 0",
});

const Profile = () => {
  console.log(auth.currentUser);
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    qualification: "",
    organizationName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    schoolName: "",
    degree: "",
    major: "",
    grade: "",
    from: "",
    to: "",
    skill: "",
    skillLevel: "",
    expectedSalaryMinimum: "",
    expectedSalaryMaximum: "",
    preferredOrganizations: "",
  });

  const { aspirantInfo } = useSelector((state) => state.signupReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (aspirantInfo?.length === 0) {
      dispatch(getAspirant(auth.currentUser.email));
    } else if (aspirantInfo[0]["dateOfBirth"]) {
      let data = flattenAspirantData(aspirantInfo[0]);
      setFormData(data);
    }
  }, [aspirantInfo]);
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const submitImage = async (e) => {
    const formData = new FormData();
    formData.append("aspirantId", aspirantInfo[0]["_id"]);
    formData.append("file", file);

    try {
      const result = await axios.post(
        "http://localhost:8000/aspirant/upload-files",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      console.log(result);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async () => {
    let body = convertToAspirantSchema(formData);
    body.email = aspirantInfo[0]["email"];
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/aspirant/update-profile",
        body,
      );
      console.log("Profile updated successfully:", response.data);
      dispatch(getAspirant(aspirantInfo[0]["email"]));
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <CenteredBox>
      <StyledPaper elevation={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Profile Page
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          {auth.currentUser.email}
        </Typography>
        <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <BasicDatePicker
                label="Date of Birth"
                value={formData.dateOfBirth}
                onChange={(e) => handleChange("dateOfBirth", e)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="qualification"
                label="Qualification"
                name="qualification"
                value={formData.qualification}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="organization-name"
                label="Organization Name"
                name="organizationName"
                value={formData.organizationName}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="address-line1"
                label="Address Line 1"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="address-line2"
                label="Address Line 2"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                value={formData.city}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="state"
                label="State"
                name="state"
                value={formData.state}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="zipCode"
                label="Zip Code"
                name="zip"
                type="number"
                value={formData.zip}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                type="phone"
                value={formData.phone}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="schoolName"
                label="School Name"
                name="schoolName"
                value={formData.schoolName}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="degree"
                label="Degree"
                name="degree"
                value={formData.degree}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="major"
                label="Major"
                name="major"
                value={formData.major}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="grade"
                label="Grade"
                name="grade"
                value={formData.grade}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <BasicDatePicker
                label="From"
                format="MMM-YYYY"
                value={formData.from}
                onChange={(e) => handleChange("from", e)}
              />
              <BasicDatePicker
                label="To"
                format="MMM-YYYY"
                value={formData.to}
                onChange={(e) => handleChange("to", e)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="skill"
                label="Skill"
                name="skill"
                value={formData.skill}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="skill-level"
                label="Skill Level"
                name="skillLevel"
                value={formData.skillLevel}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="expectedSalary-minimum"
                label="Expected Minimum Salary"
                name="expectedSalaryMinimum"
                value={formData.expectedSalaryMinimum}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="expectedSalary-maximum"
                label="Expected Maximum Salary"
                name="expectedSalaryMaximum"
                value={formData.expectedSalaryMaximum}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <InputField
                margin="normal"
                required
                fullWidth
                id="preferredOrganizations"
                label="Preferred Organizations"
                name="preferredOrganizations"
                value={formData.preferredOrganizations}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <FileInputContainer>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<AttachFileIcon />}
                >
                  Choose File
                  <input
                    type="file"
                    accept="application/pdf"
                    hidden
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </Button>
                {file && (
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    {file.name}
                  </Typography>
                )}
              </FileInputContainer>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={submitImage}
                  sx={{ mr: 2 }}
                  disabled={file.length === 0}
                >
                  Upload Resume
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleSubmit}
                >
                  Update Profile
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </StyledPaper>
    </CenteredBox>
  );
};

export default Profile;
