import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCloud, FaRobot, FaLaptopCode, FaCogs } from "react-icons/fa";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "High-quality web solutions for enterprise efficiency.",
    icon: <FaLaptopCode size={36} />,
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Streamline operations with intelligent automation.",
    icon: <FaRobot size={36} />,
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure for your business.",
    icon: <FaCloud size={36} />,
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description: "Expert advice to optimize your enterprise technology stack.",
    icon: <FaCogs size={36} />,
  },
];

export default function Services() {
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 1, height: 1 });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
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

  // Parallax transforms
  const translateX1 = useTransform(mouseX, [0, windowSize.width], ["-25%", "-20%"]);
  const translateY1 = useTransform(mouseY, [0, windowSize.height], ["-25%", "-20%"]);

  const translateX2 = useTransform(mouseX, [0, windowSize.width], ["-15%", "-10%"]);
  const translateY2 = useTransform(mouseY, [0, windowSize.height], ["-15%", "-10%"]);

  const translateX3 = useTransform(mouseX, [0, windowSize.width], ["-10%", "-5%"]);
  const translateY3 = useTransform(mouseY, [0, windowSize.height], ["-10%", "-5%"]);

  // Octagon transforms (slightly slower for depth effect)
  const translateX4 = useTransform(mouseX, [0, windowSize.width], ["-5%", "5%"]);
  const translateY4 = useTransform(mouseY, [0, windowSize.height], ["-5%", "5%"]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Multi-layer rotating glow orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#0D8DE6] to-[#AB01DE] blur-[180px] opacity-25 pointer-events-none z-0"
        style={{ x: translateX1, y: translateY1 }}
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#AB01DE] to-[#0D8DE6] blur-[140px] opacity-20 pointer-events-none top-[15%] left-[65%] z-0"
        style={{ x: translateX2, y: translateY2 }}
        animate={{ rotate: [360, 0] }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#0D8DE6]/60 to-[#AB01DE]/60 blur-[120px] opacity-15 pointer-events-none top-[60%] left-[10%] z-0"
        style={{ x: translateX3, y: translateY3 }}
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />

      {/* Slight semi-transparent octagons */}
      <motion.div
        className="absolute w-[200px] h-[200px] bg-white/5 backdrop-blur-sm clip-path-octagon opacity-30 pointer-events-none z-0 top-[20%] left-[10%]"
        style={{ x: translateX4, y: translateY4 }}
        animate={{ rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 40, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[150px] h-[150px] bg-white/5 backdrop-blur-sm clip-path-octagon opacity-25 pointer-events-none z-0 top-[70%] left-[75%]"
        style={{ x: translateX4, y: translateY4 }}
        animate={{ rotate: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 50, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[180px] h-[180px] bg-white/5 backdrop-blur-sm clip-path-octagon opacity-20 pointer-events-none z-0 top-[40%] left-[50%]"
        style={{ x: translateX4, y: translateY4 }}
        animate={{ rotate: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 60, ease: "easeInOut" }}
      />

      {/* Page Header */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 pt-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg bg-gradient-to-r from-[#0D8DE6] to-[#AB01DE] bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl">
          We provide enterprise-grade solutions to help your business scale efficiently and securely.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 sm:px-10 md:px-20 mt-20">
        {services.map((service, idx) => (
          <Link key={service.id} to={`/services/${service.id}`} className="group">
            <motion.div
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer hover:bg-white/20 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <div className="text-[#0D8DE6] mb-4">{service.icon}</div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">{service.title}</h2>
              <p className="text-gray-200 text-sm sm:text-base">{service.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
