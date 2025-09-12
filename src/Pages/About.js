import React from "react";
import { motion } from "framer-motion";
import "../Assets/About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-img"
        >
          <div className="img-glow">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvyiz_z36jMlEtUarIfsj6Q3ic-rCYPyw8yTh2IernSy0YvZnIPHw5l2-nxDuDhvV5f0&usqp=CAU" alt="Me" />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <h2>About <span>Me</span></h2>
          <p>
            I’m <span>Prasad</span>, a passionate <strong>Full Stack Developer</strong> who
            loves creating next-gen digital experiences.  
            My focus is on blending <em>modern design</em> with <em>scalable engineering</em>, 
            turning ideas into smooth, interactive, and meaningful web products.  
          </p>

          <p>
            From building <span>real-world apps</span> to experimenting with
            <span> creative UI effects</span>, I thrive in pushing the limits of
            design & technology. I believe every project should feel
            <strong> unique, engaging, and alive</strong>. ⚡
          </p>

          <div className="about-highlights">
            <motion.div whileHover={{ scale: 1.05 }} className="highlight">
              <h4>⚡ Creative Developer</h4>
              <p>Transforming ideas into immersive digital experiences.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="highlight">
              <h4>🚀 Tech Explorer</h4>
              <p>Always exploring new frameworks, tools & modern workflows.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="highlight">
              <h4>🎨 Designer’s Eye</h4>
              <p>Focus on clean, modern, and futuristic UI/UX patterns.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
