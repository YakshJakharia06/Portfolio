import React from 'react'
import { Link } from 'lucide-react';
import { ExternalLink, Terminal, Github } from 'lucide-react';

const Project = () => {

  const projects = [
    {
      title: "X Clone",
      description: "A full-featured social media platform with real-time updates, user authentication, and media sharing capabilities.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      source: "https://github.com/YakshJakharia06"
    },
    {
      title: "Netflix Clone",
      description: "Movie streaming interface with dynamic category browsing and high-fidelity UI replication using TMDB API.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
      source: "https://github.com/YakshJakharia06"
    },
    {
      title: "Donation Web-App",
      description: "A platform connecting donors with causes, featuring secure payment integration and impact tracking.",
      tech: ["Node.js", "Express", "React", "MongoDB"],
      link: "https://donate-money.vercel.app/",
      source: "https://github.com/YakshJakharia06/Donate-Money1"
    },
    {
      title: "URL Shortener",
      description: "Efficient tool for creating shortened aliases for long URLs with click analytics and redirection logic.",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      link: "https://url-shortner-delta-indol.vercel.app/",
      source: "https://github.com/YakshJakharia06/URL-shortner"
    },
    {
      title: "Password Manager",
      description: "A secure vault for managing credentials using encryption algorithms and local/cloud synchronization.",
      tech: ["React", "Node.js"],
      link: "https://password-manager-nu-rose.vercel.app/",
      source: "https://github.com/YakshJakharia06/Password_Manager"
    },
    {
      title: "To-Do List",
      description: "Advanced task management application with drag-and-drop features and persistent storage.",
      tech: ["React", "Context API", "LocalStorage"],
      link: "https://todo-list-e23442.netlify.app/",
      source: "https://github.com/YakshJakharia06/Todo-list"
    }
  ];

  return (
    <div>

      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative bg-[#121214] border border-white/5 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <a href={project.link} target='_blank'>
                    <ExternalLink></ExternalLink>
                  </a>
                </div>

                <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-4 block">
                  {project.type}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 rounded text-[10px] font-medium text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  <a href={project.link} target='_blank' className="flex items-center gap-2 text-xs font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-wider">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href={project.source} target="_blank" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
                    Source <Github size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
