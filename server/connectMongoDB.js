const mongoose = require('mongoose');

const myURI =
  'mongodb+srv://bklynpeter:334070aa@codesmith.saamf.mongodb.net/?retryWrites=true&w=majority';

const URI = process.env.MONGO_URI || myURI;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'eevee',
};

const connectMongoDB = async () => {
  try {
    await mongoose.connect(URI, connectionParams);
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.log('Could not connect to MongoDB: ', error);
  }
};

module.exports = connectMongoDB;
