const http = require('http');
const cookie = require('cookie');

const authController = {};

// set a cookie
authController.setCookie = (req, res, next) => {
  // username and password are in request body
  const { username, password } = req.body;

  // saving username data to the cookies
  res.cookie('username', username, {
    expires: new Date('12 12 2022'),
    secure: true,
    httpOnly: true,
    sameSite: 'Strict',
  });

  return next();
};

// get the cookie incoming request
authController.checkCookie = (req, res, next) => {
  // username and password are in request body
  const { username, password } = req.body;

  // show saved cookies
  const cookies = req.cookies;

  // save username from cookie into res.locals
  res.locals.username = cookies.username;

  return next();
};

module.exports = authController;
