import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../Assets/Navbar.css";

export default function NeoBar({ onNavClick }) {
  const [open, setOpen] = useState(false);
  const navItems = ["Home", "About", "Projects", "Code", "Skills", "Contact"];

  return (
    <nav className="neobar">
      <div className="neobar-container">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="neobar-logo"
        >
          Prasad.dev
        </motion.div>

        {/* Desktop Menu */}
        <ul className="neobar-menu">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              className="neobar-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => onNavClick(item.toLowerCase())}  
            >
              {item}
              <span className="neobar-underline" />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="neobar-toggle"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="neobar-dropdown"
        >
          <ul>
            {navItems.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="neobar-dropdown-item"
                onClick={() => {
                  onNavClick(item.toLowerCase()); // 🔹 added
                  setOpen(false); // close dropdown after click
                }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
