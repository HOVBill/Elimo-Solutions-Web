const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const contactRoute = require('./routes/contact');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || '*' }));
app.use(morgan('combined')); // logging

// Rate limiter
const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 10 * 60 * 1000, // 10 min default
  max: Number(process.env.RATE_LIMIT_MAX) || 6,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Routes
app.use('/api/contact', contactRoute);

// Health check
app.get('/', (req, res) => res.send('Contact API running'));

// Error handling middleware
app.use(errorHandler);

module.exports = app;
