import axios from "axios";

const authToken = localStorage.getItem("Token");
console.log("AUTH Bearer :", authToken);
const axiosInstance = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});

export default axiosInstance;
