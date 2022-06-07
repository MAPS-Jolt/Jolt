const mongoose = require('mongoose');
const URI = 'mongodb+srv://mkukim:codesmith@soloproject.cxgpk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(URI).then(() => console.log('Connected to Database'));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  name: { type: String, required: false },
  bio: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);