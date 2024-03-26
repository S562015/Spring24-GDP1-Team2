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
    const isValidPassword = password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;

    setIsValid(isValidPassword);

    if (!isValidPassword) {
      setErrorMessage('Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters.');
    } else {
      setErrorMessage('');
    }
  }

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
