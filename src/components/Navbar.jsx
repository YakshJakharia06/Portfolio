import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';

const Navbar = ({ onDownloadResume }) => {

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
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between overflow-x-hidden">
          {/* Enhanced Logo Design */}
          <div onClick={() => scrollTo('home')} className="flex items-center gap-1.5 cursor-pointer group">
            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              Y
            </div>
            <div className="text-xl font-bold tracking-tight">
              aksh<span className="text-blue-400">.</span>dev
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium ">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className={`capitalize transition-colors hover:text-blue-400 ${activeSection === item ? 'text-blue-400' : 'text-slate-400'}`} >
                {item}
              </button>

            ))}
            <button onClick={onDownloadResume} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold">
              RESUME PDF
            </button>
          </div>

          <button className="md:hidden text-slate-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 p-4 border-b border-slate-800 animate-in slide-in-from-top duration-300">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="block w-full text-left py-3 capitalize text-slate-300 hover:text-white">
                {item}
              </button>
            ))}
            <button onClick={() => {
                onDownloadResume();
                setIsMenuOpen(false);
              }}
              className="mt-4 w-fit px-4 py-3 bg-blue-600 text-white rounded-lg text-sm font-bold text-center">
              RESUME PDF
            </button>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
