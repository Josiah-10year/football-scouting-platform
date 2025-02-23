const Scout = require('../models/Scout');

exports.createScout = async (req, res) => {
  try {
    const scout = new Scout(req.body);
    await scout.save();
    res.status(201).json(scout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getScouts = async (req, res) => {
  try {
    const scouts = await Scout.find();
    res.status(200).json(scouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};