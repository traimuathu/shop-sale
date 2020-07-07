const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: {type: String, trim: true, required: true},
  email: {type: String, trim: true, required: true},
  password: {type: String, trim: true, required: true},
  ruler: {type: Number, default: 3},
  fullname: {type: String},
  address: {type: String, default: '', trim: true},
  phone: {type: String, trim: true},
  avatar: {type: String, default: 'https://via.placeholder.com/150', trim: true},
  products: [
    {
      product_id: {type: Object},
      content: {type: String},
      image: {type: String}
    }
  ],
  createAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('users', User);