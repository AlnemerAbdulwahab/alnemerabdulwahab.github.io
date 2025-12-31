import React from 'react';
import { Briefcase } from 'lucide-react';
import { skills } from '../data/skills';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all">
          <div className="flex items-start gap-4 mb-4">
            <Briefcase size={32} className="text-blue-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Software Development Bootcamp</h3>
              <p className="text-blue-300 font-semibold">Tuwaiq Academy | أكاديمية طويق</p>
              <p className="text-gray-400">Sep 2025 - Present | Riyadh, Saudi Arabia</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-300 ml-12">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">▸</span>
              <span>Studying Full-Stack Development using Microsoft .NET, ASP.NET Core, and C#</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">▸</span>
              <span>Gaining practical experience through hands-on projects and a real-world training phase performing industry-level tasks</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">▸</span>
              <span>Learning key software engineering principles including SDLC, Agile/Scrum, and version control</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">▸</span>
              <span>Enrolled in five professional certification courses: ITIL v4, CompTIA Network+, Security+, Server+, Cloud+</span>
            </li>
          </ul>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-bold mb-4 text-blue-300">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-600/20 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-bold mb-4 text-cyan-300">Web & Mobile</h4>
            <div className="flex flex-wrap gap-2">
              {skills.webMobile.map(skill => (
                <span key={skill} className="px-3 py-1 bg-cyan-600/20 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-bold mb-4 text-purple-300">Systems & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {[...skills.systems, ...skills.databases].map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-600/20 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
