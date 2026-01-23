import React from 'react'
import { ExternalLink,Code2, } from 'lucide-react';

const Project = () => {

	const projects = [
		{
			title: "X Clone",
			description: "A full-featured social media platform with real-time updates, user authentication, and media sharing capabilities.",
			tech: ["React", "Node.js", "MongoDB", "Socket.io"],
			link: "#"
		},
		{
			title: "Netflix Clone",
			description: "Movie streaming interface with dynamic category browsing and high-fidelity UI replication using TMDB API.",
			tech: ["React", "Firebase", "Tailwind CSS"],
			link: "#"
		},
		{
			title: "Donation Web-App",
			description: "A platform connecting donors with causes, featuring secure payment integration and impact tracking.",
			tech: ["MERN Stack", "Stripe API", "Redux"],
			link: "https://donate-money.vercel.app/"
		},
		{
			title: "URL Shortener",
			description: "Efficient tool for creating shortened aliases for long URLs with click analytics and redirection logic.",
			tech: ["Node.js", "Express", "MongoDB", "EJS"],
			link: "https://url-shortner-delta-indol.vercel.app/"
		},
		{
			title: "Password Manager",
			description: "A secure vault for managing credentials using encryption algorithms and local/cloud synchronization.",
			tech: ["React", "CryptoJS", "Node.js"],
			link: "https://password-manager-nu-rose.vercel.app/"
		},
		{
			title: "To-Do List",
			description: "Advanced task management application with drag-and-drop features and persistent storage.",
			tech: ["React", "Context API", "LocalStorage"],
			link: "https://todo-list-e23442.netlify.app/"
		}
	];

	return (
		<div>
			<section id="projects" className="py-24 px-4">
				<div className="max-w-6xl mx-auto text-center mb-16">
					<h2 className="text-3xl font-bold mb-4">Selected Projects</h2>
					<p className="text-slate-400">A collection of my recent work in web development.</p>
				</div>

				<div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all flex flex-col"
						>
							<div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
								<div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-emerald-600/20 group-hover:opacity-100 transition-opacity duration-500 opacity-40"></div>
								<Code2 size={48} className="text-slate-700 group-hover:text-blue-400 transition-colors duration-500" />
							</div>
							<div className="p-6 flex-1 flex flex-col">
								<div className="flex justify-between items-start mb-3">
									<h3 className="text-xl font-bold text-white">{project.title}</h3>
									<a href={project.link} className="text-slate-500 hover:text-blue-400 transition-colors">
										<ExternalLink size={20} />
									</a>
								</div>
								<p className="text-slate-400 text-sm mb-6 flex-1">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tech.map(t => (
										<span key={t} className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">
											{t}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

export default Project
