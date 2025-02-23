const Player = require('../models/Player');

exports.approvePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, { approved: true }, { new: true });
    res.status(200).json(player);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUnapprovedPlayers = async (req, res) => {
  try {
    const players = await Player.find({ approved: false });
    res.status(200).json(players);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};