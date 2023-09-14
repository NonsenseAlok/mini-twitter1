// backend/models/Follower.js
const mongoose = require('mongoose');

const followerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  followerIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  }],
});

const Follower = mongoose.model('Follower', followerSchema);

module.exports = Follower;
