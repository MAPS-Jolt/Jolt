const mongoose = require('mongoose');

const messageSchema = new Schema({
  message: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model(`Message`, messageSchema);

module.exports = Message;
