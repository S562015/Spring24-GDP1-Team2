import React from "react";
import { Container, Typography, Button, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  applyButton: {
    marginTop: theme.spacing(2),
  },
}));

const JobDescriptionPage = () => {
  const classes = useStyles();

  return (
    <Container>
      <Paper className={classes.paper}>
        <Typography variant="h4" gutterBottom>
          Senior Software Engineer
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          @muisystem - San Francisco, CA
        </Typography>
        <Typography variant="body1" gutterBottom>
          We are looking for a talented Senior Software Engineer to join our
          team. The ideal candidate should have experience in building scalable
          web applications using modern technologies.
        </Typography>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Responsibilities:
        </Typography>
        <ul>
          <li>
            Develop new features and functionality for our web applications.
          </li>
          <li>
            Collaborate with cross-functional teams to define, design, and ship
            new features.
          </li>
          <li>Write clean, maintainable, and efficient code.</li>
          <li>
            Participate in code reviews and provide constructive feedback to
            other team members.
          </li>
        </ul>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Requirements:
        </Typography>
        <ul>
          <li>Bachelor's degree in Computer Science or related field.</li>
          <li>5+ years of experience in software development.</li>
          <li>Strong proficiency in JavaScript, React, and Node.js.</li>
          <li>
            Experience with relational databases (e.g., MySQL, PostgreSQL).
          </li>
          <li>Excellent communication and teamwork skills.</li>
        </ul>
      </Paper>

      <Grid container justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.applyButton}
        >
          Apply Now @muisystem
        </Button>
      </Grid>
    </Container>
  );
};

export default JobDescriptionPage;
