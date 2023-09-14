const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost/twitter-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Mongoose schemas for User, Tweet, and Follower
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  // Additional user fields
});

const tweetSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // Additional tweet fields
});

const followerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  followerIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const user = mongoose.model('user', userSchema);
const tweet = mongoose.model('tweet', tweetSchema); 
const follower = mongoose.model('follower', followerSchema);

// JWT secret key
const JWT_SECRET = 'your-secret-key';

// REST API routes (users, tweets, followers)
// Implement these routes in separate files
app.use('/api/users', require('./routes/users'));
app.use('/api/tweets', require('./routes/tweets'));
app.use('/api/followers', require('./routes/followers'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
