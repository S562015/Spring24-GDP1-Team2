import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import homeBanner from "../../assets/home.png";
import { getJobs } from "./homeActions";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/Card/JobCard";
import { auth } from "../../firebase";

const Home = () => {
  const dispatch = useDispatch();
  const { jobList } = useSelector((state) => state.homeReducer);

  console.log(jobList);
  // console.log(auth.currentUser.email);
  useEffect(() => {
    dispatch(getJobs());
  }, []);

  const renderJobList = () => {
    return jobList?.map((job, index) => <JobCard job={job} index={index} />);
  };

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
          <div className="popular-jobs">{renderJobList()}</div>
        </div>
      </div>
    </>
  );
};
export default Home;
