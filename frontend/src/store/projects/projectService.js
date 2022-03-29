import axios from "axios";
import isEmpty from "../../utils/utils";

const API_URL = "/api/v1/";

// Fetch User
const fetchProjects = async ({ page = "1", perPage = "12", keyword, tags }) => {
  let body = {};
  if (!isEmpty(tags)) {
    body = { tags };
  }

  const { data } = await axios.post(
    `${API_URL}projects?page=${page}&limit=${perPage}&keyword=${keyword}`,
    body
  );
  console.log(data);

  return data.data;
};

const authService = {
  fetchProjects,
};

export default authService;
