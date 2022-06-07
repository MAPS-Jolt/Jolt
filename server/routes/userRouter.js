const path = require('path');
const express = require('express');
const userRouter = express.Router();

// const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');

// signup
userRouter.post(
  '/signup',
  userController.checkUserExists,
  userController.createUser,
  // authController.setCookie,
  (req, res, next) => {
    return res.status(200).json(res.locals.newUser);
  }
);

// login
userRouter.post('/login', userController.verifyUser, (req, res, next) => {
  // return
  return res.status(200).json(res.locals.user);
});

module.exports = userRouter;
