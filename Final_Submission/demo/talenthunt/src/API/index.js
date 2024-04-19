import axios from "axios";
const url = "https://localhost:5000";
export const fetchPost = () => axios.get(url);