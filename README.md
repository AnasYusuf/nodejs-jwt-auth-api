# Node.js JWT Auth API

A production-style REST API built with **Node.js**, **Express**, **MySQL**, and **JWT authentication**, following a layered architecture (**Controller → Service → Repository**) to create a scalable and maintainable backend application.

## 🚀 Features

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Password Hashing with bcrypt
* MySQL Integration
* Environment-based Configuration
* Layered Architecture
* Scalable Project Structure

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MySQL
* JSON Web Token (JWT)
* bcrypt
* dotenv
* Nodemon

---

## 📁 Project Structure

```text
nodejs-jwt-auth-api/

src/
├── config/
│   └── database.js
├── controllers/
│   ├── auth.controller.js
│   └── user.controller.js
├── middlewares/
│   └── auth.middleware.js
├── repositories/
│   └── user.repository.js
├── routes/
│   ├── auth.routes.js
│   └── user.routes.js
├── services/
│   └── auth.service.js

app.js
server.js
.env.example
README.md
```

---

## 🏗️ Architecture

```text
Client
  ↓
Routes
  ↓
Middleware
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
MySQL
```

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login a user        |

### User

| Method | Endpoint            | Description                                |
| ------ | ------------------- | ------------------------------------------ |
| GET    | `/api/user/profile` | Get authenticated user profile (Protected) |

---

## ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000

JWT_SECRET=your_jwt_secret

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=nodejs_boilerplate
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/<your-github-username>/nodejs-jwt-auth-api.git
```

Navigate to the project:

```bash
cd nodejs-jwt-auth-api
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🔐 Authentication Flow

1. Register a user
2. Login using email and password
3. Receive a JWT token
4. Pass the token in the request header

```text
Authorization: Bearer <jwt_token>
```

---

## 🧠 Key Concepts Implemented

* Layered backend architecture
* JWT-based authentication
* Middleware-based route protection
* Password hashing and verification
* Separation of concerns
* Repository pattern
* MySQL connection pooling

---

## 🔮 Future Improvements

* Request validation (Joi)
* Global error handling middleware
* Logging (Winston)
* Refresh tokens
* Role-based access control

---

## 👨‍💻 Author

**Anas Yusuf**

Backend Developer
