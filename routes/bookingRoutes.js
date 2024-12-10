const express = require('express');
const authMiddleware = require('../middleware/auth');
const Booking = require('../models/Booking');
const User = require('../models/User');
const Speaker = require('../models/Speaker');
const nodemailer = require('nodemailer');

const router = express.Router();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourAppPass',
  },
});

router.post('/book', authMiddleware, async (req, res) => {
  const { speakerId, date, timeSlot } = req.body;
  const userId = req.user.id;

  const validSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
  ];

  if (!validSlots.includes(timeSlot)) {
    return res.status(400).json({ message: 'Invalid time slot.' });
  }

  try {
    const booking = await Booking.create({ userId, speakerId, date, timeSlot });
    const user = await User.findByPk(userId);
    const speaker = await Speaker.findByPk(speakerId);

    if (!speaker) {
      return res.status(404).json({ message: 'Speaker not found.' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: `${user.email}, ${speaker.email}`,
      subject: 'Session Booking Confirmation',
      text: `Your session with ${speaker.firstName} is confirmed for ${date} at ${timeSlot}.`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) return res.status(500).json({ message: 'Error sending email.' });
      res.status(200).json({ message: 'Booking successful, email sent.' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Error booking session.' });
  }
});

module.exports = router;
