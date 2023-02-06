import axios from "axios";
console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
const Axios = axios.create({
  // baseURL: "http://localhost:8000/api/",
  baseURL: "https://street-seller-backend.onrender.com/api/",
  // http://localhost:8000/
});
export default Axios;
