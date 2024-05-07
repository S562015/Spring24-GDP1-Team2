import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import AspirantCard from "./AspirantCard";
import Grid from "@mui/material/Grid";

const aspirantDataList = [
  {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    qualification: "Bachelor of Science",
    email: "john@example.com",
    phone: "123-456-7890",
    address: {
      line1: "123 Main St",
      line2: "Apt 101",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    education: [
      {
        schoolName: "University of XYZ",
        degree: "Bachelor",
        major: "Computer Science",
        grade: 3.8,
        from: "2010-09-01",
        to: "2014-05-01",
      },
      {
        schoolName: "ABC College",
        degree: "High School Diploma",
        major: "Science",
        grade: 3.5,
        from: "2006-09-01",
        to: "2010-05-01",
      },
    ],
    skills: [
      { skill: "JavaScript", level: "Expert" },
      { skill: "React", level: "Expert" },
      { skill: "Node.js", level: "Expert" },
      { skill: "HTML", level: "Expert" },
      { skill: "CSS", level: "Expert" },
    ],
    applicationDate: "2022-10-15",
    expectedSalary: { minimum: 60000, maximum: 80000 },
    preferredOrganizations: ["Company A", "Company B"],
  },
  // Add more aspirants as needed
  {
    firstName: "Jane",
    lastName: "Smith",
    dateOfBirth: "1995-03-15",
    qualification: "Master of Business Administration",
    email: "jane@example.com",
    phone: "987-654-3210",
    address: {
      line1: "456 Oak St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
    education: [
      {
        schoolName: "University of ABC",
        degree: "Master",
        major: "Business Administration",
        grade: 4.0,
        from: "2015-09-01",
        to: "2017-05-01",
      },
      {
        schoolName: "DEF College",
        degree: "Bachelor",
        major: "Economics",
        grade: 3.7,
        from: "2011-09-01",
        to: "2015-05-01",
      },
    ],
    skills: [
      { skill: "Marketing", level: "Expert" },
      { skill: "Project Management", level: "Expert" },
      { skill: "Data Analysis", level: "Moderate" },
    ],
    applicationDate: "2022-10-20",
    expectedSalary: { minimum: 70000, maximum: 90000 },
    preferredOrganizations: ["Company C", "Company D"],
  },
  // Add more aspirants as needed
  {
    firstName: "Alice",
    lastName: "Johnson",
    dateOfBirth: "1988-07-22",
    qualification: "Doctor of Medicine",
    email: "alice@example.com",
    phone: "555-123-4567",
    address: {
      line1: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: "60001",
    },
    education: [
      {
        schoolName: "Medical University of XYZ",
        degree: "Doctorate",
        major: "Medicine",
        grade: 4.0,
        from: "2010-09-01",
        to: "2014-05-01",
      },
      {
        schoolName: "GHI College",
        degree: "Bachelor",
        major: "Biology",
        grade: 3.5,
        from: "2006-09-01",
        to: "2010-05-01",
      },
    ],
    skills: [
      { skill: "Surgery", level: "Expert" },
      { skill: "Diagnosis", level: "Expert" },
      { skill: "Patient Care", level: "Expert" },
    ],
    applicationDate: "2022-11-01",
    expectedSalary: { minimum: 90000, maximum: 120000 },
    preferredOrganizations: ["Hospital A", "Hospital B"],
  },
  // Add more aspirants as needed
  {
    firstName: "Michael",
    lastName: "Brown",
    dateOfBirth: "1992-12-10",
    qualification: "Bachelor of Arts",
    email: "michael@example.com",
    phone: "333-555-7777",
    address: {
      line1: "101 Pine St",
      city: "Houston",
      state: "TX",
      zip: "77001",
    },
    education: [
      {
        schoolName: "University of DEF",
        degree: "Bachelor",
        major: "English Literature",
        grade: 3.6,
        from: "2010-09-01",
        to: "2014-05-01",
      },
      {
        schoolName: "JKL College",
        degree: "High School Diploma",
        major: "Literature",
        grade: 3.2,
        from: "2006-09-01",
        to: "2010-05-01",
      },
    ],
    skills: [
      { skill: "Writing", level: "Expert" },
      { skill: "Editing", level: "Moderate" },
      { skill: "Communication", level: "Expert" },
    ],
    applicationDate: "2022-11-05",
    expectedSalary: { minimum: 50000, maximum: 70000 },
    preferredOrganizations: ["Publishing Company X", "Media Company Y"],
  },
  // Add more aspirants as needed
  {
    firstName: "Emily",
    lastName: "Garcia",
    dateOfBirth: "1993-05-20",
    qualification: "Master of Science",
    email: "emily@example.com",
    phone: "888-999-0000",
    address: {
      line1: "202 Maple St",
      city: "Miami",
      state: "FL",
      zip: "33001",
    },
    education: [
      {
        schoolName: "University of GHI",
        degree: "Master",
        major: "Computer Science",
        grade: 3.9,
        from: "2015-09-01",
        to: "2017-05-01",
      },
      {
        schoolName: "LMN College",
        degree: "Bachelor",
        major: "Information Technology",
        grade: 3.8,
        from: "2011-09-01",
        to: "2015-05-01",
      },
    ],
    skills: [
      { skill: "Java", level: "Expert" },
      { skill: "Python", level: "Expert" },
      { skill: "SQL", level: "Moderate" },
    ],
    applicationDate: "2022-11-10",
    expectedSalary: { minimum: 70000, maximum: 90000 },
    preferredOrganizations: ["Tech Company Z", "Startup Company W"],
  },
];

const AspirantsList = () => {
  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        List of Aspirants Applied for Job
      </Typography>
      <Grid container spacing={2}>
        {aspirantDataList.map((aspirant, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            {" "}
            {/* Adjust grid breakpoints as needed */}
            <AspirantCard aspirant={aspirant} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AspirantsList;
