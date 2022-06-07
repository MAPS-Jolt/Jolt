const mongoose = require('mongoose');
const URI = 'mongodb+srv://mkukim:codesmith@soloproject.cxgpk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(URI).then(() => console.log('Connected to Database'));

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', messageSchema);
