const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  image: { type: String, required: true }, // base64 string
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // reference to user
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', ImageSchema);
