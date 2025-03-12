const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    stripeSubscriptionId: String,
    plan: { type: String, enum: ['Basic', 'Premium', 'VIP'] },
    status: { type: String, enum: ['active', 'canceled', 'pending'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
