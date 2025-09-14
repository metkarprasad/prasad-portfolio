import React, { useState, useEffect } from "react";
import "../Assets/CodeAnimation.css"

const hackerCode = [
  "const secret = 'TOP_SECRET';",
  "function decrypt(data) {",
  "  return atob(data);",
  "}",
  "let user = 'admin';",
  "console.log('Access Granted:', user);",
  "fetch('/api/data').then(r => r.json()).then(console.log);",
  "while(true) { console.log('Hacking in progress...'); }",
  "let password = '123456';",
  "console.log(password.split('').reverse().join(''));",
  "const keys = ['alpha', 'beta', 'gamma', 'delta'];",
  "keys.forEach(k => console.log(k));",
  "document.body.style.background = '#000';",
  "for(let i=0;i<10;i++){console.log(i*i);}",
  "if(user==='admin'){alert('Welcome Admin');}",
  "setInterval(()=>console.log(Math.random()), 1000);",
  "// More code lines here...",
];

export default function CodeAnimation() {
  const [lines, setLines] = useState([]); // lines displayed so far
  const [currentLine, setCurrentLine] = useState(""); // line being typed
  const [lineIndex, setLineIndex] = useState(0); // which line to type
  const [charIndex, setCharIndex] = useState(0); // which char to type

  useEffect(() => {
    const typingSpeed = 50; // ms per character
    if (lineIndex < hackerCode.length) {
      if (charIndex < hackerCode[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + hackerCode[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // finished current line, move to next line
        const timeout = setTimeout(() => {
          setLines((prev) => [...prev, currentLine]);
          if (lines.length + 1 > 20) lines.shift(); // keep last 20 lines
          setCurrentLine("");
          setCharIndex(0);
          setLineIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    } else {
      // loop back to start
      const timeout = setTimeout(() => {
        setLineIndex(0);
        setLines([]);
        setCurrentLine("");
        setCharIndex(0);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLine, lineIndex, lines]);

  return (
    <div className="code-animation">
      {lines.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
      <p>{currentLine}<span className="cursor">|</span></p>
    </div>
  );
}
