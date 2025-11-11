import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from "../assets/background1.jpg"; // Hero background
import sectionBg from "../assets/background2.jpg"; // New section background
import styles from "../components/Navbar.module.css";


export default function Home() {
  // Variants for staggered animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative pt-28 min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-4xl text-center text-black space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Hero Heading */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Empowering enterprises with next-generation technology
            </h1>
            <p className="text-lg md:text-xl mb-6">
              We build resilient systems, beautiful interfaces, and intelligent automation so your teams can focus on impact.
            </p>
          </motion.div>

          {/* Welcome Message */}
          <motion.div className="bg-black/30 p-6 rounded-lg" variants={fadeInUp}>
            <h2 className="text-3xl font-semibold mb-3">Welcome to Elimo Solutions</h2>
            <p className="text-lg">
              We’re dedicated to helping businesses unlock their full potential through intelligent IT solutions, automation, and innovative technology.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div className="grid md:grid-cols-2 gap-8" variants={fadeInUp}>
            <div className="bg-black/30 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">Our Mission</h3>
              <p className="text-lg">
                To empower industrial and corporate enterprises with resilient IT infrastructure, automation, and AI-driven solutions that drive efficiency, growth, and impact.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">Our Vision</h3>
              <p className="text-lg mb-4">
                To be the leading partner for businesses seeking intelligent, sustainable, and scalable technological solutions worldwide.
              </p>
              <Link
                to="/services"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

{/* New Section Below */}
<div
  className="relative pt-28 pb-28 bg-cover bg-center bg-no-repeat flex justify-center items-center px-4"
  style={{ backgroundImage: `url(${sectionBg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/40"></div> {/* lighter overlay for black text */}

  {/* Content on top of overlay */}
  <motion.div
    className="relative z-10 max-w-4xl text-center text-black space-y-8"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.h2 className="text-3xl md:text-4xl font-bold" variants={fadeInUp}>
      Why Choose Elimo Solutions?
    </motion.h2>
    <motion.p className="text-lg md:text-xl" variants={fadeInUp}>
      We combine innovation, expertise, and reliability to deliver IT solutions that empower your business.
    </motion.p>

    <motion.div className="grid md:grid-cols-3 gap-6" variants={fadeInUp}>
      <div className="bg-white/10 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
        <p>
          Our team consists of experienced professionals dedicated to delivering innovative solutions.
        </p>
      </div>
      <div className="bg-white/10 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Reliable Solutions</h3>
        <p>
          We provide resilient systems that ensure your operations run smoothly without interruption.
        </p>
      </div>
      <div className="bg-white/10 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Cutting-edge Technology</h3>
        <p>
          We implement modern technologies like AI, cloud solutions, and automation for business efficiency.
        </p>
      </div>
    </motion.div>
  </motion.div>
    </div>

{/* Third Section: Our Services with updated illustrations */}
<div
  className="relative pt-28 pb-28 bg-cover bg-center bg-no-repeat flex justify-center items-center px-4"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <motion.div
    className="relative z-10 max-w-6xl text-center text-white space-y-12"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.h2 className="text-3xl md:text-4xl font-bold" variants={fadeInUp}>
      Our Services
    </motion.h2>
    <motion.p className="text-lg md:text-xl" variants={fadeInUp}>
      We provide a wide range of solutions tailored for industrial and corporate enterprises.
    </motion.p>

    {/* Cards Container */}
    <motion.div className="flex flex-wrap justify-center items-start gap-6 md:gap-8" variants={fadeInUp}>
      {/* Card Template */}
      {[
        {
          src: "/images/concept-of-data-analysis-and-maintenance.png",
          title: "Cloud Migration & Management",
          desc: "Services helping companies move to the cloud (AWS, Azure, Google Cloud), manage hybrid or multi-cloud environments, optimize costs, and secure cloud assets. Ideal for industrial cloud solutions or enterprise cloud implementation & optimization.",
        },
        {
          src: "/images/man-developing-website-on-desk.png",
          title: "AI & Machine Learning Integration",
          desc: "Services to build, deploy, and integrate AI/ML models into business processes for automation, predictive analytics, and customer engagement. AI-driven analytics for industrial operations or intelligent automation for enterprises.",
        },
        {
          src: "/images/design-and-development-process.png",
          title: "DevOps, Automation & IaC",
          desc: "Services around CI/CD pipelines, containerization (Kubernetes, Docker), Infrastructure as Code (Terraform), and IT automation. Industrial IT infrastructure automation, cloud-native DevOps, and automated enterprise software delivery.",
        },
        {
          src: "/images/women-web-developer-with-laptop.png",
          title: "Data Engineering & Business Intelligence",
          desc: "Services for data warehouses, lakes, real-time analytics, dashboards, and decision-support systems. Enterprise data platforms for manufacturing and industrial operations, enabling actionable insights.",
        },
        {
          src: "/images/startup-launch.png",
          title: "Sustainability / Green IT",
          desc: "Optimizing IT for energy efficiency, reduced carbon footprint, e-waste management, and cost optimization. Eco-efficient IT infrastructure for industrial enterprises and cloud cost & energy optimization.",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="bg-white/10 rounded-lg flex flex-col items-center p-6 w-64 h-[420px] justify-start"
        >
          {/* Image wrapper */}
          <div className="w-32 h-32 flex justify-center items-center">
            <img
              src={service.src}
              alt={service.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text */}
          <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
          <p className="text-center text-sm mt-2">{service.desc}</p>
        </div>
      ))}
    </motion.div>
  </motion.div>
</div>

{/* Fourth Section: Contact Us */}
<div
  className="relative pt-28 pb-28 bg-cover bg-center bg-no-repeat flex justify-center items-center px-4"
  style={{ backgroundImage: `url(${sectionBg})` }} // you can use a different image if you want
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <motion.div
    className="relative z-10 max-w-4xl text-center text-white space-y-8"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.h2 className="text-3xl md:text-4xl font-bold" variants={fadeInUp}>
      Contact Us
    </motion.h2>
    <motion.p className="text-lg md:text-xl" variants={fadeInUp}>
      Have a question or want to get in touch? Our team is ready to help you with your IT and automation needs.
    </motion.p>

    {/* Contact Information */}
    <motion.div className="grid md:grid-cols-3 gap-6" variants={fadeInUp}>
      <div className="bg-white/10 p-6 rounded-lg flex flex-col items-center space-y-4">
        <h3 className="text-xl font-semibold">Address</h3>
        <p className="text-center text-sm">
          A1 Acacia Karoo St, Benoni <br/>
          South Africa
          <br/> 1501
        </p>
      </div>

      <div className="bg-white/10 p-6 rounded-lg flex flex-col items-center space-y-4">
        <h3 className="text-xl font-semibold">Email</h3>
        <p className="text-center text-sm">
          info@elimosolutions.com
        </p>
      </div>

      <div className="bg-white/10 p-6 rounded-lg flex flex-col items-center space-y-4">
        <h3 className="text-xl font-semibold">Phone</h3>
        <p className="text-center text-sm">
          +27 79 445 8558
        </p>
      </div>
    </motion.div>

    {/* Optional Contact Button */}
<motion.div variants={fadeInUp}>
  <Link
    to="/contact"
    className={`${styles.contactButton} inline-block mt-6 transition-colors duration-300`}
  >
    Send Us a Message
  </Link>
</motion.div>

  </motion.div>
</div>
</div>
  );
}
