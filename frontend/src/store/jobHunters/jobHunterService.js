import axios from "axios";

const API_URL = "/api/v1/";

// Fetch User
const fetchJobHunters = async (tags) => {
  console.log(tags);
  const { data } = await axios.post(`${API_URL}users`, tags);
  console.log(data);

  return data.data;
};

const authService = {
  fetchJobHunters,
};

export default authService;
