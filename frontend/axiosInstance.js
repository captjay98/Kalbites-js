import axios from "axios";

const authToken = localStorage.getItem("Token");
console.log("AUTH Bearer :", authToken);
const axiosInstance = axios.create({
  baseURL: "https://kalbites-js-production.up.railway.app",
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});

export default axiosInstance;
