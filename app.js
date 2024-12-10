// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./db');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test Database Connection
sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.log('Error: ' + err));

sequelize.sync();

// Import and Use Routes
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const speakerRoutes = require('./routes/speakerRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/speakers', speakerRoutes);
app.use('/bookings', bookingRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
