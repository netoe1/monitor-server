const express = require('express');
const router = express.Router();
const controller = require('../controller/log');
router.post('/add',controller.addLog);

module.exports = router;