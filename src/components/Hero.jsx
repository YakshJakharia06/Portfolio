import React, { useState } from 'react'
import {
	Github,
	Linkedin,
} from 'lucide-react';

const Hero = () => {

	const personalInfo = {
		name: "Yaksh Jakharia",
		role: "Full Stack MERN Developer",
		github: "https://github.com/YakshJakharia06",
		linkedin: "https://www.linkedin.com/in/yaksh-jakharia-409555311/",
		phone: "1234567890",
		email: "jakhariayaksh@gmail.com",
		about: "I am a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I focus on building scalable web applications with clean code and exceptional user experiences."
	};

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	const scrollTo = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsMenuOpen(false);
		setActiveSection(id);
	};

	return (
		<div>
			<section id="home" className="pt-32 pb-20 px-4">

				<div className="max-w-4xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-6">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
						</span>
						AVAILABLE FOR HIRE
					</div>
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
						Full Stack <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">MERN</span> Developer
					</h1>
					<p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
						Crafting robust web applications with MongoDB, Express, React, and Node.js.
						Focused on building scalable solutions and exceptional user experiences.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<button
							onClick={() => scrollTo('projects')}
							className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-900/20"
						>
							View Projects
						</button>
						<div className="flex gap-4">
							<a href={personalInfo.github} target="_blank" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700">
								<Github size={20} />
							</a>
							<a href={personalInfo.linkedin} target="_blank" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700">
								<Linkedin size={20} />
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Hero
