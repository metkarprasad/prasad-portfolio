import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa"; 
import { useInView } from "framer-motion";
import "../Assets/Contact.css";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowForm(false);
      const timer = setTimeout(() => setShowForm(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xzbnpgno", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        alert("Thank You! We will reach you soon.");
      } else {
        alert("Sorry, there was a problem. Please contact us through other platforms.");
      }
    } catch (error) {
      alert("Sorry, there was a problem. Please contact us through other platforms.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        📞 <span>Get In Touch</span>
      </motion.h2>

      <div className="contact-container">
        {/* Info Cards */}
        <div className="contact-info">
          {[
            { icon: <FaEnvelope />, label: "Email", value: "prasadmetkar333@gmail.com" },
            { icon: <FaPhoneAlt />, label: "Phone", value: "+91 9307173845" },
            { icon: <FaLinkedin />, label: "LinkedIn", value: "linkedin.com/in/prasad-metkar/" },
            { icon: <FaGithub />, label: "GitHub", value: "github.com/metkarprasad" },
            { icon: <FaMapMarkerAlt />, label: "Location", value: "Hyderabad, India" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="contact-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,0,0,0.3)" }}
            >
              <div className="icon">{item.icon}</div>
              <div className="details">
                <h4>{item.label}</h4>
                <p>{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Computer Mockup with Code Animation → Form */}
        <div className="computer-mockup">
          <div className="screen">
            <AnimatePresence mode="wait">
              {!showForm ? (
                <motion.pre
                  key="code"
                  className="fake-code"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
{`const contactMe = () => {
   console.log("Hello Recruiter 👋");
   console.log("Loading Form...");
}`}
                </motion.pre>
              ) : (
                <motion.form
                  key="form"
                  className="contact-form"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  onSubmit={handleSubmit}
                >
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    whileFocus={{ scale: 1.05, borderColor: "#38bdf8", boxShadow: "0 0 15px #38bdf8" }}
                    required
                  />
                  <motion.input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    whileFocus={{ scale: 1.05, borderColor: "#38bdf8", boxShadow: "0 0 15px #38bdf8" }}
                    required
                  />
                  <motion.textarea
                    placeholder="Your Message..."
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    whileFocus={{ scale: 1.05, borderColor: "#38bdf8", boxShadow: "0 0 15px #38bdf8" }}
                    required
                  />
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.1, backgroundColor: "#0ea5e9", boxShadow: "0 0 20px #0ea5e9" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {loading ? "Sending..." : "🚀 Send Message"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
          <div className="keyboard"></div>
        </div>
      </div>
    </section>
  );
}
