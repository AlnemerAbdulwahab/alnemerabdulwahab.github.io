import React from 'react';
import { Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Get In Touch</span>
        </h2>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12">
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new opportunities, projects, or collaborations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a href="mailto:alnemerabdulwahab@gmail.com" 
               className="flex flex-col items-center gap-3 p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all">
              <Mail size={32} className="text-blue-400" />
              <span className="text-sm">alnemerabdulwahab@gmail.com</span>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 bg-slate-700/50 rounded-xl">
              <MapPin size={32} className="text-purple-400" />
              <span className="text-sm">Riyadh, Saudi Arabia</span>
            </div>

            <a href="https://www.linkedin.com/in/abdulwahab-alnemer" target="_blank" rel="noopener noreferrer"
               className="flex flex-col items-center gap-3 p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all">
              <Linkedin size={32} className="text-cyan-400" />
              <span className="text-sm">LinkedIn Profile</span>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/AlnemerAbdulwahab" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all hover:scale-105">
              <Github size={20} />
              <span>GitHub</span>
              <ExternalLink size={16} />
            </a>

            <a href="https://www.linkedin.com/in/abdulwahab-alnemer" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all hover:scale-105">
              <Linkedin size={20} />
              <span>LinkedIn</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
