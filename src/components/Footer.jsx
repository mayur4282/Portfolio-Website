import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const GithubIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left">

          {/* Brand & Summary Column */}
          <div className="md:col-span-6 space-y-4">
            <a href="#" className="inline-block text-2xl font-extrabold tracking-tight text-white group">
              <span className="px-1 text-white">Mayur Parmar</span>
            </a>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Actively seeking Full Stack Developer & MERN Stack roles (Remote / Hybrid / On-site). Open to relocate Pan-India to drive impact, build high-performance products, and contribute to organizational growth.
            </p>
            <div className="flex items-center space-x-2 text-xs font-semibold text-gray-400 pt-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Indore, Madhya Pradesh, India</span>
            </div>
          </div>

          {/* Quick Contact & Socials */}
          <div className="md:col-span-6 space-y-4 md:text-right">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">Let's Connect</h3>

              <div className="space-y-2 flex flex-col md:items-end">
                {/* Phone Contact */}
                <a
                  href="tel:7000758576"
                  className="inline-flex items-center text-lg sm:text-xl font-bold text-white hover:text-amber-400 transition-colors group"
                >
                  <Phone className="w-5 h-5 mr-2.5 text-amber-500 group-hover:scale-110 transition-transform" />
                  <span>Contact: +91 7000758576</span>
                </a>

                {/* Direct Email Link */}
                <a
                  href="mailto:mayurparmar42882@gmail.com"
                  className="inline-flex items-center text-lg sm:text-xl font-bold text-white hover:text-amber-400 transition-colors group"
                >
                  <Mail className="w-5 h-5 mr-2.5 text-amber-500 group-hover:scale-110 transition-transform" />
                  <span>mayurparmar4282@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social Profile Links */}
            <div className="flex items-center md:justify-end space-x-4 pt-3">
              <a
                href="https://github.com/mayur4282"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-gray-800 hover:bg-amber-500 hover:text-gray-900 text-gray-300 transition-all duration-300 group shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-7 h-7 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="https://www.linkedin.com/in/mayur-parmar4282"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-gray-800 hover:bg-amber-500 hover:text-gray-900 text-gray-300 transition-all duration-300 group shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-7 h-7 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Divider & Copyright Line */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-4 sm:space-y-0">
          <p className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()} Mayur Parmar. Built with React & Tailwind CSS.</span>
          </p>

          {/* Scroll Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-lg bg-gray-800 group-hover:bg-amber-500 group-hover:text-gray-900 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
