const path = require('path');
const express = require('express');
const userRouter = express.Router();

// const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const authController = require('../controllers/authController');

// signup
userRouter.post(
  '/signup',
  userController.checkUserExists,
  userController.createUser,

  (req, res, next) => {
    return res.status(200).json(res.locals.newUser);
  }
);

// login
userRouter.post(
  '/login',
  // authController.checkCookie,
  userController.verifyUser,
  authController.setCookie,
  (req, res, next) => {
    if (res.locals.user) return res.status(200).json(res.locals.user);
    else return res.sendStatus(204);
  }
);

module.exports = userRouter;
