import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Change flex direction
    alignItems: "flex-start", // Align items to start
    padding: theme.spacing(2), // Add padding
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add boxShadow
    borderRadius: 8, // Add borderRadius
  },
  title: {
    fontSize: 24, // Change font size
    fontWeight: "bold", // Change font weight
    marginBottom: theme.spacing(1),
  },
  description: {
    fontSize: 16, // Change font size
    flexGrow: 1,
  },
}));

const JobDescription = ({ title, description }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const JobPortal = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <JobDescription
          title="Software Engineer"
          description="We are looking for a talented software engineer to join our team..."
        />
        <JobDescription
          title="Data Scientist"
          description="Join our team of data scientists to work on cutting-edge projects..."
        />
        {/* Add more JobDescription
         components as needed */}
      </Grid>
    </div>
  );
};

const JobPortal_adv = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <JobDescription
          title="Data Engineer"
          description="We are looking for an Experienced Data engineer with Experience in Spark and BigData to join our team..."
        />
        <JobDescription
          title="Data Analyst"
          description="Join our team of data Analysts to work on cutting-edge projects..."
        />
        <JobDescription
          title="Data Scientist"
          description="We are looking for an Experienced Data scientist for our development team"
        />
      </Grid>
    </div>
  );
};

export default JobPortal;
