// const jwt=require("jsonwebtoken");
// const { JWT_USER_PASSWORD }=require("../config.js");
// function userMiddleware(req,res,next){
//     const token=req.headers.authorization;
//     try{
//         // Retrieve the authorization token from the request headers
//         const decoded=jwt.verify(token,JWT_USER_PASSWORD);
//         req.userId=decoded.id;
//         next();

//     }
//     catch(error){
//         return res.status(403).json({
//             message:"You are not signed in!",
//         })
//     }
// }
// module.exports={
//     userMiddleware,
// }

const session = require('express-session');
const { userSessionConfig } = require('../config');
const userSessionMiddleware = session(userSessionConfig);
module.exports = userSessionMiddleware;