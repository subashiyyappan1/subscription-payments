📽️ Video Subscription Platform (Node.js + Stripe + MongoDB) 🚀
📌 Overview
This is a simple video subscription platform built using Node.js, Express, MongoDB, and Stripe for handling payments.
Users can select a subscription plan (Basic, Premium, VIP) and make payments via Stripe.

🎯 Features
✅ User Registration & Subscription Management
✅ Stripe Payment Integration (Checkout & Webhooks)
✅ MongoDB for User & Subscription Storage
✅ Webhook Handling for Subscription Updates

🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Payment Gateway: Stripe
🚀 Installation
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-repo/video-subscription-platform.git
cd video-subscription-platform
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory and add your credentials:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/video-subscription
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
4️⃣ Start the Server
sh
Copy
Edit
node server.js
🔗 API Endpoints
🎟️ 1. Create Subscription Checkout Session
Endpoint: POST /api/payments/create-subscription

🔹 Request Body:
json
Copy
Edit
{
"email": "user@example.com",
"plan": "Basic"  
}
🔹 Response:
json
Copy
Edit
{
"sessionId": "cs_test_12345"
}
🔄 2. Stripe Webhook
Endpoint: POST /api/payments/webhook
This handles payment success and updates the subscription status.

📂 Project Structure
pgsql
Copy
Edit
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
🔜 Next Steps
🔹 Frontend Integration (React/Next.js)
🔹 Subscription Dashboard
🔹 Access Control for Videos

📜 License
This project is licensed under the MIT License.

✨ Author
👨‍💻 Subash Iyyappan
