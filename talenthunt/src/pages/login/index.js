import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { InputField } from "../../components/textField";
import background from "../../assets/login.png";
import { Tab, Tabs } from "@mui/material";
import { a11yProps, cloneObject, handlePost } from "../../utils";
import { TabPanel } from "../../components/tabPanel/TabPanel";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import { Link, useNavigate } from "react-router-dom";
import userLogin from "../../auth/userLogin";
import { handleLoginTabIndex, login } from "../../redux/actions";
import error from "../Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { ASPIRANT, EMPLOYER } from "../../redux/actionType";
import { getAspirant, getEmployer } from "../signup/signupActions";
const Login = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { UserType } = useSelector((state) => state.helperReducer);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    let user = newValue === 0 ? ASPIRANT : EMPLOYER;
    dispatch(handleLoginTabIndex(user));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      login(email, password, () => {
        if (UserType === ASPIRANT) {
          dispatch(getAspirant(email));
        } else {
          dispatch(getEmployer(email));
        }
        navigate("/home", { replace: true });
      })
    );
  };

  const renderInputFields = () => {
    return (
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <InputField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          id="login"
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/forgetpassword">Forgot password?</Link>
          </Grid>
          <Grid item xs>
            <Link to="/signup">Create an account ? Sign Up</Link>
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
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
