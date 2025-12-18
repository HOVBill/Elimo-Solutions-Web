import React from "react";
import { motion } from "framer-motion";
import "../styles/UsPage.css";

export default function UsPage() {
  return (
    <div className="us-wrapper elimo-us">

      {/* Background Glow */}
      <div className="us-glow glow-left" />
      <div className="us-glow glow-right" />

      {/* ================= HEADER ================= */}
      <motion.section
        className="us-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Who We Are</h1>
        <p>
          Elimo Solutions is a technology-driven company delivering modern IT,
          automation, cloud, analytics, and sustainable digital solutions.
        </p>
      </motion.section>

      {/* ================= STORY ================= */}
      <motion.section
        className="us-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Our Story</h2>

        <div className="glass">
          <p>
            Elimo Solutions was established with a vision to bridge traditional
            business models and next-generation digital systems.
          </p>
          <p>
            Our experience across multiple industries enables us to innovate
            responsibly and deliver long-term value.
          </p>
        </div>
      </motion.section>

      {/* ================= MISSION & VISION ================= */}
      <div className="us-grid">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1 }}>
          <h2 className="section-title">Our Mission</h2>
          <div className="glass">
            <p>To empower enterprises...</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1 }}>
          <h2 className="section-title">Our Vision</h2>
          <div className="glass">
            <p>To become a trusted global technology partner...</p>
          </div>
        </motion.div>
      </div>


      {/* ================= VALUES ================= */}
      <section className="us-section">
        <h2 className="section-title">Our Core Values</h2>

        <div className="values-grid">
          {[
            ["Innovation", "Forward-thinking solutions that drive change."],
            ["Integrity", "Honest, transparent and responsible delivery."],
            ["Excellence", "Precision engineering and high-quality systems."],
            ["Sustainability", "Technology designed for long-term impact."]
          ].map(([title, text], i) => (
            <div key={i} className="glass value-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ADVOCACY ================= */}
      <section className="us-section">
        <h2 className="section-title">Our Commitments & Advocacy</h2>
        <p className="section-intro">
          We stand with initiatives that promote equality, safety,
          sustainability, and community empowerment.
        </p>

        <div className="allies-grid">
          {[
            ["lgbtqi.png", "LGBTQI+ Inclusion", "Equality and inclusive workplaces."],
            ["green-economy.png", "Green Economy", "Eco-conscious digital transformation."],
            ["health.png", "Health & Safety", "Safe and compliant environments."],
            ["recycling.png", "Electronic Recycling", "Responsible e-waste management."],
            ["gbv.png", "GBV Awareness", "Prevention and education."],
            ["children.png", "Child Protection", "Safety, education and opportunity."]
          ].map(([img, title, text], i) => (
            <div key={i} className="glass ally-card">
              <img src={`/images/${img}`} alt={title} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROMISE ================= */}
      <motion.section
        className="us-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="section-title">Our Promise</h2>
        <div className="glass">
          <p>
            We commit to ethical, secure, and sustainable technology solutions
            that empower people and shape a better digital future.
          </p>
        </div>
      </motion.section>

    </div>
  );
}

