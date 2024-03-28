import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { InputField } from "../../components/textField";

const JobPostingPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [qualificationRequired, setQualificationRequired] = useState("");
  const handleSubmit = () => {
    // TODO: Post the job to your backend
  };

  return (
    <div>
      <Typography variant="h4">Post a Job</Typography>
      <InputField
        margin="normal"
        required
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputField
        margin="normal"
        required
        fullWidth
        label="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <InputField
        margin="normal"
        required
        fullWidth
        label={"qualificationRequired"}
        value={qualificationRequired}
        onChange={(e) => setQualificationRequired(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Post Job
      </Button>
    </div>
  );
};

export default JobPostingPage;
