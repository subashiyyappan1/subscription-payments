# 📽️ Video Subscription Platform (Node.js + Stripe + MongoDB) 🚀

## 📌 Overview
This is a simple **video subscription platform** built using **Node.js, Express, MongoDB, and Stripe** for handling payments.  
Users can select a **subscription plan** (Basic, Premium, VIP) and make payments via Stripe.

## 🎯 Features
- ✅ **User Registration & Subscription Management**
- ✅ **Stripe Payment Integration (Checkout & Webhooks)**
- ✅ **MongoDB for User & Subscription Storage**
- ✅ **Webhook Handling for Subscription Updates**

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payment Gateway:** Stripe

## 🚀 Installation

## 🔗 API Endpoints
🎟️ 1. Create Subscription Checkout Session
🔹 Endpoint: POST /api/payments/create-subscription

📤 Request Body:

```python
{
  "email": "user@example.com",
  "plan": "Basic"  
}
```

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/video-subscription-platform.git
cd video-subscription-platform

/video-subscription
│-- server.js
│-- .env
│-- models/
│   ├── User.js
│   ├── Subscription.js
│-- routes/
│   ├── paymentRoutes.js
│-- config/
│   ├── db.js
```

## 🔗 API Endpoints
 🎟️ 1. Create Subscription Checkout Session
 Endpoint: POST /api/payments/create-subscription

🔹 Request Body:
```sh
{
  "email": "user@example.com",
  "plan": "Basic"  
}
```
🔹 Request Body:
```
{
  "sessionId": "cs_test_12345"
}
```

# 📜 License
This project is licensed under the MIT License.

# ✨ Author
👨‍💻 Subash Iyyappan
