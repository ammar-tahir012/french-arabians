import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",  //if hosting then else case
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;