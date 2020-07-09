const mongoose = require('mongoose');

module.exports = () => {
  mongoose.Promise = global.Promise;

  try {
    // Setup connect url
    mongoose.connect(`mongodb://${process.env.MONGO_HOSTING}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true})
      .then(() => console.log(`Connected Mongodb`));
  } catch (error) {
    throw error;
  }
}