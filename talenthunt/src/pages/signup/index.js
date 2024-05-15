import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Tab, Tabs } from "@mui/material";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { a11yProps } from "../../utils";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import { TabPanel } from "../../components/tabPanel/TabPanel";
import { useState } from "react";
import { Container } from "@mui/system";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import EmployerFrom from "./EmployerForm";
import AspirantFrom from "./AspirantForm";
import { handleLoginTabIndex } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { ASPIRANT, EMPLOYER } from "../../redux/actionType";

const SignUp = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    let user = newValue === 0 ? ASPIRANT : EMPLOYER;
    dispatch(handleLoginTabIndex(user));
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
          <AspirantFrom />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          {<EmployerFrom />}
        </TabPanel>
      </Box>
    </Container>
  );
};

export default SignUp;
