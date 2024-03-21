import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { InputField } from "../../components/textField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { cloneObject, handlePost } from "../../utils";
import { createEmployer } from "./signupActions";
import { useDispatch } from "react-redux";
import userSignUp from "../../auth/userSignUp";

const EmployerFrom = ({ signupWithUsernameAndPassword }) => {
  const [employerInfo, setEmployerInfo] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, signUp } = userSignUp();

  const handleChange = (key, value) => {
    let newValue = cloneObject(employerInfo);
    newValue[key] = value;
    setEmployerInfo(newValue);
  };

  const handleSubmit = async () => {
    const { email, password, username } = employerInfo;
    await signUp(email, password, username);
    console.log({ error });
    if (!error) {
      dispatch(createEmployer);
      navigate("/home", { replace: true });
    }
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
            onChange={(e) => handleChange(e.target.name, e.target.value)}
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
          disabled={Object.keys(employerInfo).length !== 8}
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
