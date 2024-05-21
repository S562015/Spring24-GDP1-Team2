import axios from "axios";
import deloitte from "../src/assets/deloitte.png";
import amazon from "../src/assets/amazon.png";
import dayjs from "dayjs";

export const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const createFromObj = (array) => {
  let obj = {};
  array.forEach((val) => {
    console.log(val[1]);
    obj[val[0]] = val[1];
  });
  return obj;
};

export const cloneObject = (obj) => JSON.parse(JSON.stringify(obj));
const BASE_URL = "http://localhost:8000";
export const handleGet = async (url) => {
  try {
    const res = await axios.get(`${BASE_URL}/${url}`);
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};
export const handlePost = async (url, body) => {
  try {
    return await axios.post(`${BASE_URL}/${url}`, body);
  } catch (e) {
    return e;
  }
};
export const handleGetBody = async (url, body) => {
  try {
    const queryString = body.map((id) => `emails=${id}`).join("&");

    // Append the query string to the URL
    const fullUrl = `${BASE_URL}/${url}?${queryString}`;

    // Make the GET request with the constructed URL
    const res = await axios.get(fullUrl);
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const TO_BE_REVIEWED = "TO_BE_REVIEWED";
export const IN_PROGRESS = "IN_PROGRESS";

export const SHORTLISTED = "SHORTLISTED";

export const SELECTED = "SELECTED";

export const SCHEDULED_FOR_INTERVIEW = "SCHEDULED_FOR_INTERVIEW";

export const getImageName = {
  amazon,
  deloitte,
};

export function convertToAspirantSchema(input) {
  // Utility function to convert skill level
  function mapSkillLevel(level) {
    switch (level) {
      case "Level 5":
        return "Expert";
      case "Level 4":
        return "Moderate";
      case "Level 3":
        return "Moderate";
      case "Level 2":
        return "Basic";
      case "Level 1":
        return "Basic";
      default:
        return "Basic";
    }
  }

  // Format phone number to match validation pattern
  const formattedPhone = input.phone.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "$1-$2-$3",
  );

  // Convert grade to a number
  const grade = input.grade === "A" ? 4.0 : 0; // Adjust based on actual grading system

  return {
    dateOfBirth: new Date(input.dateOfBirth),
    qualification: input.qualification,
    address: {
      line1: input.addressLine1,
      line2: input.addressLine2,
      city: input.city,
      state: input.state,
      zip: input.zip,
    },
    education: [
      {
        schoolName: input.schoolName,
        degree: input.degree,
        major: input.major,
        grade: grade,
        from: new Date(input.from),
        to: new Date(input.to),
      },
    ],
    skills: [
      {
        skill: input.skill,
        level: mapSkillLevel(input.skillLevel),
      },
    ],
    phone: formattedPhone,
    applicationDate: new Date(),
    expectedSalary: {
      minimum: parseInt(input.expectedSalaryMinimum, 10),
      maximum: parseInt(input.expectedSalaryMaximum, 10),
    },
    preferredOrganizations: input.preferredOrganizations
      .split(",")
      .map((org) => org.trim()),
  };
}

export const flattenAspirantData = (data) => {
  if (!data || typeof data !== "object") return {};

  return {
    dateOfBirth: data.dateOfBirth ? dayjs(data.dateOfBirth) : null,
    qualification: data.qualification || "",
    organizationName: data.organizationName || "",
    addressLine1: data.address.line1 || "",
    addressLine2: data.address.line2 || "",
    city: data.address.city || "",
    state: data.address.state || "",
    zip: data.address.zip || "",
    phone: data.phone || "",
    schoolName: data.education[0]?.schoolName || "",
    degree: data.education[0]?.degree || "",
    major: data.education[0]?.major || "",
    grade: data.education[0]?.grade || "",
    from: data.education[0]?.from ? dayjs(data.education[0].from) : null,
    to: data.education[0]?.to ? dayjs(data.education[0].to) : null,
    skill: data.skills[0]?.skill || "",
    skillLevel: data.skills[0]?.level || "",
    expectedSalaryMinimum: data.expectedSalary.minimum || "",
    expectedSalaryMaximum: data.expectedSalary.maximum || "",
    preferredOrganizations: data.preferredOrganizations.join(", ") || "",
  };
};
