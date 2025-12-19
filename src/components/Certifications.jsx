import React, { useEffect } from 'react';
import { Award, FileText } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications = () => {
  useEffect(() => {
    // Load the Credly embed script only once
    if (!document.getElementById('credly-script')) {
      const script = document.createElement('script');
      script.id = 'credly-script';
      script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
      script.async = true;
      script.onload = () => {
        // Render badges after script loads
        if (window.CredlyBadge) {
          window.CredlyBadge.render();
        }
      };
      document.body.appendChild(script);
    } else {
      // If script already exists, just re-render badges
      if (window.CredlyBadge) {
        window.CredlyBadge.render();
      }
    }
  }, []);

  return (
    <section id="certifications" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Credly Badge */}
                <div className="flex-shrink-0">
                  <div
                    className="credly-badge-container"
                    data-iframe-width="150"
                    data-iframe-height="270"
                    data-share-badge-id={cert.badgeId}
                    data-share-badge-host="https://www.credly.com"
                  ></div>
                </div>

                {/* Certificate Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">{cert.name}</h3>
                  <p className="text-blue-300 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">{cert.date}</p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all text-sm"
                    >
                      <Award size={16} />
                      View Badge
                    </a>

                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all text-sm"
                    >
                      <FileText size={16} />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
