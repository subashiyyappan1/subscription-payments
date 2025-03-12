const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    stripeCustomerId: String,
    subscriptionStatus: { type: String, enum: ['active', 'canceled', 'pending'], default: 'pending' },
    subscriptionPlan: { type: String, enum: ['Basic', 'Premium', 'VIP'], default: 'Basic' }
});

module.exports = mongoose.model('User', UserSchema);
