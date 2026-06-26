# Node.js JWT Authentication API

A production-style backend authentication system built with **Node.js, Express, and MySQL**, designed using a **layered architecture (Controller → Service → Repository)** to ensure scalability, maintainability, and separation of concerns.

This project simulates real-world backend authentication systems used in modern web applications and APIs.

---

## Key Highlights

- Secure user authentication system using JWT  
- Scalable layered architecture (Controller → Service → Repository)  
- Password hashing using bcrypt  
- Protected API routes with middleware authentication  
- MySQL relational database integration  
- Environment-based configuration management  
- Clean and modular project structure aligned with production standards  

---

## Tech Stack

- Node.js  
- Express.js  
- MySQL  
- JSON Web Token (JWT)  
- bcrypt  
- dotenv  
- Nodemon  

---

## System Architecture

This project follows a clear layered architecture:
Client
→ Routes
→ Middleware
→ Controller
→ Service
→ Repository
→ MySQL Database

---

### Why this architecture?

- Separation of concerns for maintainability  
- Testable business logic inside service layer  
- Reusable data access layer via repository pattern  
- Scalable structure suitable for production applications  

---

## Core Features

### Authentication System

- User registration with validation-ready structure  
- Secure login with password hashing  
- JWT token generation for session management  

### Security

- Password encryption using bcrypt  
- Middleware-based route protection  
- Authorization header token validation  

### Database

- MySQL integration with connection pooling  
- Structured relational schema design  

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Authenticate user and generate token |

### User

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/user/profile | Get authenticated user profile |

---

## Authentication Flow

1. User registers with credentials  
2. User logs in with email/password  
3. Server validates credentials  
4. JWT token is generated  
5. Token is sent to client  
6. Token is used in `Authorization: Bearer <token>` header  
7. Middleware validates token for protected routes  

---

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
JWT_SECRET=your_jwt_secret

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=nodejs_boilerplate

---

## Installation & Setup

```bash
git clone https://github.com/<your-username>/nodejs-jwt-auth-api.git
cd nodejs-jwt-auth-api
npm install
npm run dev
```

---

## 🔮 Future Improvements

* Request validation (Joi)
* Global error handling middleware
* Logging (Winston)
* Refresh tokens
* Role-based access control

---

## What this project demonstrates

- Backend system design
- API architecture design
- Authentication & authorization workflows
- Database integration with Node.js
- Secure coding practices
- Real-world production-style structure

---

## 👨‍💻 Author

**Anas Yusuf**

Backend Developer

---
