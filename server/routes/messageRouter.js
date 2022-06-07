const path = require('path');
const express = require('express');
const messageRouter = express.Router();

const authController = require('./../controllers/authController');
const messageController = require('./../controllers/messageController');
const userController = require('./../controllers/userController');

// get all messages
messageRouter.get('/', messageController.getMessages, (req, res) => {
  return res.status(200).json(res.locals.messages);
});

// sending a message
messageRouter.post(
  '/',
  authController.checkCookie,
  userController.getUser,
  messageController.postMessage,
  (req, res) => {
    console.log('message sent');
    return res.status(200);
  }
);

module.exports = messageRouter;
