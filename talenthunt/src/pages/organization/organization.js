import React, { useState } from "react";

const Organization = () => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const removeJob = (jobIndex) => {
    const updatedJobs = jobs.filter((_, index) => index !== jobIndex);
    setJobs(updatedJobs);
  };

  return (
    <>
      <h1> Organization Page </h1>
      <h2>Job Listings:</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job.title} - {job.description}
            <button onClick={() => removeJob(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Add New Job:</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.elements.title.value;
          const description = e.target.elements.description.value;
          addJob({ title, description });
          e.target.reset();
        }}
      >
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" required />
        <br />
        <button type="submit">Add Job</button>
      </form>
    </>
  );
};

export default Organization;
