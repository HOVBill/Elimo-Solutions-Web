import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import {
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaNetworkWired,
} from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { BsDatabaseCheck } from "react-icons/bs";

import "../styles/services.css";

/* ============================
   SERVICES DATA
============================ */
const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, scalable, and secure web platforms engineered for enterprise performance and seamless user experience.",
    icon: <FaLaptopCode size={42} />,
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "AI-powered automation and predictive intelligence to streamline operations and accelerate decision-making.",
    icon: <FaRobot size={42} />,
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "Cloud architecture, migration, monitoring, and optimization designed for resilience, scalability, and cost efficiency.",
    icon: <FaCloud size={42} />,
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description:
      "Strategic IT advisory services that help organizations modernize their infrastructure, security posture, and workflows.",
    icon: <MdOutlineManageAccounts size={42} />,
  },
  {
    id: "infrastructure",
    title: "Infrastructure Services",
    description:
      "Enterprise-grade infrastructure including servers, networking, virtualization, and high-availability systems.",
    icon: <FaNetworkWired size={42} />,
  },
  {
    id: "erp-solutions",
    title: "Enterprise Resource Planning",
    description:
      "Custom ERP deployment and integration to unify operations, finance, HR, and logistics into one intelligent platform.",
    icon: <RiDashboard3Line size={42} />,
  },
  {
    id: "business-data-analysis",
    title: "Business & Data Analysis",
    description:
      "Advanced analytics, reporting, and dashboards that turn raw data into actionable insights and strategic direction.",
    icon: <BsDatabaseCheck size={40} />,
  },
];

export default function Services() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 1, height: 1 });
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("search")?.toLowerCase() || "";


  useEffect(() => {
    const resize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  const px = (x1, x2) => useTransform(mouseX, [0, windowSize.width], [x1, x2]);
  const py = (y1, y2) => useTransform(mouseY, [0, windowSize.height], [y1, y2]);

  return (
    <div className="services-wrapper">

      {/* BACKGROUND EFFECTS */}
      <motion.div className="parallax-orb orb-1" style={{ x: px("-25%", "-20%"), y: py("-25%", "-20%") }} />
      <motion.div className="parallax-orb orb-2" style={{ x: px("-15%", "-10%"), y: py("-15%", "-10%") }} />
      <motion.div className="parallax-orb orb-3" style={{ x: px("-10%", "-5%"), y: py("-10%", "-5%") }} />

      <motion.div className="octagon octagon-lg" />
      <motion.div className="octagon octagon-md" />
      <motion.div className="octagon octagon-sm" />

      {/* HEADER (TEXT LAYER) */}
      <motion.header
        className="services-header text-layer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">
          Enterprise-grade digital solutions engineered for scale, security, and performance.
        </p>
      </motion.header>

      {/* SERVICES GRID */}
      <section className="services-grid">
        {services
          .filter(
            (s) =>
              s.title.toLowerCase().includes(query) ||
              s.description.toLowerCase().includes(query)
          )
          .map((s, i) => (
          <Link key={s.id} to={`/services/${s.id}`} className="service-link">
            <motion.article
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className="service-card-icon">{s.icon}</div>
              <h2 className="service-card-title">{s.title}</h2>
              <p className="service-card-description">{s.description}</p>
            </motion.article>
          </Link>
        ))}
      </section>

    </div>
  );
}
