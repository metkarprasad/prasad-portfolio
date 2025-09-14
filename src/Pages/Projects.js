import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../Assets/Project.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio with animations, responsive UI, and smooth navigation.",
    tech: ["React", "Framer Motion", "CSS"],
    live: "https://prasad-portfolio-theta.vercel.app/",
    github: "https://github.com/metkarprasad/prasad-portfolio",
    image: "/projects/portfolio.png",
  },
  {
    title: "Jobify",
    description: "Full-stack Job Listing platform for job seekers to find opportunities and employers to manage postings efficiently.",

    tech: ["MERN", "Stripe", "JWT", "CI/CD"],
    live: "https://react-application-beige.vercel.app/",
    github: "https://github.com/metkarprasad/react-application",
    image: "/projects/ecommerce.png",
  },
  {
    title: "GrocerEase",
    description: "Full-stack Grocery Management app allowing users to browse, order, and track groceries seamlessly, with real-time updates and intuitive UI.\.",
    tech: ["Node.js", "OpenAI", "Socket.io"],
    live: "https://gurukrupa-kirana-frontend.vercel.app/",
    github: "https://github.com/metkarprasad/Gurukrupa-kirana-frontend",
    image: "/projects/ai.png",
  }, 
  {
    title: "EcoCare",
    description: "EcoCare app identifies uploaded leaves and provides detailed information, helping users learn about plants quickly and accurately.",
    tech: ["Node.js", "OpenAI", "Socket.io"],
    live: "https://ecocare-frontend.vercel.app/",
    github: "https://github.com/metkarprasad/Ecocare-frontend",
    image: "/projects/ai.png",
  }, 

  {
    title: "AI Chatbot",
    description: "Coming Soon...",
    tech: ["Node.js", "OpenAI", "Socket.io"],
    live: "https://your-ai-link.com",
    github: "https://github.com/yourrepo",
    image: "/projects/ai.png",
  },
  
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="projects-title"
      >
        🚀 My <span>Projects</span>
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <TiltCard key={i} project={project} delay={i * 0.2} />
        ))}
      </div>
    </section>
  );
}

// New TiltCard component
function TiltCard({ project, delay }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateMax = 10; // max rotation in deg
    setRotateY(((x - centerX) / centerX) * rotateMax);
    setRotateX(-((y - centerY) / centerY) * rotateMax);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      <div className="project-img">{/* <img src={project.image} alt={project.title} /> */}</div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((t, index) => (
            <span key={index}>{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.live} target="_blank" rel="noreferrer">
            Live <FaExternalLinkAlt />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            Code <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
