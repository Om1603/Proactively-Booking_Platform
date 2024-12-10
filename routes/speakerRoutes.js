const express = require('express');
const Speaker = require('../models/Speaker');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const speakers = await Speaker.findAll();
    res.status(200).json({ speakers });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch speakers.' });
  }
});

module.exports = router;
