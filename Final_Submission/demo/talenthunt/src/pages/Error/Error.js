import React, { useState, useEffect } from "react";
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
  catImage: {
    width: "100%",
    maxWidth: 400,
    height: "auto",
    borderRadius: 8,
    marginTop: theme.spacing(2),
  },
}));

const Error = () => {
  const classes = useStyles();
  const [catImageUrl, setCatImageUrl] = useState(null);

  useEffect(() => {
    fetchCatMeme();
  }, []);

  const fetchCatMeme = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      if (data && data.length > 0) {
        setCatImageUrl(data[0].url);
      }
    } catch (error) {
      console.error("Error fetching cat meme:", error);
    }
  };

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
        {catImageUrl && (
          <img src={catImageUrl} alt="Funny Cat" className={classes.catImage} />
        )}
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
