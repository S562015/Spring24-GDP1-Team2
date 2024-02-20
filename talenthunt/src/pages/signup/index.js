import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
import { InputField } from "../../components/textField";
import Button from "@mui/material/Button";
import EmployerFrom from "./EmployerFrom";
import AspirantFrom from "./AspirantFrom";

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
      confirmPassword: data.get("confirmPassword"),
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
          password,
        );
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Passwords don't match. Please try again.");
    }
  };

  return (
    <Container component={"main"} maxWidth={"md"}>
      <CssBaseline />
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          {<AspirantFrom />}
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
