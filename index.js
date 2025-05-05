const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const adminSessionMiddleware = require('./middleware/adminSessionMiddleware');
const userSessionMiddleware = require('./middleware/userSessionMiddleware');



const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const{adminRouter}=require("./routes/admin");
const app = express();
app.use(express.json());

require("dotenv").config(); //dotenv to load environment variables from a .env file

app.use("api/v1/user",userSessionMiddleware,userRouter);
app.use("api/v1/course",courseRouter);
app.use("api/v1/admin",adminSessionMiddleware,adminRouter);

// createUserRoutes(app); before we did function soo we written this later used routes
// createCourseRoutes(app);




async function main(){
  //using .env file for the connection
  //await mongoose.connect("mongodb+srv://sriharshabhoomandla:KT0GXbrxavWlYFIo@cluster0.qjziw.mongodb.net/Skillora");
try{
  // Attempt to connect to the MongoDB database using the connection string from the .env file
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Mongodb Connected");
   // Get the port from the .env file or use the default port 3000
  const port=process.env.PORT || 3000;
  app.listen(3000);
  console.log("Running");
}
catch(error){
  console.log("Failed to connect to mongodb or start the server",error);
}
}
main();

// app.listen(3000, () => {
//   console.log("The server is runnning on ${3000}");
// });