// backend/routes/followers.js
const express = require('express');
const router = express.Router();
const follower = require('../models/follower');
const authMiddleware = require('../middleware/auth');

// Follow a user (requires authentication)
router.post('/follow/:userId', authMiddleware, async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Check if the user is trying to follow themselves
    if (userId === req.userId) {
      return res.status(400).json({ message: 'You cannot follow yourself' });
    }

    // Find the follower record for the authenticated user
    let follower = await Follower.findOne({ userId: req.userId });

    // If the follower record doesn't exist, create one
    if (!follower) {
      follower = new Follower({ userId: req.userId, followerIds: [] });
    }

    // Check if the user is already being followed
    if (!follower.followerIds.includes(userId)) {
      follower.followerIds.push(userId);
      await follower.save();
    }

    res.status(200).json({ message: 'User followed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Implement routes for unfollowing users, fetching followers, etc.

module.exports = router;
