const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  position: { type: String, required: true },
  height: { type: Number },
  weight: { type: Number },
  achievements: { type: [String] },
  photos: { type: [String] }, // URLs to uploaded photos
  videos: { type: [String] }, // URLs to uploaded videos
  documents: { type: [String] }, // URLs to uploaded documents
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Player', playerSchema);