import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("dark"); // Toggle theme
  const [submitEffect, setSubmitEffect] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE || "http://localhost:4000"}/api/contact`,
        formData
      );

      if (res.status === 200) {
        setStatus({ type: "success", message: "Message sent successfully!" });

        // Success glow effect
        setSubmitEffect("success-glow");
        setTimeout(() => setSubmitEffect(""), 1200);

        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err.response?.data?.error ||
          "Something went wrong. Please try again later.",
      });

      // Shake on error
      setSubmitEffect("shake");
      setTimeout(() => setSubmitEffect(""), 600);

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`contact-wrapper ${theme}`}>
      
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Header */}
      <h2 className="contact-title">Contact Us</h2>

      {/* 3D Floating Contact Card */}
      <div className={`contact-card ${submitEffect}`} id="contact-card">
        <form onSubmit={handleSubmit} className="contact-form">

          {/* Name */}
          <div className="input-icon-group">
            <span className="icon">👤</span>
            <input
              className="contact-input"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="input-icon-group">
            <span className="icon">📧</span>
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div className="input-icon-group">
            <span className="icon">💬</span>
            <textarea
              className="contact-input"
              name="message"
              rows="4"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={loading} className="contact-btn">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Text */}
        {status.message && (
          <p className={`status ${status.type}`}>{status.message}</p>
        )}
      </div>

      {/* Contact Info Icons Under Card */}
      <div className="contact-icons">
        <div><span>📞</span> +27 79 445 8558</div>
        <div><span>📧</span> info@elimosolutions.com</div>
        <div><span>📍</span> Gauteng, South Africa</div>
      </div>

      <p className="contact-footer">We respect your privacy and will never share your data.</p>

    </section>
  );
}
