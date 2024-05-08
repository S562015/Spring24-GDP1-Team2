import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../home/homeActions";
import { auth } from "../../firebase";
import signupReducer from "../signup/signupReducer";
import { getEmployer } from "../signup/signupActions";
import { useNavigate } from "react-router-dom";

const JobPostingPage = () => {
  const [title, setTitle] = useState("");
  const [qualificationRequired, setQualificationRequired] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { employerInfo } = useSelector((state) => state.signupReducer);

  console.log(employerInfo[0]?.lastName);
  useEffect(() => {
    if (employerInfo?.length === 0) {
      dispatch(getEmployer(auth.currentUser.email));
    }
  }, [employerInfo]);

  const handleSubmit = () => {
    if (!title || !qualificationRequired || !jobDescription) {
      setError("All fields are required");
      return;
    }
    console.log(employerInfo["lastName"]);
    let jobPostPayload = {
      employerId: employerInfo[0]["_id"],
      title,
      qualificationRequired,
      jobDescription,
      salary,
      jobType,
      location,
      companyName: employerInfo[0].organizationId,
      employerName: `${employerInfo[0].firstName} ${employerInfo[0].lastName}`,
    };
    console.log({ jobPostPayload });
    dispatch(
      createJob(jobPostPayload, () => navigate("/home", { replace: true })),
    );
  };

  return (
    <Box sx={{ width: 500, maxWidth: "100%", mx: "auto" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Post a Job
      </Typography>

      <TextField
        fullWidth
        label="Job Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Qualification Required"
        variant="outlined"
        value={qualificationRequired}
        onChange={(e) => setQualificationRequired(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Job Description"
        variant="outlined"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        multiline
        rows={4}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Salary"
        variant="outlined"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Job Type</InputLabel>
        <Select
          value={jobType}
          label="Job Type"
          onChange={(e) => setJobType(e.target.value)}
        >
          <MenuItem value="full-time">Full-time</MenuItem>
          <MenuItem value="part-time">Part-time</MenuItem>
          <MenuItem value="contract">Contract</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Location"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        margin="normal"
      />

      {error && <Typography color="error">{error}</Typography>}

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Post Job
      </Button>
    </Box>
  );
};

export default JobPostingPage;
