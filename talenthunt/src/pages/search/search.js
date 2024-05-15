import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import JobCard from "../../components/Card/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../home/homeActions";

const Search = () => {
  const { jobList } = useSelector((state) => state.homeReducer);
  const [searchList, setSearchList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  useEffect(() => {
    setSearchList(jobList);
  }, [jobList]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "search") {
      setSearchTerm(value);
    } else if (name === "location") {
      setLocationFilter(value);
    } else if (name === "salary") {
      setSalaryFilter(value);
    } else if (name === "type") {
      setTypeFilter(value);
    }
  };

  const renderJobList = () => {
    let filteredList = jobList.filter((job) => {
      return (
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        job.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
        (salaryFilter === "" ||
          job.salary.toLowerCase().includes(salaryFilter.toLowerCase())) &&
        (typeFilter === "" ||
          job.jobType.toLowerCase().includes(typeFilter.toLowerCase()))
      );
    });
    return (
      <Grid container spacing={2}>
        {filteredList.map((job, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search..."
        name="search"
        value={searchTerm}
        onChange={handleChange}
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
        style={{ marginBottom: "16px" }}
      />
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Location"
        name="location"
        value={locationFilter}
        onChange={handleChange}
        style={{ marginBottom: "16px" }}
      />
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Salary"
        name="salary"
        value={salaryFilter}
        onChange={handleChange}
        style={{ marginBottom: "16px" }}
      />
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type (Part-time, Full-time)"
        name="type"
        value={typeFilter}
        onChange={handleChange}
        style={{ marginBottom: "16px" }}
      />
      <div className="popular-jobs">{renderJobList()}</div>
    </>
  );
};

export default Search;
