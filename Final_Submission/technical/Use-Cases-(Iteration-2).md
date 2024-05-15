# Use Cases (Iteration 2)
## UC1: Aspirant Registration
**Goal:** 
As I am new here, I would like to create an account in TalentHunt Job search system.

**Actors:** Aspirant

**Interactions:**
1. Aspirant click on register button.
2. System ask for personal information like email, phone, password, Name, Qualification, Education details etc.
3. System checks for any existing accounts with given email or phone number, if not find in the system it will create an account for the Aspirant.
4. It also collects the Aspirant preferences like Expected salary, Preferred organizations etc.

**Output:**
1. An account will be created for Aspirant in TalentHunt website.
2. personal information of Aspirant will be stored in database.



## UC2: Employer Registration
**Goal:** 
As I am new here, I would like to create an account in TalentHunt Job search system and post the jobs.

**Actors:** Employer

**Interactions:**
1. Employer click on register button.
2. System ask for personal information like email, phone, password, Name etc.
3. System checks for any existing accounts with given email or phone number, if not find in the system it will create an account for the Employer.
4. It also collects the organization information if already not available in the system etc.

**Output:**
1. An account will be created for Employer in TalentHunt website.
2. personal information of Employer will be stored in database.

## UC3: Aspirant Login
**Goal:** 
As I have an account here, I would like to login into TalentHunt application as Aspirant.

**Actors:** Aspirant

**Interactions:**
1. System ask for Username and Password.
2. It authenticates the user with Firebase.

**Output:**
1. Successful authentication redirects the user to Aspirant home page.
2. Failure of Authentication results in message asking for correct Username/Password.



## UC4: Employer Login
**Goal:** 
As I have an account here, I would like to login into TalentHunt application as Employer.

**Actors:** Employer

**Interactions:**
1. System ask for Username and Password.
2. It authenticates the user with Firebase.

**Output:**
1. Successful authentication redirects the user to Employer home page.
2. Failure of Authentication results in message asking for correct Username/Password.


## UC5: Creating a Job
**Goal:** 
As an Employer, I would like to create a Job post in the system so that it is visible to Aspirants as an open position.

**Actors:** Employer

**Interactions:**
1. Employer selects an option to create a post.
2. System asks for Job title, Job Description and other details.

**Output:**
1. Creates a Job post in TalentHunt, and it is also visible for Aspirants.


## UC6: Search for Job (Aspirant)
**Goal:** 
As an Aspirant, I would like to search for job posted by Employer.

**Actors:** Aspirant

**Interactions:**
1. Aspirant selects an option to search for Job.
2. System shows recommended jobs along with some filter options.

**Output:**
1. Aspirant will be able to see all available and Recommended Jobs posted by Employers.
2. Aspirant can filter the jobs as per his/her requirements. 



## UC7: Apply for Job (Aspirant)
**Goal:** 
As an Aspirant, I would like to Apply for job.

**Actors:** Aspirant

**Interactions:**
1. Aspirant will be given an option for applying the filtered jobs.

**Output:**
1. A job application will be created which can be visible to Employer.
2. An Aspirant can apply for any number of jobs.


## UC8: Filter and Shortlist the applications
**Goal:** 
As an Employer, I would like to filter the Aspirants and Shortlist for next round of selection process.

**Actors:** Employer

**Interactions:**
1. Employer will be shown all the Aspirants applied for selected job.
2. Employer will be given with filters for filter the Applicants

**Output:**
1. Aspirants will be shortlisted for the Job by Employer.


## UC9: Track the applications(Aspirant)
**Goal:** 
As an Aspirant, I would like to Track the Selected Application.

**Actors:** Aspirant

**Interactions:**
1. Aspirants can see the Status posted by Employer if application gets shortlisted.

**Output:**
1. Aspirants can see the applicationData of any application from all applied applications.

## UC10: Upload the Resume(Aspirant)
**Goal:** 
As an Aspirant, I would like to upload my resume in my profile for showcasing my skills and present my self.

**Actors:** Aspirant

**Interactions:**
1. Aspirants can upload the resume in their accounts.

**Output:**
1. Resume uploaded as part of profile creation.

## UC11: Download/View the resume(Employer)
**Goal:** 
As an Employer, I would like to view or download the candidates resume.

**Actors:** Employer

**Interactions:**
1. Employers can see the candidate's resume..

**Output:**
1. Employer can see the resume of candidates who applied for job, along with who does not apply for job but eligible for it.