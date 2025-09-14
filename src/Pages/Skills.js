import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaCogs,
   FaPython, 
  FaServer,
  FaHackerrank 
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs, SiLeetcode,  SiTensorflow , } from "react-icons/si";
import "../Assets/Skills.css";

const skills = [
  { name: "React", icon: <FaReact />, level: 90, color: "#61dafb", exp: "3+ Years", type: "Advanced" },
  { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "#fff", exp: "2+ Years", type: "Advanced" },
  { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "#3C873A", exp: "3 Years", type: "Advanced" },
  { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "#4DB33D", exp: "2 Years", type: "Intermediate" },
  { name: "TypeScript", icon: <SiTypescript />, level: 75, color: "#3178c6", exp: "2 Years", type: "Intermediate" },
  { name: "JavaScript", icon: <FaJsSquare />, level: 90, color: "#f7df1e", exp: "4+ Years", type: "Expert" },
  { name: "Tailwind", icon: <SiTailwindcss />, level: 85, color: "#38BDF8", exp: "2 Years", type: "Advanced" },
  { name: "SQL / Databases", icon: <FaDatabase />, level: 80, color: "#f39c12", exp: "3 Years", type: "Intermediate" },
  { name: "Git", icon: <FaGitAlt />, level: 85, color: "#F1502F", exp: "3+ Years", type: "Advanced" },
  { name: "AWS", icon: <FaAws />, level: 70, color: "#FF9900", exp: "1 Year", type: "Intermediate" },
  { name: "Docker", icon: <FaDocker />, level: 65, color: "#2496ED", exp: "1 Year", type: "Beginner" },

  // Advanced / personality showcasing skills
  { name: "Data Structures & Algorithms", icon: <SiLeetcode />, level: 90, color: "#FFA116", exp: "3+ Years", type: "Advanced" },
  { name: "Problem Solving (LeetCode/HackerRank)", icon: <FaHackerrank />, level: 85, color: "#2EC866", exp: "3+ Years", type: "Advanced" },
  { name: "REST APIs / Microservices", icon: <FaServer />, level: 80, color: "#FF6F61", exp: "2 Years", type: "Advanced" },
  { name: "Python", icon: <FaPython />, level: 85, color: "#306998", exp: "3+ Years", type: "Advanced" },
  { name: "Machine Learning / AI", icon: <SiTensorflow />, level: 70, color: "#FF6F00", exp: "1 Year", type: "Intermediate" },
  { name: "CI/CD / DevOps", icon: <FaCogs />, level: 65, color: "#FF4500", exp: "1 Year", type: "Intermediate" },
];


export default function Skills() {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const cards = carouselRef.current.children;
        const cardWidth = cards[0].offsetWidth + 30; // card + gap
        const nextIndex = (index + 3) % skills.length;
        setIndex(nextIndex);

        carouselRef.current.scrollTo({
          left: cardWidth * nextIndex,
          behavior: "smooth",
        });
      }
    }, 2500); // every 2.5 seconds

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="skills" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="skills-title"
      >
        💡 Professional <span>Skills</span>
      </motion.h2>

      <div className="skills-carousel" ref={carouselRef}>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: `0 0 25px ${skill.color}`,
            }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>

            {/* Progress Circle */}
            <div className="progress-ring">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  className="circle"
                  stroke={skill.color}
                  strokeDasharray={`${skill.level}, 100`}
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  initial={{ strokeDasharray: "0, 100" }}
                  whileInView={{ strokeDasharray: `${skill.level}, 100` }}
                  transition={{ duration: 1.5 }}
                />
              </svg>
              <span className="skill-level">{skill.level}%</span>
            </div>

            {/* Extra Info */}
            <div className="skill-extra">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                ⏳ {skill.exp}
              </motion.p>
              <motion.p
                className="skill-type"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                📊 {skill.type}
              </motion.p>
            </div>

            {/* Animated bar under ring */}
            <motion.div
              className="skill-bar"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.2 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
