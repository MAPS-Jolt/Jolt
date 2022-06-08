const mongoose = require('mongoose');

const URI = 'mongodb+srv://bklynpeter:334070aa@codesmith.saamf.mongodb.net/eevee?retryWrites=true&w=majority';
mongoose.connect(URI).then(() => console.log('Connected to Database'));

// const URI =
//   'mongodb+srv://simonlee1125:password321@cluster0.fpkjo.mongodb.net/jolt?retryWrites=true&w=majority';
// mongoose
//   .connect(URI, {
//     // options for the connect method to parse the URI
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//     // sets the name of the DB that our collections are part of
//     dbName: 'jolt',
//   })
//   .then(() => console.log('Connected to Database'));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: false },
  bio: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);
