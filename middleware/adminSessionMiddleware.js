const session = require('express-session');
const { adminSessionConfig } = require('../config');
const adminSessionMiddleware = session(adminSessionConfig);
module.exports = adminSessionMiddleware;