import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Job Application Form @muisystem
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
    </Container>
  );
};

export default JobApplication;
