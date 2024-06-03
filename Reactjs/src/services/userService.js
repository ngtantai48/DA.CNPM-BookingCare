import { reject } from "lodash";
import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("./api/login", {
    email: userEmail,
    password: userPassword,
  });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const deleteUserService = (userId) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: userId,
    },
  });
};

const editUserService = (inputData) => {
  return axios.put("/api/edit-user", inputData);
};

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};

const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};

const getAllDoctors = () => {
  return axios.get(`/api/get-all-doctors`);
};

const saveDetailDoctorService = (data) => {
  return axios.get(`/api/save-infor-doctors`, data);
};

export {
  handleLoginApi,
  getAllUsers,
  deleteUserService,
  editUserService,
  createNewUserService,
  getTopDoctorHomeService,
  getAllDoctors,
  saveDetailDoctorService,
};
