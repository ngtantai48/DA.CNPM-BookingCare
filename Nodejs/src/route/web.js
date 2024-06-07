import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController"
import specialtyController from "../controllers/specialtyController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);
  //rest api

  router.post('/api/login', userController.handleLogin);
  router.get('/api/get-all-users', userController.handleGetAllUsers);
  router.post('/api/create-new-user', userController.handleCreateNewUser);
  router.put('/api/edit-user', userController.handleEditUser);
  router.delete('/api/delete-user', userController.handleDeleteUser);
  
  router.post('/api/patient-book-appointment',patientController.postBookApointment);
  router.post('/api/verify-book-appointment',patientController.postVerifyBookAppointment);
  router.post('/api/create-new-specialty',specialtyController.createSpecialty);
  return app.use("/", router);
};

module.exports = initWebRoutes;
