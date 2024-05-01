import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Change flex direction
    alignItems: "flex-start", // Align items to start
    padding: theme.spacing(2), // Add padding
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add boxShadow
    borderRadius: 8, // Add borderRadius
  },
  title: {
    fontSize: 24, // Change font size
    fontWeight: "bold", // Change font weight
    marginBottom: theme.spacing(1),
  },
  description: {
    fontSize: 16, // Change font size
    flexGrow: 1,
  },
}));

const JobDescription = ({ title, description }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const JobPortal = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <JobDescription
          title="Software Engineer"
          description="We are looking for a talented software engineer to join our team..."
        />
        <JobDescription
          title="Data Scientist"
          description="Join our team of data scientists to work on cutting-edge projects..."
        />
        {/* Add more JobDescription
         components as needed */}
      </Grid>
    </div>
  );
};

const JobPortal_adv = () => {
  const classes = useStyles();

  const jobData = [
    {
      title: "Data Engineer",
      description:
        "We are seeking an experienced Data Engineer proficient in Spark and Big Data technologies to join our dynamic team. In this role, you will be responsible for designing, building, and maintaining scalable data pipelines and infrastructure to support our data-driven initiatives. If you have a passion for solving complex data engineering challenges and thrive in a collaborative environment, we'd love to hear from you.",
      location: "New York",
      experience: "3+ years",
      salary: "$100,000 - $120,000",
    },
    {
      title: "Data Analyst",
      description:
        "Join our team of skilled Data Analysts to work on innovative projects that drive actionable insights and inform strategic decisions. As a Data Analyst, you will analyze large datasets, develop visualizations, and communicate findings to stakeholders across the organization. If you have strong analytical skills, attention to detail, and a passion for data-driven decision-making, this role is for you.",
      location: "San Francisco",
      experience: "2+ years",
      salary: "$80,000 - $100,000",
    },
    {
      title: "Data Scientist",
      description:
        "We are seeking an experienced Data Scientist to join our development team and drive data-driven innovation. In this role, you will apply advanced statistical and machine learning techniques to extract insights from complex datasets, develop predictive models, and contribute to the development of innovative data products. If you have a strong background in statistics, programming, and a passion for solving real-world problems using data science, we want to hear from you.",
      location: "Seattle",
      experience: "4+ years",
      salary: "$120,000 - $140,000",
    },
    {
      title: "Machine Learning Engineer",
      description:
        "Join our team as a Machine Learning Engineer and work on cutting-edge projects at the intersection of artificial intelligence and data engineering. In this role, you will design and implement scalable machine learning algorithms, deploy models into production, and collaborate with cross-functional teams to deliver AI-driven solutions. If you have a solid understanding of machine learning concepts and experience with deploying models at scale, we encourage you to apply.",
      location: "Austin",
      experience: "3+ years",
      salary: "$110,000 - $130,000",
    },
    {
      title: "Data Architect",
      description:
        "We are looking for a talented Data Architect to lead the design and implementation of our data architecture. In this role, you will define data models, establish data governance policies, and ensure the scalability, reliability, and security of our data infrastructure. If you have a strong background in database design, cloud technologies, and a passion for building scalable data solutions, we'd love to have you on our team.",
      location: "Chicago",
      experience: "5+ years",
      salary: "$130,000 - $150,000",
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {jobData.map((job, index) => (
          <JobDescription
            key={index}
            title={job.title}
            description={job.description}
            location={job.location}
            experience={job.experience}
            salary={job.salary}
          />
        ))}
      </Grid>
    </div>
  );
};

export default JobPortal;
