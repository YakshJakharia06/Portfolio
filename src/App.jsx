import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';
import Hero from './components/Hero';
import ResumeTemplate from './components/ResumeTemplate';

const App = () => {

  const downloadResume = () => {
    const input = document.getElementById('resume-template');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      pdf.save('Yaksh_Jakharia_Resume.pdf');
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">

      {/* Navigation */}
      <Navbar onDownloadResume={downloadResume} />

      {/* Hero Section */}
      <Hero />

      {/* About & Skills */}
      <About />

      {/* Projects Section */}
      <Project />

      {/* Contact Section */}
      <Contact onDownloadResume={downloadResume} />

      {/* Resume Section */}
      <ResumeTemplate />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;