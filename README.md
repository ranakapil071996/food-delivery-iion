# 🍽️ Food Delivery App

A fully responsive full-stack food delivery application with login, category filtering, and persistent authentication.

---

## 🚀 Project Hosted

- **Frontend:** [https://food-delivery-iion.vercel.app](https://food-delivery-iion.vercel.app)
- **Backend:** [https://food-delivery-iion.onrender.com](https://food-delivery-iion.onrender.com)

---

### 🔐 Test Credentials

You can use the following credentials to log in and test the application:

- **Username:** `kapil.rana@iion.io`  
- **Password:** `12345678`

---

## ✨ Features

- 🔐 Login screen with validation
- 🏠 Home screen with category filter functionality
- ✅ Integrated Login API
- 🔄 Login state persists on page refresh
- 📱 Fully responsive website

---

## ✨ Things to Remember

- 🛠️ **Signup Screen Not Implemented**  
  User registration is not available through the UI. You can create users manually using Postman or any API testing tool.

- 🛠️ **Logout Action via Menu**  
  The logout functionality can be accessed by clicking the Menu (hamburger icon). The logout button is not part of the original design, so it was added for testing purposes only.

---

## 🧰 Tech Stack & Libraries

- **Frontend:** React, TypeScript, Vite, TailwindCSS, React Hook Form
- **State Management:** Redux Toolkit, Redux Persist, RTK Query
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