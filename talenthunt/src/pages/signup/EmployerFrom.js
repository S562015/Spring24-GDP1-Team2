import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { InputField } from "../../components/textField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { createFromObj } from "../../utils";

const EmployerFrom = ({ signupWithUsernameAndPassword }) => {
  const [employerInfo, setEmployerInfo] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const empInfo = createFromObj([...data.entries()]);
    setEmployerInfo(empInfo);
    // await signupWithUsernameAndPassword(empInfo);
  };

  return (
    <>
      <Box component="form" sx={{ mt: 2 }}>
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
          <InputField
            margin="normal"
            required
            fullWidth
            id="orgisation-name"
            label="Orgisation Name"
            name="organizationId"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <InputField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <InputField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
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
          />
          <InputField
            margin="normal"
            required
            fullWidth
            id="role"
            label="Role"
            name="role"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </Grid>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={Object.keys(employerInfo).length !== 7}
          onClick={handleSubmit}
        >
          Register
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/login">Already have an account? SignIn</Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EmployerFrom;
