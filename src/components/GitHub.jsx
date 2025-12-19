import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

const GitHub = () => {
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/AlnemerAbdulwahab/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoadingRepos(false);
      })
      .catch(err => {
        console.error('Error fetching repos:', err);
        setLoadingRepos(false);
      });
  }, []);

  return (
    <section id="github" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">GitHub Repositories</span>
        </h2>

        {loadingRepos ? (
          <div className="text-center text-gray-400">Loading repositories...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.filter(repo => !repo.fork).slice(0, 6).map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all hover:scale-105"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-blue-300 flex-1">{repo.name}</h3>
                  <Github size={20} className="text-gray-400 flex-shrink-0 ml-2" />
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={14} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={14} />
                    {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <a 
            href="https://github.com/AlnemerAbdulwahab" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
          >
            <Github size={20} />
            View All Repositories
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
