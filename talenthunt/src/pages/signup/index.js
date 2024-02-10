import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { InputField } from "../../components/textField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
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

const SignUp = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
          {/* {renderAspirantForm()} */}
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          {/* {renderEmployerForm()} */}
        </TabPanel>
      </Box>
    </Container>
  );
};

export default SignUp;
