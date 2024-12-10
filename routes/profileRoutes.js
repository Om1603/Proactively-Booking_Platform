const express = require('express');
const authMiddleware = require('../middleware/auth');
const Speaker = require('../models/Speaker');

const router = express.Router();

router.post('/setup', authMiddleware, async (req, res) => {
  const { expertise, sessionPrice } = req.body;
  const user = req.user;

  if (user.userType !== 'speaker') {
    return res.status(403).json({ message: 'Only speakers can set up profiles.' });
  }

  try {
    const speakerProfile = await Speaker.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      expertise,
      sessionPrice,
    });
    res.status(201).json({ message: 'Profile created successfully.', speakerProfile });
  } catch (error) {
    res.status(500).json({ message: 'Error creating profile.' });
  }
});

module.exports = router;
