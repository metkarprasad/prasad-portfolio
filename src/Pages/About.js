import React from "react";
import { motion } from "framer-motion";
import "../Assets/About.css";

export default function About() {
  // Floating animation for text
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section className="about" id="about">
      <div className="animated-bg" /> {/* 🔹 animated background */}

      <div className="about-container">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="about-img"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1], boxShadow: [
              "0 0 40px rgba(255, 0, 128, 0.5)",
              "0 0 80px rgba(0, 210, 255, 0.6)",
              "0 0 40px rgba(255, 0, 128, 0.5)"
            ] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="img-glow"
          >
            <img 
              src="https://res.cloudinary.com/det3aoore/image/upload/v1761103202/Gemini_Generated_Image_jpi1erjpi1erjpi1_1_xvaj8g.png" 
              alt="Me" 
            />
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <h2>
            {["About", "Me"].map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h2>

         <motion.p
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  viewport={{ once: true }}
>
  I’m <span>Prasad Metkar</span>, a dedicated <strong>Full Stack Developer</strong> with expertise in
  <span> MERN stack</span> and a strong foundation in <span>Python & Data Structures</span>.  
  I enjoy building <em>dynamic web applications</em> that solve real-world problems while
  providing <em>smooth, interactive experiences</em> for users.  
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.4 }}
  viewport={{ once: true }}
>
 I thrive on combining <strong>clean code, modern design, and performance</strong>.  
  My goal is to craft <span>innovative, scalable, and user-friendly</span> digital solutions that make a difference. ⚡
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.6 }}
  viewport={{ once: true }}
>
  I’m always exploring <span>new technologies</span>, experimenting with <span>creative UI/UX effects</span>, 
  and enhancing my <strong>problem-solving skills</strong> through coding challenges on <span>LeetCode</span> and <span>HackerRank</span>.  
  My mission is to grow as a developer while delivering <em>impactful and elegant solutions</em> for real users.
</motion.p>


          <div className="about-highlights">
            {[
              { title: "⚡ Creative Developer", desc: "Transforming ideas into immersive digital experiences." },
              { title: "🚀 Tech Explorer", desc: "Always exploring new frameworks, tools & modern workflows." },
              { title: "🎨 Designer’s Eye", desc: "Focus on clean, modern, and futuristic UI/UX patterns." }
            ].map((h, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, boxShadow: "0 0 20px #00d2ff" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="highlight"
              >
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
