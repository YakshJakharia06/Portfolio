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
					<div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
						Available for New Opportunities
					</div>
					<h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
						Building Digital Products <br />
						<span className="bg-linear-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
							with the MERN Stack.
						</span>
					</h1>
					<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
						Hi, I'm Yaksh. A full-stack engineer focused on creating robust backends
						and pixel-perfect frontends.
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
