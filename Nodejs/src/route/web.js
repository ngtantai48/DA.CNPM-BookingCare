import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController"

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
  router.get("/api/get-schedule-doctor-by-date", doctorController.getScheduleByDate);


  router.post('/api/bulk-create-schedule', doctorController.bulkCreateSchedule)

  return app.use("/", router);
};

module.exports = initWebRoutes;
