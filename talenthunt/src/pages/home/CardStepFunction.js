import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  IN_PROGRESS,
  SCHEDULED_FOR_INTERVIEW,
  SELECTED,
  SHORTLISTED,
} from "../../utils";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[2],
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
}));

const StyledStepper = styled(Stepper)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const CustomCard = ({ job }) => {
  const steps = [
    "To Be Reviewed",
    "In Progress",
    "Shortlisted",
    "Selected",
    "Scheduled for Interview",
  ];
  const activeStep =
    job.status === SCHEDULED_FOR_INTERVIEW
      ? 4
      : job.status === SELECTED
      ? 3
      : job.status === SHORTLISTED
      ? 2
      : job.status === IN_PROGRESS
      ? 1
      : 0;
  console.log({ job });
  return (
    <Grid item xs={12} sm={6} md={6}>
      <StyledCard>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {job.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {job.company}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {job.location}
          </Typography>
          <StyledStepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </StyledStepper>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

export default CustomCard;
