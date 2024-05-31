import axios from "axios";

const getAllCodeService = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`);
};

export { getAllCodeService };
