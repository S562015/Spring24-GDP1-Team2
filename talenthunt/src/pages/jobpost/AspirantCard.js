import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  MenuItem,
  Select,
  Grid,
  InputLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  IN_PROGRESS,
  SCHEDULED_FOR_INTERVIEW,
  SELECTED,
  SHORTLISTED,
  TO_BE_REVIEWED,
} from "../../utils";
import { useDispatch } from "react-redux";
import { updateApplication } from "../home/homeActions";

const StyledCard = styled(Card)({
  maxWidth: 400,
  margin: "auto",
  marginBottom: (theme) => theme.spacing(2),
});

const StyledButton = styled(Button)({
  marginTop: (theme) => theme.spacing(2),
});

const AspirantCard = ({ aspirant, applicationList, selectedJobID }) => {
  const [applicationData, setApplicationData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (applicationList) {
      let application = applicationList.filter(
        (val) =>
          val.aspirantId === aspirant["_id"] && val.jobId === selectedJobID,
      );
      setApplicationData(application[0]);
    }
  }, []);

  const handleDownloadResume = () => {
    //TODO :
    // Implement logic to download the resume
    console.log("Downloading resume...");
  };

  const handleChangeStatus = (event) => {
    console.log("Status changed to:", event.target.value);
    setApplicationData({ ...applicationData, status: event.target.value });
  };

  const handleUpdate = () => {
    dispatch(updateApplication(applicationData, (res) => console.log(res)));
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
            <FormControl>
              <InputLabel id="demo-multiple-name-label">Status</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                label="Status"
                value={applicationData.status || ""}
                onChange={handleChangeStatus}
                sx={{ width: "300px" }}
              >
                <MenuItem value={TO_BE_REVIEWED}>To Be Reviewed</MenuItem>
                <MenuItem value={IN_PROGRESS}>In Progress</MenuItem>
                <MenuItem value={SHORTLISTED}>Shortlisted</MenuItem>
                <MenuItem value={SELECTED}>Selected</MenuItem>
                <MenuItem value={SCHEDULED_FOR_INTERVIEW}>
                  Scheduled for Interview
                </MenuItem>
              </Select>

              <Button
                sx={{
                  marginTop: "10px",
                  width: "100px",
                  marginLeft: "100px",
                }}
                variant="contained"
                onClick={handleUpdate}
              >
                Update
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default AspirantCard;
