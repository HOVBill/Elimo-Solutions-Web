const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const contactRoute = require('./routes/contact');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Security
app.use(helmet());

// Body parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// CORS (PRODUCTION SAFE)
const allowedOrigins = [
  "http://localhost:5173",            // local dev
  "https://elimosolutions.com",        // prod
  "https://www.elimosolutions.com"     // prod www
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Postman / server-to-server
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false
}));

// IMPORTANT: Allow preflight BEFORE rate limiting
app.options("*", cors());

// Logging
app.use(morgan('combined'));

// Rate limiter (API only)
const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 10 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX) || 6,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Routes
app.use('/api/contact', contactRoute);

// Health check
app.get('/', (req, res) => res.send('Contact API running'));

// Error handling
app.use(errorHandler);

module.exports = app;
