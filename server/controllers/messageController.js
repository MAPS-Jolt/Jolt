const Message = require('../models/MessageModel');

const messageController = {};

messageController.getMessages = (req, res, next) => {
  // get all the message from the database
  Message.find({})
    .then((messages) => {
      res.locals.messages = messages;
      return next();
    })
    .catch((err) => {
      return {
        log: 'Error in messageController.getMessages',
        message: { error: err },
      };
    });
};

messageController.postMessage = (req, res, next) => {
  // get user from res.locals.user, saved by userController.getUser
  const user = res.locals.user;

  // message is in request body
  const { message } = req.body;

  // create new message in database
  Message.create({ message, user, sentBy: user.username }).then((data) => {
    return next();
  });
};

module.exports = messageController;
