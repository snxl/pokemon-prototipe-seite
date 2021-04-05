const express = require('express');
const legendariesController = require('../controllers/LegendariesController');
const router = express.Router();

/* GET legendaries. */
router.get('/', legendariesController.index);

module.exports = router;
