const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');
const Subscription = require('../models/Subscription');

// Subscription Plans (Set up in Stripe Dashboard)
const plans = {
    Basic: "price_12345",    // Replace with actual price ID from Stripe
    Premium: "price_67890",
    VIP: "price_11223"
};

// Create Stripe Checkout Session
router.post('/create-subscription', async (req, res) => {
    try {
        const { email, plan } = req.body;

        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ email, subscriptionPlan: plan });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'subscription',
            customer_email: email,
            line_items: [
                {
                    price: plans[plan],
                    quantity: 1
                }
            ],
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel'
        });

        res.json({ sessionId: session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Handle Stripe Webhook for subscription status updates
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];

    try {
        const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            const user = await User.findOne({ email: session.customer_email });

            if (user) {
                await Subscription.create({
                    userId: user._id,
                    stripeSubscriptionId: session.subscription,
                    plan: user.subscriptionPlan,
                    status: 'active'
                });

                user.subscriptionStatus = 'active';
                await user.save();
            }
        }

        res.json({ received: true });
    } catch (err) {
        console.error(err);
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
});

module.exports = router;
