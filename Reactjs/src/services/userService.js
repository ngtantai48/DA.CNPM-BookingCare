import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
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

const postPatientBookAppointment = (data) => {
  return axios.post('/api/patient-book-appointment',data)
}
const postVerifyBookAppointment = (data) => {
  return axios.post('/api/verify-book-appointment',data)
}
const createNewSpecialty = (data) => {
  return axios.post('/api/create-new-specialty',data)
}
const getAllSpecialty = () => {
  return axios.get('/api/get-specialty')
}
export { handleLoginApi, 
  getAllUsers, 
  deleteUserService, editUserService, 
  createNewUserService, postPatientBookAppointment,
  postVerifyBookAppointment,createNewSpecialty,getAllSpecialty
};
