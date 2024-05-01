const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// Load environment variables if necessary
require('dotenv').config();

// Import routes

const appointmentsRouter = require('./routes/appointments');
const adminRouter = require('./routes/auth');



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Routes

app.use('/appointments', appointmentsRouter);
app.use('/', adminRouter);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});