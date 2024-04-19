import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "./homeActions";
import JobCard from "../../components/Card/JobCard";
// import SearchBar from "../../components/SearchBar";
// import FilterPanel from "../../components/FilterPanel";

const AspirantHome = () => {
  const dispatch = useDispatch();
  const { jobList, loading, error } = useSelector((state) => state.homeReducer);

  useEffect(() => {
    // if(jobList) {
      dispatch(getJobs());
    // }
  }, []);

  // State for saved searches
  const [savedSearches, setSavedSearches] = useState([]);

  // Function to save search criteria
  const saveSearch = (searchCriteria) => {
    setSavedSearches([...savedSearches, searchCriteria]);
  };

  // State for managing job alerts
  const [jobAlerts, setJobAlerts] = useState([]);

  // Function to manage job alerts
  const manageJobAlerts = (action, alert) => {
    if (action === "subscribe") {
      setJobAlerts([...jobAlerts, alert]);
    } else if (action === "unsubscribe") {
      const updatedAlerts = jobAlerts.filter((item) => item.id !== alert.id);
      setJobAlerts(updatedAlerts);
    }
  };

  // State for saved jobs
  const [savedJobs, setSavedJobs] = useState([]);

  // Function to save a job
  const saveJob = (job) => {
    setSavedJobs([...savedJobs, job]);
  };

  // State for application tracker
  const [applications, setApplications] = useState([]);

  // Function to track job applications
  const trackApplication = (job, status) => {
    const updatedApplications = [...applications, { job, status }];
    setApplications(updatedApplications);
  };

  // State for sorting options
  const [sortBy, setSortBy] = useState("relevance"); // Default sorting criteria

  // Function to handle sorting
  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10; // Number of jobs to display per page

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // State for filter criteria
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    salaryRange: "",
  });

  // Function to handle filtering
  const handleFilter = (criteria) => {
    setFilters({ ...filters, ...criteria });
  };

  // Calculate indexes for displaying jobs on the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  // Apply filters to job listings
  const filteredJobs = useMemo(() => {
    // Implement filtering logic based on filter criteria
    return jobList.filter((job) => {
      // Custom filtering logic based on filter criteria
    });
  }, [jobList, filters]);

  // Implement sorting logic based on the sortBy state
  const sortedJobList = useMemo(() => {
    // Implement sorting logic based on the sortBy state
    return filteredJobs.sort((a, b) => {
      // Custom sorting logic based on sortBy criteria
    });
  }, [filteredJobs, sortBy]);

  // Update job list to display filtered and sorted jobs
  const jobsToDisplay =
    filters.location || filters.jobType || filters.salaryRange
      ? sortedJobList
      : jobList;

  // Get current jobs for pagination
  const currentJobs = jobsToDisplay.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="aspirant-home">
      <header>
        <h1>Welcome to Your Aspirant Home Page</h1>
        {/*<SearchBar onSaveSearch={saveSearch} />*/}
        {/*<FilterPanel onFilter={handleFilter} onSort={handleSort} />*/}
      </header>
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="job-listings">
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <div key={job.id} className="job-card-container">
                  <JobCard
                    job={job}
                    onSave={() => saveJob(job)}
                    onApply={(status) => trackApplication(job, status)}
                  />
                  {/* Display company logo or name */}
                  <div className="company-info">
                    <img src={job.company?.logo} alt={job.company?.name} />
                    <span>{job.company?.name}</span>
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
        <h2>Job Alerts</h2>
        <ul>
          {jobAlerts.map((alert, index) => (
            <li key={index}>
              {alert.criteria} -{" "}
              <button onClick={() => manageJobAlerts("unsubscribe", alert)}>
                Unsubscribe
              </button>
            </li>
          ))}
        </ul>
        <h2>Saved Jobs</h2>
        <ul>
          {savedJobs.map((job, index) => (
            <li key={index}>{job.title}</li>
          ))}
        </ul>
        <h2>Application Tracker</h2>
        <ul>
          {applications.map((application, index) => (
            <li key={index}>
              {application.job.title} - {application.status}
            </li>
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
