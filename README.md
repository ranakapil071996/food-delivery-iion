# 🍽️ Food Delivery App

A fully responsive full-stack food delivery application with login, category filtering, and persistent authentication.

---

## 🚀 Project Hosted

- **Frontend:** [https://food-delivery-iion.vercel.app](https://food-delivery-iion.vercel.app)
- **Backend:** [https://food-delivery-iion.onrender.com](https://food-delivery-iion.onrender.com)

---

## ✨ Features

- 🔐 Login screen with validation
- 🏠 Home screen with category filter functionality
- ✅ Integrated Login API
- 🔄 Login state persists on page refresh
- 🛠️ Signup screen not available — create users via Postman
- 📱 Fully responsive website

---

## 🧰 Tech Stack & Libraries

- **Frontend:** React, TypeScript, Vite, TailwindCSS, React Hook Form
- **State Management:** Redux Toolkit, Redux Persist
- **Backend:** Node.js, Express, MongoDB, JWT

---

## 🛠️ How to Run the Project Locally

1. Rename the `.envSample` files to `.env` inside both the `root` and `server/` directories.
2. Add your environment variable values (e.g., `MONGODB_URI`, `JWT_SECRET`, etc.).
3. From the root directory, run the following commands:

```bash
# Install dependencies for both frontend and backend
npm run install:all

# Start both the client and server
npm run dev
```

---

## 🔐 API Info

Since the Signup screen is not implemented in the UI, you can register a new user using Postman or similar tool:

```http
POST /api/auth/signup
Content-Type: application/json

{
  "username": "your_username",
  "password": "your_password"
}
```

---

## 📌 NOTE

These two applications are hosted on **free-tier plans**. If the services are not responding (which may happen due to inactivity on free hosting), feel free to reach out to me and I will redeploy them.

📧 **Email:** rana.kapil071996@gmail.com

---