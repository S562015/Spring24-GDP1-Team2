import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { InputField } from "../../components/textField";
import background from "../../assets/login.png";
import { Tab, Tabs } from "@mui/material";
import { a11yProps } from "../../utils";
import { TabPanel } from "../../components/tabPanel/TabPanel";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

const Login = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  const renderInputFields = () => {
    return (
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <InputField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
        />
        <InputField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item xs>
            <Link href="#" variant="body2">
              Create an account ? Sign Up
            </Link>
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "5319AC",
          backgroundSize: "50%",
          backgroundPosition: "center"
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
            Login
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
            {renderInputFields()}
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            {renderInputFields()}
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Login;
