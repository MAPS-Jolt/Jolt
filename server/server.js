const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

const userRouter = require('./routes/userRouter');
const messageRouter = require('./routes/messageRouter');

//handle parsing request body
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static serve html
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});
// app.use(express.static(path.resolve(__dirname, '../public')));

//route to relevant controllers
app.use('/api/users', userRouter);
app.use('/api/messages', messageRouter);

//Global Error Handler
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

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
