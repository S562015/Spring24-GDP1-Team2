import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { InputField } from "../../components/textField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const EmployerFrom = ({ signupWithUsernameAndPassword }) => {
  const [employerInfo, setEmployerInfo] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.keys());
    // console.log("gg", data.forEach("em));
    // data.forEach((val) => console.log(val));
    let empInfo = {
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword")
    };
    setEmployerInfo(empInfo);
    // await signupWithUsernameAndPassword(empInfo);
  };

  //   const isDisabled = () => {
  //     const
  //   }

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputField
              margin="normal"
              required
              fullWidth
              id="first"
              label="First Name"
              name="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              margin="normal"
              required
              fullWidth
              id="last-name"
              label="Last Name"
              name="Last Name"
            />
          </Grid>
          <InputField
            margin="normal"
            required
            fullWidth
            id="orgisation-name"
            label="Orgisation Name"
            name="Orgisation Name"
          />
          <InputField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
          />
          <InputField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            type={"email"}
          />
          <InputField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type={"password"}
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
          />
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
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
