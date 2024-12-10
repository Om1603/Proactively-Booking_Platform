# 🚀 **Proactively Booking Platform**

An intuitive web application for booking sessions with speakers, verifying user signup with OTPs, handling user authentication, and session management. Built using **Node.js**, **Express.js**, **Sequelize**, and **SQL** with RESTful APIs.

---

## 📖 **Table of Contents**

- [✨ Project Overview](#-project-overview)  
- [🔧 Features](#-features)  
- [🛠️ Tech-Stack](#-tech-stack)
- [💻 Installation](#-installation)  
- [📄 API Documentation](#-api-documentation)   
- [📜 License](#-license)

---

## ✨ **Project Overview**

Proactively Booking Platform is a modern web application that allows users to:

- **Sign up and verify accounts via OTP email verification.**  
- **Log in securely with JWT-based authentication.**  
- **Set up speaker profiles.**  
- **Search for speakers and book available sessions.**  
- **Receive email notifications upon session booking confirmation.**

The platform is designed for user-friendly session management, seamless speaker booking, and robust authentication to ensure security and ease of use.

---

## 🔧 **Features**

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

## 🛠️ **Tech-Stack**

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

## 💻 **Installation**

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

## 📄 **API Documentation**

---

### **Endpoints**

Below is the list of available endpoints:

1. **Authentication**

   - `POST /auth/signup`: Register a new user and send OTP to email  
   - `POST /auth/verify-otp`: Verify user email via OTP  
   - `POST /auth/login`: Login with registered email & password  

---

2. **User Profile**

   - `POST /profile-setup`: Set up speaker profile (accessible only to speakers)  

---

3. **Speaker Directory**

   - `GET /speakers`: Get all speaker profiles  

---

4. **Booking**

   - `POST /bookings/book-session`: Book a session with a speaker  

---

> Refer to the full documentation for detailed endpoint descriptions.
> https://documenter.getpostman.com/view/40296080/2sAYBd98rV

---

# 📄 License

This project is licensed under the **MIT License**.

