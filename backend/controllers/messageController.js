const Message = require('../models/Message');

// Send a message
exports.sendMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get messages for a player
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ receiver: req.params.playerId });
    res.status(200).json(messages);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};