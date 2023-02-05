import axios from "axios";
console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
const Axios = axios.create({
  baseURL: "https://street-seller-backend.onrender.com/api/",
});
export default Axios;
