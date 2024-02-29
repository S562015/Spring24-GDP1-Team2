import axios from "axios";
import deloitte from "../src/assets/deloitte.png";
import amazon from "../src/assets/amazon.png";

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
    const res = await axios.post(`${BASE_URL}/${url}`, body);
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};
export const getImageName = {
  amazon,
  deloitte,
};
