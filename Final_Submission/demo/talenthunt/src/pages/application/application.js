import React, { useState } from "react";

const Application = () => {
  // State for managing form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions like sending the form data to a backend server here
    console.log("Form submitted:", formData);
    // Clear form fields after submission
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <h1>Application Page</h1>
      <p>This page is for posting Applications and is under construction.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </>
  );
};

export default Application;
