import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

import { useDispatch, useSelector } from "react-redux";
import { createApplication } from "../../pages/home/homeActions";
import { TO_BE_REVIEWED } from "../../utils";

const JobCard = ({ job, index }) => {
  const [cardHeight, setCardHeight] = useState("auto");
  const dispatch = useDispatch();
  const { aspirantInfo } = useSelector((state) => state.signupReducer);
  useEffect(() => {
    // Dynamically calculate the height of the card based on the content
    const contentHeight = document.getElementById(
      `card-content-${index}`
    )?.offsetHeight;
    const cardHeight = Math.max(contentHeight, 100); // Minimum height
    setCardHeight(cardHeight + "px");
  }, [job, index]);

  const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[2],
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: theme.shadows[6],
    },
    width: "300px", // Fixed width
    height: cardHeight, // Dynamic height
    overflow: "hidden", // Hide overflow content
    marginBottom: theme.spacing(2), // Add space between cards
  }));

  console.log({ job, aspirantInfo });

  const handleJobApplication = () => {
    let createApplicationPayload = {
      aspirantId: aspirantInfo[0]["_id"],
      jobId: job["_id"],
      status: TO_BE_REVIEWED,
      applicationDate: new Date().toJSON(),
    };
    console.log({ createApplicationPayload });
    dispatch(createApplication(createApplicationPayload));
  };

  return (
    <StyledCard>
      <CardContent id={`card-content-${index}`}>
        <Typography variant="h6" gutterBottom>
          {job.companyName}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {job.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Salary: {job.salary}
        </Typography>
        <Typography variant="subtitle1" className="fw-600">
          Role: {job.jobRole}
        </Typography>
        <Typography variant="subtitle1" className="fw-600">
          Location: {job.location}
        </Typography>
        <Typography variant="subtitle1" className="fw-600">
          Type: {job.jobType}
        </Typography>
        <Box sx={{ maxHeight: "100px", overflowY: "auto" }}>
          <Typography variant="body2">{job.jobDescription}</Typography>
        </Box>
        <div className="text-center">
          <Button
            id="Apply"
            variant="contained"
            color="primary"
            onClick={handleJobApplication}
          >
            Apply
          </Button>
        </div>
      </CardContent>
    </StyledCard>
  );
};

export default JobCard;
