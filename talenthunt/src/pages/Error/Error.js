import React from "react";
import {
  Button,
  Container,
  Typography,
  CssBaseline,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const useStyles = styled((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(8),
    marginTop: theme.spacing(8),
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

const Error = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h3" color="primary" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Something went wrong, but don't worry, our developers are on it!
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          In the meantime, enjoy this cat meme:
        </Typography>
        <img src="https://placekitten.com/400/300" alt="Funny Cat" />
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Take Me Home
        </Button>
      </Paper>
    </Container>
  );
};

export default Error;
