import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "./homeActions";
import JobCard from "../../components/Card/JobCard";
import SearchBar from "../../components/SearchBar";
import FilterPanel from "../../components/FilterPanel";

const AspirantHome = () => {
  const dispatch = useDispatch();
  const { jobList, loading, error } = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <div className="aspirant-home">
      <header>
        <h1>Welcome to Your Aspirant Home Page</h1>
        <SearchBar />
        <FilterPanel />
      </header>
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="job-listings">
            {jobList.length > 0 ? (
              jobList.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <p>No jobs found</p>
            )}
          </div>
        )}
      </main>
      <footer>
        <p>Footer content goes here</p>
      </footer>
    </div>
  );
};

export default AspirantHome;
