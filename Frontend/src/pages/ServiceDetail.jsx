import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";

const serviceDetails = {
  "web-development": {
    title: "Web Development",
    description: "High-quality web solutions for enterprise efficiency.",
    features: [
        <><strong>Custom Responsive Designs</strong> – Sleek, mobile-friendly websites tailored to your brand</>,
        <><strong>E-Commerce Integration</strong> – Seamless online store setup with secure payment gateways</>,
        <><strong>CMS Development</strong> – Flexible WordPress or Headless CMS solutions for easy content management</>,
        <><strong>Performance Optimization</strong> – Fast, efficient websites optimized for speed and user experience</>,
    ],
  },
  "ai-automation": {
    title: "AI & Automation",
    description: "Streamline operations with intelligent automation.",
    features: [
        <><strong>Robotic Process Automation (RPA)</strong> – Automate repetitive tasks for efficiency and accuracy</>,
        <><strong>AI-Driven Data Analytics</strong> – Turn data into actionable insights with advanced AI tools.</>,
        <><strong>Workflow Automation</strong> – Streamline business processes for faster operations.</>,
        <><strong>Machine Learning Solutions</strong> – Implement predictive models to enhance decision-making</>,
    ],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure for your business.",
    features: [
        <><strong>Cloud Migration</strong> – Seamlessly move your systems to the cloud with minimal downtime</>,
        <><strong>Serverless Architecture</strong> – Build scalable, cost-efficient applications without managing servers</>,
        <><strong>Managed Cloud Hosting</strong> – Reliable, fully managed hosting for your cloud workloads</>,
        <><strong>Backup & Disaster Recovery</strong> – Protect your data and ensure business continuity</>,
    ],
  },
  "it-consulting": {
    title: "IT Consulting",
    description: "Expert advice to optimize your enterprise technology stack.",
    features: [
        <><strong>IT Strategy & Roadmap</strong> – Align technology with your business goals for growth and efficiency</>,
        <><strong>Infrastructure Audits</strong> – Assess and optimize your IT systems for performance and reliability</>,
        <><strong>Cybersecurity Consulting</strong> – Protect your assets with proactive security measures</>,
        <><strong>Cost Optimization</strong> – Reduce IT expenses while maximizing value and efficiency</>,
    ],
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceDetails[id];

  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  const translateX = useTransform(
    mouseX,
    [0, windowSize.width || 1],
    ["-60%", "-45%"]
  );
  const translateY = useTransform(
    mouseY,
    [0, windowSize.height || 1],
    ["-60%", "-45%"]
  );

  if (!service) {
    return (
      <div className="text-center py-32 text-white bg-black min-h-screen">
        <h1 className="text-3xl mb-4">Service Not Found</h1>
        <Link to="/services" className="text-accent underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#0a0a1a] to-gray-900 text-white pt-32 pb-20 px-6 sm:px-10 md:px-20 overflow-hidden">
      {/* Moving Glow Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#0D8DE6] to-[#AB01DE] blur-[160px] opacity-30 pointer-events-none"
        style={{ x: translateX, y: translateY }}
        animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content Card */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Glowing Title */}
        <div className="relative mb-12 text-center">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#0D8DE6] to-[#AB01DE] bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {service.title}
          </motion.h1>

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-8 bg-gradient-to-r from-[#0D8DE6]/40 to-[#AB01DE]/40 blur-3xl rounded-full"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Description */}
        <p className="text-gray-200 text-lg mb-10 text-center">
          {service.description}
        </p>

        {/* Features */}
        <h2 className="text-2xl font-semibold mb-4 text-white text-center">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-10 space-y-16 max-w-md mx-auto text-center sm:text-left">
          {service.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-[#0D8DE6] text-white px-6 py-3 rounded-lg hover:bg-[#0D8DE6]/80 transition"
          >
            ← Back to Services
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
