import React, { useEffect, useState } from "react";
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

  // State for saved searches
  const [savedSearches, setSavedSearches] = useState([]);

  // Function to save search criteria
  const saveSearch = (searchCriteria) => {
    setSavedSearches([...savedSearches, searchCriteria]);
  };

  return (
    <div className="aspirant-home">
      <header>
        <h1>Welcome to Your Aspirant Home Page</h1>
        <SearchBar onSaveSearch={saveSearch} />
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
                <div key={job.id} className="job-card-container">
                  <JobCard job={job} />
                  {/* Display company logo or name */}
                  <div className="company-info">
                    <img src={job.company.logo} alt={job.company.name} />
                    <span>{job.company.name}</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No jobs found</p>
            )}
          </div>
        )}
      </main>
      <aside>
        <h2>Saved Searches</h2>
        <ul>
          {savedSearches.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </aside>
      <footer>
        <p>Footer content goes here</p>
      </footer>
    </div>
  );
};

export default AspirantHome;
