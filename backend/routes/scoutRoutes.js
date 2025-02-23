const express = require('express');
const scoutController = require('../controllers/scoutController');

const router = express.Router();

router.post('/', scoutController.createScout);
router.get('/', scoutController.getScouts);

module.exports = router;