const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MongoDB_URI, {})
  .then(() => console.log('MongoDB is connected'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Basic test route
app.get('/ping', (req, res) => {
  res.send('pong');
});

// API Routes
const routes = require('./routes');
app.use('/api', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
