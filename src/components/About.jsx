import React from 'react'
import {
  Layers,
  User,
  Database,
  Globe,
  Server
} from 'lucide-react';

const About = () => {

  const personalInfo = {
    name: "Yaksh Jakharia",
    role: "Full Stack MERN Developer",
    github: "https://github.com/YakshJakharia06",
    linkedin: "https://www.linkedin.com/in/yaksh-jakharia-409555311/",
    phone: "1234567890",
    email: "jakhariayaksh@gmail.com",
    about: "I am a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I focus on building scalable web applications with clean code and exceptional user experiences."
  };

  const skills = [
    { name: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Redux"] },
    { name: "Backend", items: ["Node.js", "Express.js", "REST APIs", "GraphQL"] },
    { name: "Database", items: ["MongoDB", "PostgreSQL", "Redis"] },
    { name: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] }
  ];

  return (
    <div>
      <section id="about" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <User className="text-blue-400" /> About Me
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {personalInfo.about}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <h3 className="font-bold text-white mb-1">Backend</h3>
                <p className="text-sm text-slate-500">Robust Architectures</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <h3 className="font-bold text-white mb-1">Frontend</h3>
                <p className="text-sm text-slate-500">Interactive Interfaces</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="p-6 bg-slate-800/30 rounded-2xl border border-slate-800">
                <h3 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
                  {skillGroup.name === "Frontend" && <Globe size={16} />}
                  {skillGroup.name === "Backend" && <Server size={16} />}
                  {skillGroup.name === "Database" && <Database size={16} />}
                  {skillGroup.name === "Tools" && <Layers size={16} />}
                  {skillGroup.name}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map(skill => (
                    <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
