import React from 'react'
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {

  const personalInfo = {
    name: "Yaksh Jakharia",
    role: "Full Stack MERN Developer",
    github: "https://github.com/YakshJakharia06",
    linkedin: "https://www.linkedin.com/in/yaksh-jakharia-409555311/",
    phone: "1234567890",
    email: "jakhariayaksh@gmail.com",
    about: "I am a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I focus on building scalable web applications with clean code and exceptional user experiences."
  };

  return (
    <div>
      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        <div className="flex justify-center gap-6 mb-6">
          <a href={personalInfo.github} target="_blank" className="hover:text-white transition-colors"><Github size={20} /></a>
          <a href={personalInfo.linkedin} target="_blank" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
        </div>
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
