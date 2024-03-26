import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { getJobs } from "./homeActions";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/Card/JobCard";

const AspirantHome = () => {
  const dispatch = useDispatch();
  const { jobList } = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <div className="aspirant-home">
      <h1>Welcome to Your Aspirant Home Page</h1>
      <div className="job-listings">
        {jobList.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AspirantHome;
