import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { InputField } from "../../components/textField";
import Button from "@mui/material/Button";
// import Link from "@mui/material/Link";
import * as React from "react";
import background from "../../assets/login.png";
import { Tab, Tabs } from "@mui/material";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { a11yProps } from "../../utils";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import { TabPanel } from "../../components/tabPanel/TabPanel";
import { useState } from "react";
import { Container } from "@mui/system";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import EmployerFrom from "./EmployerFrom";

const SignUp = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [employerInfo, setEmployerInfo] = useState({});

  const handleTabChange = async (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let empInfo = {
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword")
    };
    setEmployerInfo(empInfo);
    await signupWithUsernameAndPassword(empInfo);
  };

  const signupWithUsernameAndPassword = async (empInfo) => {
    const { password, confirmPassword, email } = empInfo;
    console.log({ password, confirmPassword, email });
    if (password === confirmPassword) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // alert("complete");
        console.log(user);
      } catch (error) {
        // alert("Sorry, something went wrong. Please try again.");c
        console.log(error);
      }
    } else {
      alert("Passwords don't match. Please try again.");
    }
  };

  const renderAspirantForm = () => (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
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
        <BasicDatePicker label="Date of Birth" />
        <InputField
          margin="normal"
          required
          fullWidth
          id="qualification"
          label="qualification"
          name="qualification"
        />
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
          id="address-line1"
          label="Address line 1"
          name="Address line 1"
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="address-line1"
          label="Address line 2"
          name="Address line 2"
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="city"
          label="City"
          name="City"
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="zipCode"
          label="zipCode"
          name="ZipCode"
          type={"number"}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Phone Number"
          name="Phone"
          type={"phone"}
        />
      </Grid>
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} disabled>
        Register
      </Button>
      <Grid container>
        <Grid item xs>
          <Link to="/login">Already have an account? SignIn</Link>
        </Grid>
      </Grid>
    </Box>
  );

  // const renderEmployerForm = () => (
  //    );

  return (
    <Container component={"main"} maxWidth={"md"}>
      <CssBaseline />
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Typography>Start & track your Scheduling Process</Typography>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="secondary"
        >
          <Tab
            icon={<AssignmentIndOutlinedIcon />}
            iconPosition="start"
            label="Aspriant"
            {...a11yProps(0)}
          />
          <Tab
            icon={<BusinessOutlinedIcon />}
            iconPosition="start"
            label="Employeer"
            {...a11yProps(2)}
          />
        </Tabs>
        <TabPanel value={tabIndex} index={0}>
          {renderAspirantForm()}
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          {
            <EmployerFrom
              signupWithUsernameAndPassword={signupWithUsernameAndPassword}
            />
          }
        </TabPanel>
      </Box>
    </Container>
  );
};

export default SignUp;
