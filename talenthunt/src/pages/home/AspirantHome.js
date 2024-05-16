import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import signupReducer from "../signup/signupReducer";
import { getAspirant } from "../signup/signupActions";
import CardStepFunction from "./CardStepFunction";
import { getAllJobs, getApplications } from "./homeActions";

const useStyles = styled((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  card: {
    marginTop: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

const AspirantHome = () => {
  const [recentlyAppliedApplication, setRecentlyAppliedApplication] = useState(
    [],
  );
  const { aspirantInfo } = useSelector((state) => state.signupReducer);
  const { applicationList } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    // if (!applicationList) {
    dispatch(getApplications());
    // }
  }, []);

  useEffect(() => {
    if (aspirantInfo?.length === 0) {
      dispatch(getAspirant(auth.currentUser.email));
    }
  }, [aspirantInfo]);

  useEffect(() => {
    if (applicationList?.length && aspirantInfo?.length) {
      let newJobData = [];
      const applications = applicationList.filter(
        (list) => list.aspirantId === aspirantInfo[0]["_id"],
      );
      console.log({ applications });
      const jobIds = applications.map((val) => val["jobId"]);
      console.log(jobIds);
      if (jobIds.length) {
        dispatch(
          getAllJobs(jobIds, (res) => {
            console.log({ res, applications });
            applications.forEach((application) =>
              res.forEach((val) => {
                if (val["_id"] === application.jobId)
                  newJobData.push({ ...val, status: application.status });
              }),
            );
            console.log(newJobData);
            setRecentlyAppliedApplication(newJobData);
          }),
        );
      }
    }
  }, [applicationList, aspirantInfo]);

  return (
    <div className={classes.root}>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Welcome to Talent Hunt
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Connecting talented individuals with exciting job opportunities.
          </Typography>

          {/* Recently Applied Jobs */}
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Recently Applied Jobs
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {recentlyAppliedApplication?.map((job) => (
              <CardStepFunction job={job} />
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default AspirantHome;
