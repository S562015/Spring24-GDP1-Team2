import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { InputField } from "../../components/textField";

const JobPostingPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [qualificationRequired, setQualificationRequired] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Form validation
    if (!title || !description || !qualificationRequired) {
      setError("All fields are required");
      return;
    }

    // TODO: Post the job to your backend
    // Example using Fetch API:
    fetch("your-backend-url", {
      method: "POST",
      body: JSON.stringify({ title, description, qualificationRequired }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to post job");
        }
        // Handle success
        console.log("Job posted successfully!");
      })
      .catch((error) => {
        setError("Failed to post job");
        console.error("Error posting job:", error);
      });
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
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <InputField
        margin="normal"
        required
        fullWidth
        label="Qualification Required"
        value={qualificationRequired}
        onChange={(e) => setQualificationRequired(e.target.value)}
      />

      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Post Job
      </Button>
    </div>
  );
};

export default JobPostingPage;
