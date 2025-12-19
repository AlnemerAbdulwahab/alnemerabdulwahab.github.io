import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Abdulwahab Alnemer
          </h1>
          <p className="text-2xl md:text-3xl text-blue-300 mb-6">Software Engineer</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Passionate about software development, cybersecurity, and digital transformation with a strong foundation in full-stack development
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/AlnemerAbdulwahab" target="_blank" rel="noopener noreferrer" 
             className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/abdulwahab-alnemer" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:alnemerabdulwahab@gmail.com"
             className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all hover:scale-110">
            <Mail size={24} />
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ChevronDown size={32} className="text-blue-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
