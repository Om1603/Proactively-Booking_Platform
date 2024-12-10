# 🚀 Proactively Booking Platform

An intuitive web application for booking sessions with speakers, verifying user signup with OTPs, handling user authentication, and session management. Built using **Node.js**, **Express.js**, **Sequelize**, and **SQL** with RESTful APIs.

---

## 📖 Table of Contents

- [✨ Project Overview](#-project-overview)  
- [🔧 Features](#-features)  
- [🛠️ Tech Stack](#-tech-stack)  
- [💻 Installation](#-installation)  
- [🌟 Usage](#-usage)  
- [🧪 Testing](#-testing)  
- [📄 API Documentation](#-api-documentation)  
- [🛡️ Contributing](#-contributing)  
- [📜 License](#-license)

---

## ✨ Project Overview

Proactively Booking Platform is a modern web application that allows users to:

- **Sign up and verify accounts via OTP email verification.**  
- **Log in securely with JWT-based authentication.**  
- **Set up speaker profiles.**  
- **Search for speakers and book available sessions.**  
- **Receive email notifications upon session booking confirmation.**

The platform is designed for user-friendly session management, seamless speaker booking, and robust authentication to ensure security and ease of use.

---

## 🔧 Features

✅ **User Authentication**  
- Secure signup/login system with **email OTP verification**.  
- JWT-based user sessions.

✅ **Speaker Profiles**  
- Speakers can set up their expertise and session rates.

✅ **Session Booking**  
- Book available slots with speakers easily.  
- Email confirmation is sent after booking.

✅ **Real-time Feedback**  
- OTP handling through email notifications.  

✅ **Database Integration**  
- Managed with Sequelize ORM and a relational SQL database.

✅ **Clean & Modular Routes**  
- Designed with separation of concerns for better scalability and maintainability.

---

## 🛠️ Tech Stack

The application is built using the following technologies:

| Technology         | Description            |
|--------------------|------------------------|
| **Node.js**        | JavaScript runtime.    |
| **Express.js**     | Web framework for building REST APIs. |
| **Sequelize**      | ORM to manage SQL database models easily. |
| **PostgreSQL/MySQL** | Relational database for storing user/session/booking data. |
| **JWT**            | Secure authentication with JSON Web Tokens. |
| **Bcrypt**         | Password hashing for enhanced security. |
| **Nodemailer**     | Email notifications for OTPs & booking confirmation. |
| **dotenv**         | Securely manage environment variables. |

---

## 💻 Installation

To set up the **Proactively Booking Platform** locally, follow the steps below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Om1603/Proactively-Booking_Platform.git

2. **Navigate into the project directory**:

   ```bash
   cd Proactively-Booking_Platform
3. **Install dependencies**:

   ```bash
   npm install express body-parser cors sequelize mysql2 jwt-simple bcrypt nodemailer dotenv && npm install --save-dev nodemon eslint prettier
 
4. **Set environment variables**:
   Configure the .env file with your DB name & credentials

5. **Set the Email and Password**
   In the authRoutes.js and bookingRoutes.js set your email and AppPassword in the transported

6. **Start the Server**
   ```bash
   node app.js

## 📊 Database Schema
The following database schema is implemented for the application:

---

### `Users`

| Column       | Type           | Description                                     |
|---------------|----------------|-------------------------------------------------|
| `id`          | INT (PK)      | Unique user ID                                  |
| `firstName`   | VARCHAR(255)   | User's first name                               |
| `lastName`    | VARCHAR(255)   | User's last name                                |
| `email`       | VARCHAR(255)   | User's email address                            |
| `password`    | VARCHAR(255)   | Encrypted password                              |
| `userType`    | VARCHAR(255)   | Defines user type (speaker/user)               |
| `otp`         | VARCHAR(6)     | OTP sent to email during signup                |
| `otpExpires`   | TIMESTAMP      | Expiration date for OTP                        |
| `isVerified`   | BOOLEAN        | User email verification status                  |
| `createdAt`   | TIMESTAMP      | Record creation timestamp                       |
| `updatedAt`   | TIMESTAMP      | Record last update timestamp                    |

---
