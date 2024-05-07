import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  maxWidth: 400,
  margin: "auto",
  marginBottom: (theme) => theme.spacing(2),
});

const StyledButton = styled(Button)({
  marginTop: (theme) => theme.spacing(2),
});

const AspirantCard = ({ aspirant }) => {
  const handleDownloadResume = () => {
    // Implement logic to download the resume
    console.log("Downloading resume...");
  };

  const handleChangeStatus = (event) => {
    // Implement logic to handle status change
    console.log("Status changed to:", event.target.value);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {aspirant.firstName} {aspirant.lastName}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              Date of Birth:{" "}
              {aspirant.dateOfBirth
                ? new Date(aspirant.dateOfBirth).toLocaleDateString()
                : "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              Qualification: {aspirant.qualification || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              Email: {aspirant.email || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              Phone: {aspirant.phone || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledButton variant="outlined" onClick={handleDownloadResume}>
              Download Resume
            </StyledButton>
          </Grid>
          <Grid item xs={12}>
            <Select
              fullWidth
              label="Status"
              value={aspirant.status || ""}
              onChange={handleChangeStatus}
            >
              <MenuItem value="ToBeReviewed">To Be Reviewed</MenuItem>
              <MenuItem value="InProgress">In Progress</MenuItem>
              <MenuItem value="Shortlisted">Shortlisted</MenuItem>
              <MenuItem value="Selected">Selected</MenuItem>
              <MenuItem value="ScheduledForInterview">
                Scheduled for Interview
              </MenuItem>
            </Select>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default AspirantCard;
