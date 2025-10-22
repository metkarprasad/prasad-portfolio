import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import "../Assets/CodingProfile.css";

const profiles = [
  { name: "GitHub", url: "https://github.com/metkarprasad", logo: <FaGithub />, desc: "45+ Open Source Repos", highlight: "Top Open Source Dev", score: "92%" },
  { name: "LeetCode", url: "https://leetcode.com/u/prasadmetkar/", logo: <SiLeetcode />, desc: "Solved 600+ Problems", highlight: "Data Structures & Algo", score: "78%" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/prasadmetkar333", logo: <FaHackerrank />, desc: "12 Badges | Rank: 3k", highlight: "SQL + Python Specialist", score: "84%" },
  { name: "CodeChef", url: "https://www.codechef.com/users/prasadmetkar", logo: <SiCodechef />, desc: "Rating 1500+", highlight: "Competitive Programmer", score: "66%" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/prasad-metkar/", logo: <FaLinkedin />, desc: "Professional Networking", highlight: "Sharing Tech Blogs", score: "88%" },
];

export default function CodingProfiles() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section className="profiles-section">
      <h2 className="profiles-title">⚡ Coder & Competitive Profiles</h2>
      <p className="profiles-sub">Showcasing my footprints across platforms 🚀</p>
<motion.div
  ref={ref}
  className="profiles-wrapper"
>
      <motion.div
        ref={ref}
        className="profiles-track"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.8 } },
        }}
        initial="hidden"
        animate={controls}
      >
        {/* Duplicate once for infinite scroll */}
        {[...profiles, ...profiles].map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            className="profile-card"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px #00ffd1" }}
          >
            <div className="card-logo">{p.logo}</div>
            <div className="card-body">
              <h3>{p.name}</h3>
              <p className="desc">{p.desc}</p>
              <p className="highlight">{p.highlight}</p>
              <span className="score">{p.score}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
      </motion.div>
    </section>
  );
}
