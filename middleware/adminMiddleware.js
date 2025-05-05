// const jwt = require("jsonwebtoken");
// const { JWT_ADMIN_PASSWORD } = require("../config.js");
// function adminMiddleware(req, res, next) {
//   const token = req.headers.authorization;
//   try {
//     // Retrieve the authorization token from the request headers
//     const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
//     req.adminId = decoded.id;
//     next();
//   } catch (error) {
//     return res.status(403).json({
//       message: "You are not signed in!",
//     });
//   }
// }
// module.exports = {
//   adminMiddleware,
// };
// Middleware to check if the user is authenticated
function adminMiddleware(req, res, next) {
    if (req.session && req.session.adminId) {
        req.adminId = req.session.adminId; // Attach adminId to the request object
        return next(); // Proceed to the next middleware or route handler
    }
    
    return res.status(401).json({ message: "Unauthorized" }); // Respond with 401 if not authenticated
}

module.exports = {
    adminMiddleware,
};