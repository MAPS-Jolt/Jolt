const path = require('path');
const express = require('express');
const app = express();
const connectMongoDB = require('./connectMongoDB.js');
const PORT = 3000;

const authController = require('./controllers/authController');
const messageController = require('./controllers/messageController');
const userController = require('./controllers/userController');

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static server html
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});
// app.use(express.static(path.resolve(__dirname, '../public')));

/**
 * route to relevant controllers
 */

/**
 * Global Error Handler
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { error: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

connectMongoDB();

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

// module.exports = app;
