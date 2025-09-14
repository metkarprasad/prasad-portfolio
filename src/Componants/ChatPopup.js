import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "../Assets/ChatPopup.css"; // external CSS

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Auto open for first 5 seconds
  useEffect(() => {
    setIsOpen(true);
    const timer = setTimeout(() => setIsOpen(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Social media links
  const socialLinks = [
    { icon: <FaWhatsapp />, url: "https://wa.me/919307173845", name: "WhatsApp" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/prasad-metkar/", name: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/metkarprasad", name: "GitHub" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/metkar.prasad/", name: "Instagram" },
    { icon: <FaTwitter />, url: "hhttps://x.com/PrasadMetkar5", name: "Twitter" },
  ];

  return (
    <div className="chat-popup-container">
      {/* Toggle Button */}
      <button
        className={`chat-toggle-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "×" : "+"}
      </button>

      {/* Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-box"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h4>💬 Chat with me</h4>
            <p>Connect via my social profiles 👇</p>

            <div className="social-icons">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatPopup;
