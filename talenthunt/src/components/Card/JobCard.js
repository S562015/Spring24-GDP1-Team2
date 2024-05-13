import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { getImageName } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { createApplication } from "../../pages/home/homeActions";

const JobCard = ({ job, index }) => {
  const dispatch = useDispatch();
  const { aspirantInfo } = useSelector((state) => state.signupReducer);

  console.log({ job, aspirantInfo });

  const handleJobApplication = () => {
    let createApplicationPayload = {
      aspirantId: aspirantInfo[0]["_id"],
      jobId: job["_id"],
      status: "TO_BE_REVIEWED",
      applicationDate: new Date().toJSON(),
    };
    console.log({ createApplicationPayload });
    dispatch(createApplication(createApplicationPayload));
  };

  return (
    <div key={index} className="m-16">
      <Card className="job-cards">
        <CardMedia
          component="img"
          alt={getImageName[job.companyImage]}
          image={getImageName[job.companyImage]}
        />
        <CardContent>
          <Typography variant="h5" className="jobtitle">
            {job.companyName}
          </Typography>
          <Typography variant="body1" className="jobsalary my-3">
            {job.title}
          </Typography>
          <Typography variant="body1" className="jobsalary my-3">
            {job.salary}
          </Typography>
          <Typography variant="h6" className="fs-16 fw-600">
            {job.jobRole}
          </Typography>
          <Typography variant="subtitle1" className="fs-14 c-gray fw-600">
            {job.location}
          </Typography>
          <Typography variant="subtitle1" className="fs-14 c-gray fw-600">
            {job.jobType}
          </Typography>
          <Typography variant="body2" className="fs-14">
            {job.jobDescription}
          </Typography>

          <div className="text-center App">
            <Button
              variant="contained"
              className="button-apply"
              onClick={handleJobApplication}
            >
              Apply
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobCard;
