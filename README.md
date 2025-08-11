# 🏠 Home Services Platform

A comprehensive **Home Services Platform** for connecting users with professional service providers.  
Built with:
- **React** for the user-facing frontend
- **Spring Boot** for the core backend API
- **ASP.NET Core** for the admin backend  

---

## 📚 Table of Contents
1. [About the Project](#about-the-project)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [SetUp Instructions](#setup-instructions)  
5. [Running Application](#running-application)  

---

## 1. About the Project

The **Home Services Platform** is a full-stack application where users can:
- Browse available home services
- Book appointments
- Manage bookings
- Make secure payments

Admins can:
- Manage service listings
- Approve/reject providers
- Monitor transactions and reports

---

## 2. Features

### User App
- 🔍 Browse services by category
- 📅 Book services and schedule appointments
- 💳 Online payment integration
- 📜 Booking history
- 👤 User profile management

### Admin Panel
- 🛠 Service management (CRUD)
- 👥 User & provider management
- 📊 Dashboard with analytics
- 🔐 Role-based authentication

---

## 3. Tech Stack

| Layer               | Technology                        |
|---------------------|-----------------------------------|
| Frontend            | React, React Router, Context-API  |
| User Backend        | Spring Boot, Maven, JPA           |
| Admin Backend       | ASP.NET Core, C#                  |
| Database            | MySQL                             |
| Authentication      | JWT / OAuth 2.0                   |

---

## 4. Setup Instructions

### Frontend (React)
```bash
cd frontend/
npm install
npm start        
npm run build
```

### User and Partner Backend (Spring Boot)
```bash
cd backend/
./mvnw clean install
./mvnw spring-boot:run
```

### Admin Backend (ASP.NET Core)
```bash
cd admin-backend/
dotnet restore
dotnet build
dotnet run
```

## 5. Running Application
1. Start the Spring Boot backend (mvn spring-boot:run)

2. Start the ASP.NET admin backend (dotnet run)

3. Start the React frontend (npm start)

### Access Points:

User application → http://localhost:9090

Admin panel → http://localhost:5173