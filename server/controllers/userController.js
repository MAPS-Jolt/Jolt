const User = require('../models/UserModel');

const userController = {};

userController.checkUserExists = (req, res, next) => {
  const { username, password } = req.body;

  if (username.length === 0)
    return next({
      log: 'error in userController.createUser',
      message: { err: 'Username must be a valid string' },
    });

  // check if username already exists in database
  User.findOne({ username }).then((user) => {
    if (user) {
      return next({
        error: 'Username is taken',
        // message: 'Username is taken',
        // log: `Username already exists`
      });
    } else return next();
  });
};

userController.createUser = (req, res, next) => {
  // request body will have username and password
  const { username, password } = req.body;

  if (username.length === 0)
    return next({
      log: 'error in userController.createUser',
      message: { err: 'Username must be a valid string' },
    });
  if (password.length === 0)
    return next({
      log: 'error in userController.createUser',
      message: { err: 'Password must be a valid string' },
    });

  User.create({ username, password })
    .then((data) => {
      console.log('new user created');
      res.locals.newUser = data;
      return next();
    })
    .catch((err) => {
      return {
        log: 'Error in userController.createUser',
        message: { error: err },
      };
    });
};

// authorize
userController.verifyUser = (req, res, next) => {
  // request body will have username and password
  const { username, password } = req.body;

  // find the user based on username
  User.findOne({ username }).then((user) => {
    // if the passwords match, log in
    if (user && user.password === password) {
      res.locals.user = user;
      return next();
    } else return res.sendStatus(204);
  });
};

userController.getUser = (req, res, next) => {
  // get the user based on the browser cookie, saved in res.locals from authController.checkCookie
  User.findOne({ username: res.locals.username })
    .then((user) => {
      // save the user info into res.locals
      res.locals.user = user;
      return next();
    })
    .catch((err) => {
      return {
        log: 'Error in userController.getUser',
        message: { error: err },
      };
    });
};

// update profile
userController.updateUser = (req, res, next) => {};

module.exports = userController;
