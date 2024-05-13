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
  const steps = ["To Be Reviewed", "In Progress", "Shortlisted", "Selected"];
  const activeStep =
    job.status === "selected"
      ? 3
      : job.status === "shortlisted"
      ? 2
      : job.status === "inProgress"
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
