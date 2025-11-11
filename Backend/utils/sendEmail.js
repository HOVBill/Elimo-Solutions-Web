const nodemailer = require('nodemailer');

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    // Create transporter using secure TLS (port 465)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // optional: accept self-signed certificates
      },
    });

    // Verify connection configuration
    await transporter.verify();
    console.log('SMTP server is ready to take messages');

    // Send the email
    const info = await transporter.sendMail({
      from: `"Elimo Solutions" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log('Message sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Envelope:', info.envelope);
    console.log('Accepted:', info.accepted);
    console.log('Rejected:', info.rejected);

    return info;
  } catch (err) {
    console.error('Error sending email:', err);
    throw new Error('Failed to send email');
  }
};

module.exports = sendEmail;
