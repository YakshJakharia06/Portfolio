import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Project = () => {

  const projects = [
  {
    title: "VoiceKhata",
    type: "AI-Powered Voice Bookkeeping",
    description:
      "A voice-first digital ledger for merchants with customer management, payment tracking, reminders, and risk scoring features.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://voicekhata.vercel.app/",
    source: "https://github.com/134shubhamyadav/VoiceKhata"
  },

  {
    title: "Donate-Money",
    type: "Crowdfunding Platform",
    description:
      "A full-stack crowdfunding platform for creating and managing fundraising campaigns with secure authentication and responsive UI.",
    tech: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Auth.js"
    ],
    link: "https://donate-money.vercel.app/",
    source: "https://github.com/YakshJakharia06/Donate-Money"
  },

  {
    title: "URL Shortener",
    type: "Web Application",
    description:
      "Efficient tool for creating shortened aliases for long URLs with click analytics and redirection logic.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS"],
    link: "https://url-shortner-delta-indol.vercel.app/",
    source: "https://github.com/YakshJakharia06/URL-shortner"
  },

  {
    title: "Password Manager",
    type: "Security Application",
    description:
      "A secure vault for managing credentials using encryption algorithms and local/cloud synchronization.",
    tech: ["React", "Node.js"],
    link: "https://password-manager-nu-rose.vercel.app/",
    source: "https://github.com/YakshJakharia06/Password_Manager"
  },

  {
    title: "To-Do List",
    type: "Task Management Application",
    description:
      "Task management application with persistent storage for creating, updating, and managing daily tasks.",
    tech: ["React", "Context API", "LocalStorage"],
    link: "https://todo-list-e23442.netlify.app/",
    source: "https://github.com/YakshJakharia06/Todo-list"
  }
]

  return (
    <div>

      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Projects
            </h2>

            <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {projects.map((project, idx) => (

              <div
                key={idx}
                className="
                  group relative
                  bg-[#121214]
                  border border-white/5
                  rounded-2xl
                  p-8
                  hover:border-cyan-500/50
                  transition-all duration-500
                  hover:-translate-y-2
                "
              >

                {/* External Link Icon */}
                <div
                  className="
                    absolute top-0 right-0 p-4
                    opacity-10
                    group-hover:opacity-100
                    transition-opacity
                  "
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                {/* Project Type */}
                <span
                  className="
                    text-xs font-bold
                    text-cyan-500
                    uppercase
                    tracking-widest
                    mb-4
                    block
                  "
                >
                  {project.type}
                </span>

                {/* Title */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                    mb-3
                    group-hover:text-cyan-400
                    transition-colors
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-slate-400
                    text-sm
                    mb-6
                    leading-relaxed
                  "
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-2 py-1
                        bg-white/5
                        rounded
                        text-[10px]
                        font-medium
                        text-slate-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 mt-auto">

                  {/* Live Demo */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      text-xs font-bold
                      text-white
                      hover:text-cyan-400
                      transition-colors
                      uppercase
                      tracking-wider
                    "
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      text-xs font-bold
                      text-slate-400
                      hover:text-white
                      transition-colors
                      uppercase
                      tracking-wider
                    "
                  >
                    Source
                    <Github size={14} />
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
