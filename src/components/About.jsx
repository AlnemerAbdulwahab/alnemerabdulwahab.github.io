import React from 'react';
import { GraduationCap, Code } from 'lucide-react';

const About = () => {
  const highlightSkills = ['C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'React', 'React Native', '.NET', 'SQL'];

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all">
            <GraduationCap size={40} className="text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-semibold text-white">Bachelor of Science in Software Engineering</p>
              <p className="text-blue-300">Florida Institute of Technology</p>
              <p>Melbourne, FL | Aug 2020 - Dec 2024</p>
              <p className="font-semibold mt-2">GPA: 3.08/4.0 | Dean's List (2021)</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all">
            <Code size={40} className="text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Skills Highlight</h3>
            <div className="flex flex-wrap gap-2">
              {highlightSkills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-600/30 rounded-full text-sm hover:bg-blue-600/50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            Software Engineering graduate with a strong foundation in software development, networks, and operating systems. 
            Proficient in multiple programming languages with hands-on experience in web and mobile development. 
            Passionate about problem-solving, system efficiency, and digital transformation with a strong interest in cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
