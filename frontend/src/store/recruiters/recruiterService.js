import axios from "axios";

const API_URL = "/api/v1/";

const fetchRecruiter = async () => {
  let id = JSON.parse(localStorage.getItem("user"))._id;

  const { data } = await axios.get(`${API_URL}recruiters/${id}`);

  return data.data.data;
};

const recruiterService = {
  fetchRecruiter,
};

export default recruiterService;
