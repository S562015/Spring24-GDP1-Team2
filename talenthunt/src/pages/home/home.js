import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import homeBanner from "../../assets/home.png";
import Button from "@mui/material/Button";
import deloitte from "../../assets/deloitte.png";
import amazon from "../../assets/amazon.png";
import { getJobs } from "./homeActions";
import { getImageName, handleGet } from "../../utils";

const Home = () => {
  const [job, setJob] = useState([]);

  useEffect(() => {
    let promise = handleGet("jobs");
    promise.then((res) => setJob(res.data));
  }, []);

  return (
    <>
      <div className="section-1">
        <Grid container spacing={2}>
          <Grid item md={6}>
            <div className="p-70">
              <h2 className="fs-30  home-line1">
                There are <span className="color-secondary">1,26,366</span> job{" "}
                <span className="color-secondary">Opportunities</span> for you.
              </h2>
              <p className="text-muted fw-600 ">
                Find Jobs,Employment and Career opportunities
              </p>
            </div>
          </Grid>
          <Grid item md={6}>
            <div>
              <img src={homeBanner} alt="" style={{ width: "100%" }} />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="section-2">
        <h1>
          {" "}
          Popular <span className="color-secondary">Jobs</span>{" "}
        </h1>
        <div>
          <div className="popular-jobs">
            {job.map((job, index) => (
              <div key={index} className="m-16">
                <Paper className="job-cards">
                  <img
                    src={getImageName[job.companyImage]}
                    alt={getImageName[job.companyImage]}
                    style={{ maxWidth: "100%", width: "70%" }}
                  />
                  <h3 className="jobtitle">{job.companyName}</h3>
                  <p className="jobsalary my-3">{job.salary}</p>
                  <p className="fs-16 fw-600"> {job.jobRole}</p>
                  <p className="fs-14 c-gray fw-600">{job.location}</p>
                  <p className="fs-14 c-gray fw-600">{job.jobType}</p>
                  <p className="fs-14">{job.jobDescription}</p>

                  <div className="text-center App">
                    <Button variant="contained" className="button-apply">
                      Apply
                    </Button>
                  </div>
                </Paper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
