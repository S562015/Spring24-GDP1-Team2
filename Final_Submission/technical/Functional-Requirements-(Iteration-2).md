## Functional Requirements List (Iteration - 2)

1. Login page for Aspirant.
    - Aspirant **SHOULD** be able to create an account.
    - Password **MUST** be stored in encrypted format.
2. Login page for Employer.
    - Employer **SHOULD** be able to create an account.
    - Password **MUST** be stored in encrypted format.
    - All available Organization names **MUST** be shown in dropdown while creating an Employer account.
3. Database
    - Collections **MUST** be created for Aspirant, Organization, Employer, Jobs, Application.
    - Database **MUST** be accessible to the application for CURD operations.
4. Job Postings
    - Employer **MUST** be able to create job postings with clear job description.
5. Job Search and Filters
    - Application **MUST** provide comprehensive job search solution to the Aspirant and Aspirant search to the Employer, such that Aspirant **SHOULD**  be able to filter the jobs based on skills, Salary etc. and Employer **SHOULD** be able to search for Aspirants with matching profiles based on the job requirements.
    - The Application **MUST** show the job suggestions to the Aspirants based on the search algorithm which uses multiple search criteria based on the preferences like Organization, Salary, Experience of Aspirant.
    - Aspirant **MUST** be able to search and Apply for Jobs.
6. Application Submission
    - Application UI **MUST** have all the required filters for filtering the jobs by Aspirant. and Application **MUST** be able to capture personalized user preferences such as Salary preferences, Organization preferences etc. 
    - Aspirant **MUST** be able to upload cover letter and Resume.
7. Application Tracking
    - Aspirant **MUST** be able to track the applicationData for all applied jobs.
    - Employer **SHOULD** be able to filter all applications related to a post and shortlist the candidates.
8. Resume Uploads
    - Aspirant **SHOULD** be able to upload the Resume.

