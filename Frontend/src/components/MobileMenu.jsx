import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ isOpen, toggle }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={toggle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 z-50 p-6 shadow-xl"
          >
            <button onClick={toggle} className="text-lg mb-6">✕ Close</button>

            <nav className="flex flex-col gap-5 text-lg font-medium">
              <a href="#about" onClick={toggle}>About</a>
              <a href="#services" onClick={toggle}>Services</a>
              <a href="#contact" onClick={toggle}>Contact</a>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
