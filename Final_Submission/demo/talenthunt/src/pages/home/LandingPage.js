import React from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";


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

const LandingPage = () => {
  const classes = useStyles();

  // Mock data for recently applied jobs and recommended jobs
  const recentlyAppliedJobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Co",
      location: "Remote",
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Design Studio",
      location: "New York",
    },
  ];

  const recommendedJobs = [
    {
      id: 3,
      title: "Data Scientist",
      company: "Data Corp",
      location: "San Francisco",
    },
    {
      id: 4,
      title: "Marketing Specialist",
      company: "Marketing Agency",
      location: "Los Angeles",
    },
  ];

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
            {recentlyAppliedJobs.map((job) => (
              <Grid item key={job.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {job.title}
                    </Typography>
                    <Typography color="textSecondary">{job.company}</Typography>
                    <Typography color="textSecondary">
                      {job.location}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Recommended Jobs */}
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            className={classes.card}
          >
            Recommended Jobs
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {recommendedJobs.map((job) => (
              <Grid item key={job.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {job.title}
                    </Typography>
                    <Typography color="textSecondary">{job.company}</Typography>
                    <Typography color="textSecondary">
                      {job.location}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
