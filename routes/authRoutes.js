const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/User');

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET;

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourAppPassword',
  },
});

// User Signup
router.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password, userType } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Generate a random 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        userType,
        otp,
        otpExpires: Date.now() + 15 * 60 * 1000, // OTP valid for 15 minutes
      });
  
      // Send OTP to user's email
      const mailOptions = {
        from: 'process.env.EMAIL_USER',
        to: email,
        subject: 'OTP Verification for Signup',
        text: `Your OTP is: ${otp}`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending OTP email:', error);
          return res.status(500).json({ message: 'Failed to send OTP.' });
        }
  
        res.status(200).json({ message: 'Signup successful! OTP sent to email.' });
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      // Check if OTP is valid
      if (user.otp === otp && user.otpExpires > Date.now()) {
        user.isVerified = true;
        user.otp = null; // Clear OTP after successful verification
        user.otpExpires = null;
        await user.save();
  
        return res.status(200).json({ message: 'Account verified successfully.' });
      } else {
        return res.status(400).json({ message: 'Invalid OTP or OTP expired.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error verifying OTP.' });
    }
  });
  
  

// User Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
  
      if (!user.isVerified) {
        return res.status(403).json({ message: 'Please verify your email before logging in.' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials!' });
      }
  
      const token = jwt.sign(
        { id: user.id, userType: user.userType, firstName: user.firstName, lastName: user.lastName, email: user.email },
        jwtSecret,
        { expiresIn: '1h' }
      );
  
      return res.status(200).json({ token, message: 'Login successful!' });
    } catch (error) {
      res.status(500).json({ message: 'Server error!' });
    }
  });

module.exports = router;
