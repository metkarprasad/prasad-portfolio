import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// import "./Home.css"; 
import "../Assets/Home.css"
import CodeAnimation from "../Componants/CodeAnimation";

export default function Home() {
  return (
    <section className="home" id="home">
      {/* Animated Background Overlay */}
      <div className="home-bg"></div> 
      <CodeAnimation/>

      <div className="home-content">
        {/* Greeting */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="home-subtitle"
        >
          👋 Hi, you are on <span>Coder’s Stage</span>
        </motion.h3>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="home-title"
        >
          I'm <span>Prasad</span>
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="home-description"
        >
          A passionate <span>Full Stack Developer</span> crafting modern,
          interactive & scalable web applications with a designer’s eye for
          detail. 🚀
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="home-socials"
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="home-buttons"
        >
          <a href="#projects" className="btn-primary">🚀 View My Work</a>
          <a href="#contact" className="btn-secondary">📩 Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
}
