import React from 'react';
import { Download, ArrowDown, MapPin, Sparkles } from 'lucide-react';

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
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-xs sm:max-w-sm">

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
          </div>

        </div>
      </div>
    </section>
  );
}
