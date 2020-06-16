const basicAuth = require("express-basic-auth");

const iskraJSuser = { login: "pass", login2: "pass2" };

// HTTP client auth
exports.auth = basicAuth({
  users: iskraJSuser,

  // Browser auth by URL-request
  // Better keep a default value here
  challenge: false,
});
