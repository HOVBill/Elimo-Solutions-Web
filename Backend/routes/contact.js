const express = require('express');
const { body, validationResult } = require('express-validator');
const sendEmail = require('../utils/sendEmail');

const router = express.Router();

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').trim().notEmpty().withMessage('Message cannot be empty'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

      const { name, email, message } = req.body;

      const subject = `New Contact Message from ${name}`;
      const text = `You have received a new message from ${name} (${email}):\n\n${message}`;
      const html = `
        <p>You have received a new message from <strong>${name}</strong> (<a href="mailto:${email}">${email}</a>):</p>
        <p>${message}</p>
      `;

      try {
        await sendEmail({
          to: process.env.BUSINESS_EMAIL,
          subject,
          text,
          html,
        });
      } catch (err) {
        console.error('Email sending error:', err);
        return res.status(500).json({
          success: false,
          message: 'Failed to send your message. Please try again later.',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully!',
      });
    } catch (err) {
      console.error('Unexpected error in contact route:', err);
      return res.status(500).json({
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      });
    }
  }
);

module.exports = router;
