import axios from "axios";

const API_URL = "/api/v1/";

// Signup user
const signup = async (userData) => {
  let role;
  if (userData.role === "job hunter") role = "users";
  if (userData.role === "recruiter") role = "recruiters";
  const { data } = await axios.post(`${API_URL}${role}/signup`, userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data.data));
  }

  return data.data;
};

const login = async (userData) => {
  let role;
  if (userData.role === "job hunter") role = "users";
  if (userData.role === "recruiter") role = "recruiters";
  const { data } = await axios.post(`${API_URL}${role}/login`, userData);

  console.log(data);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data.data));
  }

  return data.data;
};

const authService = {
  signup,
  login,
};

export default authService;
