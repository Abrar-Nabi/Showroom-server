const express = require('express');
const User = require('../models/User'); // Adjust the path to your User model file
const router = express.Router();
router.get('/allusers', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  module.exports = router;
  