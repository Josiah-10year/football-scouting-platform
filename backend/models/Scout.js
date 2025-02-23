const mongoose = require('mongoose');

const scoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  organization: { type: String },
  region: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Scout', scoutSchema);