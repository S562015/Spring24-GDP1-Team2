import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { InputField } from "../../components/textField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import { createAspirant } from "./signupActions";
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/actions";

const AspirantForm = ({ signupWithUsernameAndPassword }) => {
  const [aspirantInfo, setAspirantInfo] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [strength, setStrength] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const calculateStrength = (password) => {
    const strength = Math.min(password.length / 10, 1) * 100;
    setStrength(strength);
  };

  const handleChange = (key, value) => {
    let newValue = aspirantInfo;
    if (key === "password") {
      validatePassword(value);
      calculateStrength(value);
      setIsTyping(true);
    }
    newValue[key] = key === "email" ? value.toLowerCase() : value;
    setAspirantInfo(newValue);
  };

  const handleSubmit = async () => {
    dispatch(createAspirant(aspirantInfo));
    console.log({ aspirantInfo });
    const { email, password, username } = aspirantInfo;

    console.log({ aspirantInfo });
    // console.log(res);
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
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()-_=+{};:,<.>?~]/.test(password);

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
        <Typography variant="body2" color="primary">
          <SentimentSatisfiedAlt fontSize="small" /> Strong
        </Typography>
      );
    } else {
      return (
        <Typography variant="body2" color="primary">
          <SentimentVerySatisfied fontSize="small" /> Very Strong
        </Typography>
      );
    }
  };

  return (
    <Box component="form" noValidate sx={{ mt: 2 }}>
      <Grid container spacing={2}>
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
        <InputField
          margin="normal"
          required
          fullWidth
          id="last-name"
          label="Last Name"
          name="lastName"
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
          error={!isValid && aspirantInfo?.password?.length > 0}
          helperText={
            !isValid && aspirantInfo?.password?.length > 0 && errorMessage
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
      </Grid>
      <Button
        id="AspirantRegister"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
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
  );
};

export default AspirantForm;
