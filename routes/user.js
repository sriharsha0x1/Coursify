const { Router } = require("express");  //the below 2 lines and this is same, so prefer this
// const express=requuire("express");
// const Router=express.Router;
const { userMiddleware } = require("../middleware/userMiddleware");
const userController = require("../controllers/userController");

const userRouter=Router(); //Router is a bulitin func which does is whenever there is req it routes to the specific route like /user/...(Which is in index.js file) comes then routes to the user.js file 

//function createUserRoutes(app) { //using routes instead of functions
    //app.post("/signup/", function (req, res, next) {}); this is how we can alos do but usinng route is shown below
   
    userRouter.post("/signup", userController.signup);
    userRouter.post("/signin", userController.signin);
    userRouter.post("/signout", userController.signout);
    userRouter.get("/topurchase",userMiddleware,userController.getUserPurchases
      //no payment access today
    );

  //}
  
  module.exports = {
    userRouter: userRouter,
  };