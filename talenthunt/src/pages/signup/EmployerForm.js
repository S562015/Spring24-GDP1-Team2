import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { LinearProgress, Typography } from "@mui/material";
import { InputField } from "../../components/textField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { cloneObject, handlePost } from "../../utils";
import { createEmployer } from "./signupActions";
import { useDispatch, useSelector } from "react-redux";
import userSignUp from "../../auth/userSignUp";
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied,
} from "@mui/icons-material";
import useSignUp from "../../auth/userSignUp";
import { signUp } from "../../redux/actions";

const EmployerForm = ({ signupWithUsernameAndPassword }) => {
  const [employerInfo, setEmployerInfo] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const signUp = useSignUp();
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [strength, setStrength] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const authError = useSelector((state) => state.helperReducer.authError);

  const calculateStrength = (password) => {
    const strength = Math.min(password.length / 10, 1) * 100;
    setStrength(strength);
  };

  const handleChange = (key, value) => {
    let newValue = cloneObject(employerInfo);
    if (key === "password") {
      validatePassword(value);
      calculateStrength(value);
      setIsTyping(true);
    }
    newValue[key] = value;
    setEmployerInfo(newValue);
  };

  const handleSubmit = async () => {
    const { email, password, username } = employerInfo;
    dispatch(createEmployer(employerInfo));
    dispatch(
      signUp(email, password, username, () =>
        navigate("/home", { replace: true })
      )
    );
  };
  const handleBlur = () => {
    setIsTyping(false);
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

  const renderStrengthLabel = () => {
    if (strength < 20) {
      return (
        <Typography variant="body2" color="error">
          <SentimentVeryDissatisfied fontSize="small" /> Very Weak
        </Typography>
      );
    } else if (strength < 40) {
      return (
        <Typography variant="body2" color="error">
          <SentimentDissatisfied fontSize="small" /> Weak
        </Typography>
      );
    } else if (strength < 60) {
      return (
        <Typography variant="body2" color="primary">
          <SentimentSatisfied fontSize="small" /> Medium
        </Typography>
      );
    } else if (strength < 80) {
      return (
        <Typography variant="body2" color="#4caf50">
          <SentimentSatisfiedAlt fontSize="small" /> Strong
        </Typography>
      );
    } else {
      return (
        <Typography variant="body2" color="#1b5e20">
          <SentimentVerySatisfied fontSize="small" /> Very Strong
        </Typography>
      );
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
            id="organization-name"
            label="organization Name"
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
            error={!isValid && employerInfo?.password?.length > 0}
            helperText={
              !isValid && employerInfo?.password?.length > 0 && errorMessage
            }
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            onBlur={handleBlur}
          />
          {isTyping && (
            <>
              <Typography variant="caption" gutterBottom>
                Password Strength:
              </Typography>
              {renderStrengthLabel()}
            </>
          )}
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
          id="EmployerRegister"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
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

export default EmployerForm;
