import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err.response?.data?.error ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-br from-[#1F033D] via-[#0D8DE6]/20 to-[#AB01DE]/20">
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[-15%] right-[-5%] w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/25 rounded-full blur-2xl animate-pulse-slow -translate-x-1/2 -translate-y-1/2"></div>

      {/* Octagons */}
      <div className="absolute top-16 left-1/4 w-32 h-32 bg-accent/10 clip-path-octagon blur-xl animate-pulse-slow hover:scale-110 transition-transform duration-500"></div>
      <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-secondary/10 clip-path-octagon blur-xl animate-pulse-slow hover:scale-105 transition-transform duration-500"></div>
      <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-primary/15 clip-path-octagon blur-xl animate-pulse-slow hover:scale-105 transition-transform duration-500"></div>

      {/* Section Header */}
      <h2 className="relative z-10 text-3xl sm:text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary drop-shadow-lg">
        Contact Us
      </h2>

      {/* Contact Card */}
      <div className="relative z-10 w-full max-w-md bg-[#1F033D]/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 p-6 flex flex-col gap-4">
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-[#1F033D]/80 border border-gray-500 text-white placeholder-white/70 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-[#1F033D]/80 border border-gray-500 text-white placeholder-white/70 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition text-sm"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-[#1F033D]/80 border border-gray-500 text-white placeholder-white/70 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition text-sm resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-accent to-secondary text-white font-medium p-3 rounded-md hover:scale-105 hover:brightness-110 transition-transform duration-300 text-sm"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Message */}
        {status.message && (
          <p
            className={`mt-2 text-center text-sm ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>

      {/* Footer Note */}
      <p className="relative z-10 mt-6 text-gray-300 text-xs text-center max-w-md">
        We respect your privacy and never share your data.
      </p>
    </section>
  );
}
