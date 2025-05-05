//check first user.js
const {Router}=require("express");
const { userMiddleware } = require("../middleware/userMiddleware");
const courseController = require("../controllers/coursecontroller");
const courseRouter=Router();

courseRouter.get("/preview", courseController.previewCourses);
courseRouter.post("/purchases",userSessionMiddleware,userMiddleware,courseController.purchaseCourse);
 
  module.exports = {
    courseRouter: courseRouter,
  };
  
  
  
  