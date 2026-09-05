import React from 'react';
import { Download, ArrowDown, MapPin, Sparkles } from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28 bg-[#FAFAFA]">

      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200/30 rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-100/40 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Developer Content & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Accent Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold tracking-wider uppercase">

              <span>Full-Stack Developer (MERN)</span>
            </div>

            {/* Main Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Hello, I'm  <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-amber-600 to-amber-500">
                Mayur Parmar
              </span>
            </h1>

            {/* Location Tag */}
            <div className="flex items-center space-x-2 text-gray-600 text-sm font-medium">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Indore, India</span>
            </div>

            {/* Crisp 2-Line Bio */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
              Full stack developer specialised in MERN stack with additional UI/UX design skills, focused on building responsive and scalable web applications. Actively seeking Remote / Hybrid / On-site roles and open to relocate Pan-India.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">

              {/* Primary Download Resume Button */}
              <a
                href="/images/MAYUR PARMAR..resume.pdf"
                download="MAYUR_PARMAR_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-gray-900 bg-amber-500 hover:bg-amber-400 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-98 transition-all duration-200 group cursor-pointer"
              >
                <Download className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              {/* Secondary View Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl hover:border-gray-300 shadow-sm active:scale-98 transition-all duration-200 group"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 ml-2 text-gray-500 group-hover:text-amber-500 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Image with Soft Amber Glow */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center">
              <div className="relative group w-full">

                {/* Glowing Amber Backdrop */}
                <div className="absolute -inset-3 bg-gradient-to-r from-amber-500 to-amber-300 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500 group-hover:scale-105" />

                {/* Profile Card Frame */}
                <div className="relative rounded-2xl bg-white p-2.5 shadow-2xl border border-gray-100 overflow-hidden transform transition duration-300 group-hover:-translate-y-1">
                  <img
                    src="/images/Myphoto.jpg"
                    alt="Mayur Parmar - Full Stack MERN Developer"
                    className="w-full h-auto max-h-[22rem] sm:max-h-[26rem] object-contain object-center rounded-xl bg-gray-50"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/profile.jpg";
                    }}
                  />
                </div>

              </div>

              {/* GitHub and LinkedIn Links Below Image */}
              <div className="mt-5 flex items-center justify-center space-x-7 pt-1">
                <a
                  href="https://github.com/mayur4282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2.5 text-gray-800 hover:text-amber-600 font-semibold text-base transition-colors group"
                >
                  <GithubIcon className="w-6.5 h-6.5 sm:w-7 sm:h-7 text-gray-800 group-hover:text-amber-600 transition-transform group-hover:scale-110" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/mayur-parmar4282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2.5 text-gray-800 hover:text-amber-600 font-semibold text-base transition-colors group"
                >
                  <LinkedinIcon className="w-6.5 h-6.5 sm:w-7 sm:h-7 text-gray-800 group-hover:text-amber-600 transition-transform group-hover:scale-110" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
