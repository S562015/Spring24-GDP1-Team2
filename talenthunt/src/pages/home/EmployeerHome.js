import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEmployer } from "../signup/signupActions";
import { auth } from "../../firebase";
import { selectedJobID } from "../../redux/actions";

function EmployerHomePage() {
  const [jobsPosted, setJobsPosted] = useState([]);
  const navigate = useNavigate();
  const { employerInfo } = useSelector((state) => state.signupReducer);
  const { jobList } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  console.log(employerInfo, jobList);
  useEffect(() => {
    if (employerInfo?.length === 0) {
      dispatch(getEmployer(auth.currentUser.email));
    }
  }, [employerInfo]);

  useEffect(() => {
    if (jobList?.length && employerInfo) {
      let jobs = jobList.filter(
        (val) => val["employerId"] === employerInfo[0]["_id"]
      );
      console.log("useEffect", jobs);
      setJobsPosted(jobs);
    }
  }, [employerInfo, jobList]);

  const renderJobPosted = () => {
    return jobsPosted?.map((val, idx) => (
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="div">
              {val.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {val.jobDescription}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="medium"
              startIcon={<HowToRegIcon />}
              id={`open-button-${idx}`}
              onClick={() => {
                dispatch(selectedJobID(val["_id"]));
                navigate("/joblist", { replace: true });
              }}
            >
              open
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{ bgcolor: "primary.main", color: "primary.contrastText", py: 6 }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            {employerInfo?.length
              ? `Welcome ${employerInfo[0].firstName} to TalentHunt`
              : `Welcome  to TalentHunt`}
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            Find the perfect candidates for your company
          </Typography>
        </Container>
      </Box>

      {/* Featured Listings Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Your Job Listings
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {renderJobPosted()}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{ bgcolor: "primary.main", color: "primary.contrastText", py: 6 }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Ready to Post an new Job?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              id="Started"
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate("/jobpost", { replace: true })}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box sx={{ bgcolor: "background.paper", py: 3 }}>
        <Container maxWidth="md">
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} YourJobSite. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

export default EmployerHomePage;
