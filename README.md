# 🌾 KISAN-SATHI  – AI Powered Farming Assistant

> Empowering Farmers Through Technology

## 👨‍💻 Team Information

### Team Name

**Tech Cops**

### Team Members

* Santu Saha
* Krishanu Kuilya
* Rounak Singh

### Problem Statement

**Agriculture and Rural Development**

---

## 🌟 Project Overview

**KISAN-SATHI (Krishi-Mitra)** is an AI-powered digital farming assistant designed to support farmers with instant agricultural guidance, government scheme information, weather-based advisories, and support services. The platform aims to bridge the information gap between modern agricultural technologies and rural farming communities.

By integrating Artificial Intelligence, multilingual communication, and farmer-centric services, KISAN-SATHI helps farmers make informed decisions and improve productivity.

### 🔗 Live Demo

https://krishi-mitra-lmog.vercel.app/

---

## ✨ Key Features

### 🤖 AI Farming Assistant

* Intelligent chatbot powered by Groq and Llama AI.
* Answers farming-related questions instantly.
* Provides crop, soil, fertilizer, and pest management guidance.

### 🌐 Multilingual Support

* English
* Hindi
* Bengali

### 🔐 Secure Authentication

* User Signup & Login system.
* JWT-based authentication for secure access.

### 👤 Farmer Profile Management

* Update and manage personal information.
* Personalized farming assistance.

### 🏛 Government Schemes Information

* Access details of farmer welfare schemes.
* Easy-to-understand information and eligibility guidance.

### 🌦 Weather & Advisory Support

* Weather-related farming recommendations.
* Alerts and agricultural suggestions.

### 🆘 Help & Support System

* Farmers can submit queries and support requests.
* Centralized help management.

### 📱 Responsive Design

* Mobile-first user interface.
* Works smoothly across devices.

---

## 🛠 Technology Stack

| Category       | Technology                      |
| -------------- | ------------------------------- |
| Frontend       | HTML5, Tailwind CSS, JavaScript |
| Backend        | Node.js, Express.js             |
| AI Engine      | Groq API + Llama Model          |
| Authentication | JWT (JSON Web Token)            |
| Data Storage   | JSON File Storage               |
| Deployment     | Vercel                          |

---

## 📂 Project Structure

```text
Kisan-Sathi/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── users.json
│   ├── help_messages.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── auth.html
│   ├── help-messages.html
│   ├── web.js
│   ├── style.css
│   └── credentials/
│
└── README.md
```

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Kisan-Sathi
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Create Environment Variables

Create a `.env` file inside the backend folder:

```env
GROQ_API_KEY=your_groq_api_key
PORT=5000
```

### 4. Start Backend Server

```bash
npm start
```

or

```bash
node server.js
```

### 5. Run Frontend

Open `index.html` in your browser or deploy the frontend on Vercel.

---

## 📡 API Endpoints

### Authentication

```http
POST /api/signup
POST /api/login
```

### AI Assistant

```http
POST /api/chat
```

### Profile Management

```http
PUT /api/profile
```

### Help & Support

```http
POST /api/help-messages
GET /api/help-messages
```

---

## 🔒 Security Features

* JWT Authentication
* Protected Routes
* CORS Protection
* Input Validation
* Secure API Access

---

## 📸 Application Modules

* Home Dashboard
* AI Chat Assistant
* Government Schemes Section
* Farmer Profile Management
* Help & Support Portal
* Multilingual Interface

---

## 🎯 Project Objectives

* Support farmers with accurate agricultural information.
* Improve access to government schemes and services.
* Provide AI-driven decision support.
* Promote digital transformation in rural communities.
* Enhance agricultural productivity through technology.

---

## 🚀 Future Enhancements

* Voice-Based AI Assistant
* Real-Time Weather Integration
* Crop Disease Detection Using Images
* Market Price Prediction
* Mobile Application Development
* Regional Language Expansion

---

## 💡 Conclusion

KISAN-SATHI is a step towards smarter agriculture and sustainable rural development. By combining Artificial Intelligence with farmer-focused services, the platform aims to create a reliable digital companion that empowers farmers and contributes to the growth of the agricultural sector.


### Developed with ❤️ by Team Tech Cops
