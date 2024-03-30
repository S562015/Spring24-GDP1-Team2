import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  description: {
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
        {/* Add more JobDescription components as needed */}
      </Grid>
    </div>
  );
};

export default JobPortal;