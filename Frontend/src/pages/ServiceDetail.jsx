import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "../styles/ServiceDetail.css";

const serviceDetails = {
  "web-development": {
    title: "Web Development",
    description:
      "Modern, scalable, and secure web platforms engineered for enterprise performance and seamless user experience.",
    features: [
      <>
        <strong>Custom Responsive Designs</strong> – Tailored UI/UX optimized
        for all devices.
      </>,
      <>
        <strong>E-Commerce Integration</strong> – Secure, scalable online shops
        with seamless checkout flows.
      </>,
      <>
        <strong>CMS Development</strong> – WordPress, Headless CMS, and custom
        admin dashboards.
      </>,
      <>
        <strong>Performance Optimization</strong> – Lightning-fast load speeds
        and SEO-ready architecture.
      </>,
    ],
  },

  "ai-automation": {
    title: "AI & Automation",
    description:
      "AI-driven automation that increases efficiency, reduces manual workload, and enhances decision-making.",
    features: [
      <>
        <strong>Robotic Process Automation (RPA)</strong> – Eliminate repetitive
        manual tasks.
      </>,
      <>
        <strong>AI Analytics</strong> – Extract intelligent insights from your
        data.
      </>,
      <>
        <strong>Workflow Automation</strong> – Faster, optimized business
        processes.
      </>,
      <>
        <strong>Machine Learning Models</strong> – Predictive intelligence for
        smarter decisions.
      </>,
    ],
  },

  "cloud-solutions": {
    title: "Cloud Solutions",
    description:
      "Secure, resilient, and scalable cloud architecture designed for modern enterprises.",
    features: [
      <>
        <strong>Cloud Migration</strong> – Zero-downtime migration strategies.
      </>,
      <>
        <strong>Serverless Architecture</strong> – Scalable, cost-efficient
        backend systems.
      </>,
      <>
        <strong>Managed Cloud Hosting</strong> – 24/7 monitoring and maintenance.
      </>,
      <>
        <strong>Backup & Disaster Recovery</strong> – Ensure business continuity.
      </>,
    ],
  },

  "it-consulting": {
    title: "IT Consulting",
    description:
      "Strategic consulting that aligns your technology roadmap with business growth.",
    features: [
      <>
        <strong>IT Strategy & Roadmaps</strong> – Plan for the future of your
        business.
      </>,
      <>
        <strong>Infrastructure Audits</strong> – Improve reliability and uptime.
      </>,
      <>
        <strong>Cybersecurity Consulting</strong> – Protect critical systems.
      </>,
      <>
        <strong>Cost Optimization</strong> – Reduce tech spend while improving
        output.
      </>,
    ],
  },

  "infrastructure": {
    title: "Infrastructure Services",
    description:
      "Robust enterprise-grade infrastructure that supports performance at scale.",
    features: [
      <>
        <strong>Networking & Servers</strong> – High-availability architecture.
      </>,
      <>
        <strong>Virtualization</strong> – Efficient, scalable resource usage.
      </>,
      <>
        <strong>Hardware Deployment</strong> – Enterprise routers, switches, and
        storage.
      </>,
      <>
        <strong>System Monitoring</strong> – Real-time performance analytics.
      </>,
    ],
  },

  "erp-solutions": {
    title: "Enterprise Resource Planning",
    description:
      "Centralized ERP systems that unify operations, finance, HR, logistics, and analytics.",
    features: [
      <>
        <strong>Custom ERP Deployment</strong> – Tailored modules for your
        workflow.
      </>,
      <>
        <strong>Process Integration</strong> – Sync all departments seamlessly.
      </>,
      <>
        <strong>Reporting Dashboards</strong> – Real-time insights.
      </>,
      <>
        <strong>Automation within ERP</strong> – Reduce manual entry.
      </>,
    ],
  },

  "business-data-analysis": {
    title: "Business & Data Analysis",
    description:
      "Data-driven decision-making powered by advanced analytics and reporting.",
    features: [
      <>
        <strong>Data Warehousing</strong> – Unified, structured storage.
      </>,
      <>
        <strong>BI Dashboards</strong> – Real-time KPI tracking.
      </>,
      <>
        <strong>Predictive Analytics</strong> – Better forecasting.
      </>,
      <>
        <strong>Process Insights</strong> – Identify inefficiencies and
        opportunities.
      </>,
    ],
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceDetails[id];

  // Parallax mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 1, height: 1 });

  useEffect(() => {
    const resize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const translateX = useTransform(mouseX, [0, windowSize.width], ["-55%", "-40%"]);
  const translateY = useTransform(mouseY, [0, windowSize.height], ["-55%", "-40%"]);

  if (!service) {
    return (
      <div className="service-not-found">
        <h1>Service Not Found</h1>
        <Link to="/services">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-wrapper">

      {/* PARALLAX ORB */}
      <motion.div
        className="detail-orb"
        style={{ x: translateX, y: translateY }}
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* CONTENT CARD */}
      <motion.div
        className="detail-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="detail-title">{service.title}</h1>

        <p className="detail-description">{service.description}</p>

        <h2 className="feature-heading">Key Features</h2>

        <ul className="feature-list">
          {service.features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>

        <div className="detail-back">
          <Link to="/services">← Back to Services</Link>
        </div>
      </motion.div>
    </div>
  );
}
