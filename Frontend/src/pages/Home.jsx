import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from "../assets/background1.jpg";
import sectionBg from "../assets/background2.jpg";
import "../styles/Home.css";      // <-- UPDATED
import styles from "../components/Navbar.module.css";

export default function Home() {
  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative">

      {/* ================================
          HERO SECTION
      ================================== */}
      <div
        className="hero-section flex flex-col justify-center items-center px-4 pt-28"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-overlay"></div>

        <motion.div
          className="hero-content space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeInUp}>
            <h1 className="hero-heading">
              Empowering enterprises with next-generation technology
            </h1>
            <p className="hero-subtext">
              We build resilient systems, beautiful interfaces, and intelligent automation
              so your teams can focus on impact.
            </p>
          </motion.div>

          {/* Welcome Box */}
          <motion.div className="info-card" variants={fadeInUp}>
            <h2 className="text-3xl font-semibold mb-3">Welcome to Elimo Solutions</h2>
            <p className="text-lg">
              We help businesses unlock their full potential through intelligent IT
              solutions, automation, and innovation.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div className="grid md:grid-cols-2 gap-8" variants={fadeInUp}>
            <div className="info-card">
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">Our Mission</h3>
              <p>
                To empower enterprises with resilient IT infrastructure, automation,
                and AI-driven solutions that drive efficiency and impact.
              </p>
            </div>

            <div className="info-card">
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">Our Vision</h3>
              <p className="mb-4">
                To be the leading partner for scalable, intelligent digital solutions
                across global industries.
              </p>
              <Link to="/services" className="contactButton">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================================
          SECTION 2 — WHY CHOOSE US
      ================================== */}
      <div
        className="section"
        style={{ backgroundImage: `url(${sectionBg})` }}
      >
        <div className="section-overlay-light"></div>

        <motion.div
          className="section-content space-y-8 text-black"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={fadeInUp}>
            Why Choose Elimo Solutions?
          </motion.h2>

          <motion.p className="section-subtext" variants={fadeInUp}>
            We combine innovation, expertise, and reliability to deliver transformative technology.
          </motion.p>

          <motion.div className="grid md:grid-cols-3 gap-6" variants={fadeInUp}>
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p>Experienced professionals delivering high-impact solutions.</p>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-2">Reliable Solutions</h3>
              <p>Resilient systems ensuring smooth and uninterrupted operations.</p>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-2">Cutting-edge Technology</h3>
              <p>Modern AI, automation, and cloud systems built for efficiency.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================================
          SECTION 3 — SERVICES
      ================================== */}
      <div
        className="section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="section-overlay-dark"></div>

        <motion.div
          className="section-content text-white space-y-12 max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2 className="section-title" variants={fadeInUp}>
            Our Services
          </motion.h2>

          <motion.p className="section-subtext" variants={fadeInUp}>
            Tailored enterprise solutions for modern industries.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-8"
            variants={fadeInUp}
          >
            {[
              {
                src: "/images/cloud-storage.png",
                title: "Cloud Migration & Management",
                desc: "We move your systems to the cloud and manage them so they are secure, reliable, and cost-effective."
              },
              {
                src: "/images/man-developing-website-on-desk.png",
                title: "AI & Machine Learning",
                desc: "We use smart technology to automate tasks, find patterns in data, and improve business efficiency."
              },
              {
                src: "/images/design-and-development-process.png",
                title: "DevOps & IaC",
                desc: "We automate software delivery and system management to make updates faster, safer, and more reliable."
              },
              {
                src: "/images/women-web-developer-with-laptop.png",
                title: "Data Engineering & Analytics",
                desc: "We collect, organize, and analyze data to give you clear reports and useful business insights."
              },
              {
                src: "/images/startup-launch.png",
                title: "Sustainability & Green IT",
                desc: "We design IT systems that use less energy, reduce waste, and support long-term sustainability goals."
              },
              {
                src: "/images/anonymous.png",
                title: "Infrastructure Services",
                desc: "We set up and maintain servers, networks, and systems that keep your business running smoothly."
              },
              {
                src: "/images/woman-explaining-business-graph.png",
                title: "Business Process Engineering",
                desc: "We improve how your business works by simplifying processes and removing unnecessary manual steps."
              },
              {
                src: "/images/concept-of-seo-ranking.png",
                title: "Systems and Application Development",
                desc: "We build custom software and applications that support your business needs and daily operations."
              }
            ].map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-image-wrapper">
                  <img src={service.src} alt={service.title} />
                </div>
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="text-sm mt-2">{service.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ================================
          SECTION 4 — CONTACT
      ================================== */}
      <div
        className="section"
        style={{ backgroundImage: `url(${sectionBg})` }}
      >
        <div className="section-overlay-dark"></div>

        <motion.div
          className="section-content text-white space-y-8 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2 className="section-title" variants={fadeInUp}>
            Contact Us
          </motion.h2>

          <motion.p className="section-subtext" variants={fadeInUp}>
            Our team is ready to support your  needs.
          </motion.p>

          <motion.div className="contact-cards" variants={fadeInUp}>
            <div className="contact-card">
              <h3 className="text-xl font-semibold">Address</h3>
              <p>A1 Acacia Karoo St, Benoni<br />South Africa<br/>1501</p>
            </div>

            <div className="contact-card">
              <h3 className="text-xl font-semibold">Email</h3>
              <p>info@elimosolutions.com</p>
            </div>

            <div className="contact-card">
              <h3 className="text-xl font-semibold">Phone</h3>
              <p>+27 79 445 8558</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link to="/contact" className="contactButton mt-6 inline-block">
              Send Us a Message
            </Link>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}
