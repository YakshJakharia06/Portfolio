import React from 'react'
import {
  Linkedin,
  Mail,
  Phone,
  Send,
  FileText 
} from 'lucide-react';

const Contact = ({ onDownloadResume }) => { 

  const personalInfo = {
    name: "Yaksh Jakharia",
    phone: "8530944492", 
    email: "jakhariyaksh@gmail.com",
    linkedin: "https://www.linkedin.com/in/yaksh-jakharia-409555311/",
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-slate-400">Currently open for freelance work and full-time roles.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {/* Email Item */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email Me</p>
                <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-blue-400 transition-colors font-medium">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone Item */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Call Me</p>
                <p className="text-white font-medium">{personalInfo.phone}</p>
              </div>
            </div>

            {/* LinkedIn Item */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Network</p>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-colors font-medium">
                  My LinkedIn Profile
                </a>
              </div>
            </div>

            
            <button
              onClick={onDownloadResume}
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-bold transition-all border border-slate-700 w-fit"
            >
              <FileText size={18} className="text-blue-400" />
              DOWNLOAD RESUME
            </button>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-slate-100 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-slate-100 transition-colors"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-slate-100 transition-colors resize-none"
            ></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact