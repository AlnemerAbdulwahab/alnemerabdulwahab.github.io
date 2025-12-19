import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-blue-300 mb-2">{project.subtitle}</p>
              <p className="text-gray-400 text-sm mb-4">{project.date}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-blue-600/30 rounded text-xs">{tech}</span>
                ))}
              </div>

              <ul className="space-y-2 text-gray-300 text-sm mb-4">
                {project.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all text-sm"
                >
                  <ExternalLink size={16} />
                  Project Showcase
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
