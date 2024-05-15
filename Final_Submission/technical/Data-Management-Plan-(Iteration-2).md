# Data Management Plan (Modified)
Data management is one of the crucial part for building any application. TalentHunt is using NoSQL database(Non-Relational) for Data maintenance. we are using following collections for managing data.
they are:
- Aspirant : This collection holds the data related to Aspirant and their preferences.
- Organization : This collection holds the data related to Organization.
- Employer : This collection stores the information of Employers related to an Organization. An Organization can have more than one employer.
- Jobs : This collection stores the information of jobs posted by individual employers.
- Application : This collection is for storing the information of Job applications applied by a Aspirant. one document can store information of one Job applied by one Aspirant.

## Aspirant
At the time of registration, Application collects the following information of the Aspirant, along with that it also sets an authentication with firebase.

This collection stores the personal information of the Aspirant like Name, Date of Birth, Highest Qualification, Address. and Education history as list of all attended schools with Name, Major, Start date, End date and Grade etc. This collection also stores the personal or Contact information like e-Mail id, Phone number, Skill set with level of proficiency. Finally It also stores the personalized preferences of the candidate like Expected Minimum and Maximum salaries, and preferred organizations etc.

| Field                  | Type           | IsRequired | Description                                                      |
| :--------------------- | :------------- | :--------: | :--------------------------------------------------------------- |
| _Id                    | String         |    Yes     | Auto generated column by MongoDB                                       |
| FirstName              | String         |    Yes     | First Name of the Aspirant                                       |
| LastName               | String         |    Yes     | Last Name of the Aspirant                                        |
| DateOfBirth            | Date           |    Yes     | Date of Birth of the Aspirant                                    |
| Qualification          | String         |    Yes     | Highest qualification of the Aspirant                            |
| Address.Line1          | String         |    Yes     | Line 1 of Address                                                |
| Address.Line2          | String         |  Optional  | Line 2 of Address                                                |
| Address.City           | String         |    Yes     | City Name                                                        |
| Address.State          | String         |    Yes     | State Name                                                       |
| Address.ZIP            | String         |    Yes     | Zip code of the Aspirant                                         |
| Education.SchoolName   | String         |    Yes     | School Name of the Aspirant                                      |
| Education.Degree       | String         |    Yes     | Degree of the Aspirant (B.Tech, M.Tech, MS etc)                  |
| Education.Major        | String         |    Yes     | Major of the Aspirant                                            |
| Education.Grade        | String         |    Yes     | Grade of the Aspirant for the above major                        |
| Education.From         | Date(MMM-yyyy) |    Yes     | State date of the Degree                                         |
| Education.To           | Date(MMM-yyyy) |    Yes     | End date of the Degree                                           |
| Skills.Skill           | String         |    Yes     | list of skills                                                   |
| Skills.Level           | String         |    Yes     | level of the above skills. i.e., ["Expert", "Moderate", "Basic"] |
| Email                  | String         |    Yes     | e-mail of the Aspirant                                           |
| Phone                  | String         |    Yes     | Mobile number of the Aspirant                                    |
| RegisteredDate         | Date           |    Yes     | Application submitted date. default to Current date.             |
| ExpectedSalary.Minimum | Number         |  Optional  | Expected minimum salary of the Aspirant                          |
| UserName               | String         |    Yes     | Username of the Aspirant                                         |
| Password               | String         |    Yes     | Encrypted Password of the Aspirant                               |
| ExpectedSalary.Maximum | Number         |  Optional  | Expected Maximum salary of the Aspirant                          |
| PreferredOrganizations | String         |  Optional  | List of preferred organizations of the Aspirant                  |


### Aspirant Schema
```BSON
{
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  qualification: {
    type: Date,
    required: true,
  },
  address: {
    line1: {
      type: String,
      required: true,
    },
    line2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      Required: true,
    },
    zip: {
      type: String,
    },
  },
  education: [
    {
      schoolName: {
        type: String,
      },
      degree: {
        type: String,
      },
      major: {
        type: String,
      },
      grade: {
        type: Number,
      },
      from: {
        type: Date,
        format: "MMM-yyyy",
      },
      to: {
        type: Date,
        format: "MMM-yyyy",
      },
    },
  ],
  skills: [
    {
      skill: {
        type: String,
      },
      level: {
        type: String,
        enum: ["Expert", "Moderate", "Basic"],
      },
    },
  ],
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  userName:{
      type: String,
      Required: true,
  },
  password:{
      type: String,
      Required: true,
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
  expectedSalary: {
    minimum: {
      type: Number,
    },
    maximum: {
      type: Number,
    },
  },
  preferredOrganizations: [
    {
      type: String,
    },
  ],
}
```

## Organization
This collection stores the information of the Organization like Organization Name, Location, and little description of the Organization. This information will be collected at the time of Employer registration if Data not exists in the Database.

| Field             | Type   | Is Required | Description                                   |
| :---------------- | :----- | :---------: | :-------------------------------------------- |
| _Id               | String |     Yes     | Id auto generated by MongoDB for Organization |
| Organization Name | String |     Yes     | Name of the Organization                      |
| Location          | String |     Yes     | Last Name of the Aspirant                     |
| Description       | Date   |     No      | Date of Birth of the Aspirant                 |



### Organization Schema
```BSON
{
  organizationName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description:{
    type: String,
  }
}
```

## Employer
This collection is used to store the personal information of the employer. Name, Organization Id generated for the employer organization, email, Username, Encrypted password and the role of the employer will be stored in this collection. Organization Id in this collection can be used as foreign key in this collection.

| Field          | Type   | IsRequired | Description                                                                                |
| :------------- | :----- | :--------: | :----------------------------------------------------------------------------------------- |
| _Id            | String |    Yes     | Id auto generated by MongoDB for Employer                                                  |
| OrganizationId | String |    Yes     | Id generated by MongoDB for the Organization in Organization Collection(Organization._Id)  |
| FirstName      | String |    Yes     | First Name of the Employer                                                                 |
| LastName       | String |    Yes     | Last Name of the Employer                                                                  |
| Email          | Date   |    Yes     | e-Mail id of the Employer                                                                  |
| UserName       | String |    Yes     | Username of the Employer                                                                   |
| Password       | String |    Yes     | Encrypted Password of the Employer                                                         |
| Role           | String |    Yes     | Role of the Employer                                                                       |


### Employer Schema
```BSON
{
  organizationId: {
    type: String,
    required: true,
  },
  firstName : {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    required: true,
  }
 
}
```

## Jobs
This collection holds the information of the Jobs posted by each employer. Information include, Id of the Employer generated for that employer in Employer collection which acts as Foreign key, Job title, minimum qualification required and clear Job description. for each job posted by the employer different document will be created.

| Field                 | Type   | IsRequired | Description                                              |
| :-------------------- | :----- | :--------: | :------------------------------------------------------- |
| _Id                   | String |    Yes     | Id auto generated by MongoDB for Job                     |
| EmployerId            | String |    Yes     | Id generated by MongoDB for the Employer (Employer._Id)  |
| Title                 | String |    Yes     | Job title                                                |
| QualificationRequired | String |    Yes     | Minimum Qualification required for the position          |
| jobDescription        | Date   |    Yes     | Description regarding the job                            |


### Jobs Schema
```BSON
{
  employerId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  qualificationRequired:{
    type: String,
    required: true,
  },
  jobDescription:{
    type: String,
    required: true,
  }
}
```


## Application
This collection records the information of the Job applications applied by the Aspirants. one document will be created for each job applied by one Aspirant. The information like Job Id(Generated in Jobs collection for the job), Aspirant Id (Generated in Aspirant collection for the Aspirant collection), Application date, and Status of the Application. Status of the application will be used for tracking of the application.

| Field           | Type   | IsRequired | Description                                              |
| :-------------- | :----- | :--------: | :------------------------------------------------------- |
| _Id             | String |    Yes     | Id auto generated by MongoDB for Application             |
| AspirantId      | String |    Yes     | Id generated by MongoDB for the Aspirant (Employer._Id)  |
| JobId           | String |    Yes     | Id generated by MongoDB for the Jobs (Jobs._Id)          |
| ApplicationDate | String |    Yes     | Application submitted date (Default is Current date)     |
| Status          | String |    Yes     | Status of the application                                |

### Application Schema
```BSON
{
  aspirantId: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  applicationDate:{
    type: Date,
    required: true,
  },
  applicationData:{
    type: String,
  }
}
```

# Data Security
Using MongoDB for storing data, which is cloud database and available 24/7. Data security is one of the main parts for any application. MongoDB is providing Ip whitelisting feature, by using this feature we can restrict the access to authorized clients. on top of this we have added Firebase for additional security, this authenticates the users (Aspirants and Employers) every time they login.

we have added additional security by whitelisting the API URLs in node, so that only requests from the authorized systems are processed at database.

# Mapping of Functional Requirements
## User Registration
- Aspirants and Employers personal information and preferences are being collected at the time of registration and stores in Database.
- This information will be stored in Aspirant, Organization and Employer collections respectively.
## User Login
- Aspirants and Employers will be authenticated with Username and Password every time they login into application.
- Firebase will take care of the authentications.
## Job Posting
- Employers can post the Jobs with clear requirements and Job description after their successful login.
- This information will be stored in Jobs collection.
## Application Submission
- Aspirants, after their successful login, they can search and apply for suitable jobs. they can apply for as many jobs they want.
- This information will be stored in Application collection.
## Tracking
- Aspirants can track their submitted applications individually.
- Employers can shortlist the Aspirants from received applications.
## Resume Uploads
- Aspirants can upload the resume in their profile.
- Employers can view or download the candidate's resume.
