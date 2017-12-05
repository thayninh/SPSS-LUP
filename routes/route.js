const express = require('express');
const router = express.Router();
const parameters = require('../models/configParameters')

/* ==============
     Post parameters Route
  ============== */
  router.post('/config', (req, res, next) => {
    res.json(req.body);
  });

module.exports = router;