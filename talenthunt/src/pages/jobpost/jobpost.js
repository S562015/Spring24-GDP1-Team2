import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";

const JobPostingPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    // TODO: Post the job to your backend
  };

  return (
    <div>
      <Typography variant="h4">Post a Job</Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Post Job
      </Button>
    </div>
  );
};

export default JobPostingPage;
