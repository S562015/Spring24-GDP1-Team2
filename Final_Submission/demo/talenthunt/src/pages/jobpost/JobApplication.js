import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(2),
    },
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const JobApplication = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    position: "",
    education: "",
    workExperience: "",
    skills: "",
    availability: "",
    references: "",
    additionalInfo: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.fullName || !formData.email) {
      setError("Please fill in all required fields.");
      return;
    }

    // Handle form submission here (e.g., send data to server)
    console.log(formData);

    // Clear form and show success message
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      position: "",
      education: "",
      workExperience: "",
      skills: "",
      availability: "",
      references: "",
      additionalInfo: "",
    });
    setSuccess(true);
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Job Application Form @mui/system
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          {/* Add more form fields as needed */}
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Submit Application
        </Button>
      </form>
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Application submitted successfully!"
      />
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError("")}
        message={error}
      />
    </Container>
  );
};

export default JobApplication;
