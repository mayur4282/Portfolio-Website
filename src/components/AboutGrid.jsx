import React from 'react';
import { Code2, GraduationCap, Award, Trophy, CheckCircle2, ExternalLink } from 'lucide-react';

export default function AboutGrid() {
  return (
    <section id="about" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold tracking-wider uppercase border border-amber-200/60">
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            I am a Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), JavaScript, Tailwind CSS, and Git. I have hands-on experience building responsive, scalable applications and RESTful APIs, including real-time calling platforms and marketplace clones.
            Additionally, with a strong foundation in UI/UX design using Figma, I easily turn visual ideas into clean, functional code. I am a fast learner, passionate about clean architecture, and eager to build impactful software.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1: Core Skills */}
          <div className="group bg-[#FAFAFA] p-8 rounded-2xl border border-gray-200/80 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-700 group-hover:bg-amber-500 group-hover:text-gray-900 transition-colors duration-300">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Core Skills</h3>
              </div>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <span className="font-semibold text-gray-900 block mb-1.5">Frontend:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['React.js', 'Redux', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3'].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-white border border-gray-200 rounded-md font-medium text-xs text-gray-800 shadow-2xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-gray-900 block mb-1.5">Backend:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Node.js', 'Express.js', 'RESTful APIs', 'WebSockets (Socket.io)'].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-white border border-gray-200 rounded-md font-medium text-xs text-gray-800 shadow-2xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-gray-900 block mb-1.5">Database & Caching:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['MongoDB', 'Redis', 'SQL'].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-white border border-gray-200 rounded-md font-medium text-xs text-gray-800 shadow-2xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-gray-900 block mb-1.5">DevOps & Deployment:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Docker', 'Vercel', 'Netlify', 'Render', 'DigitalOcean'].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-white border border-gray-200 rounded-md font-medium text-xs text-gray-800 shadow-2xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-gray-900 block mb-1.5">Tools & Collaboration:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Git', 'GitHub', 'Postman', 'Figma'].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-white border border-gray-200 rounded-md font-medium text-xs text-gray-800 shadow-2xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Education */}
          <div className="group bg-[#FAFAFA] p-8 rounded-2xl border border-gray-200/80 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-700 group-hover:bg-amber-500 group-hover:text-gray-900 transition-colors duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-2xs space-y-2">
                <div className="inline-block px-2.5 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold">
                  Postgraduate Degree
                </div>
                <h4 className="text-lg font-bold text-gray-900">Integrated MCA</h4>
                <p className="text-sm font-medium text-gray-700">
                  Acropolis Institute of Technology and Research
                </p>
                <p className="text-sm font-bold text-gray-900">CGPA: 7.86</p>
                <p className="text-xs text-gray-500">Indore, Madhya Pradesh</p>
              </div>
            </div>
          </div>

          {/* Card 3: Certifications */}
          <div className="group bg-[#FAFAFA] p-8 rounded-2xl border border-gray-200/80 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-700 group-hover:bg-amber-500 group-hover:text-gray-900 transition-colors duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
              </div>

              <div className="space-y-3.5">
                <div className="bg-white p-4 rounded-xl border border-gray-200/80 flex items-center justify-between shadow-2xs">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Full Stack Web Development</h4>
                      <p className="text-xs text-gray-500 font-medium">Apna College</p>
                    </div>
                  </div>
                  <a
                    href="/images/certificate. full stxk.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors group/cert"
                  >
                    <span>View</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-amber-600 group-hover/cert:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-200/80 flex items-center justify-between shadow-2xs">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">IBM UI/UX Design</h4>
                      <p className="text-xs text-gray-500 font-medium">IBM Professional Certificate</p>
                    </div>
                  </div>
                  <a
                    href="/images/uiux certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors group/cert"
                  >
                    <span>View</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-amber-600 group-hover/cert:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Key Achievements */}
          <div className="group bg-[#FAFAFA] p-8 rounded-2xl border border-gray-200/80 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-700 group-hover:bg-amber-500 group-hover:text-gray-900 transition-colors duration-300">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Key Achievements</h3>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-2xs flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold flex items-center justify-center">1st</span>
                  <p className="text-xs text-gray-700 font-medium leading-snug">
                    Achieved <strong className="text-gray-900">1st position</strong> in TeamIdea Lab Competition conducted by college.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-2xs flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold flex items-center justify-center">1st</span>
                  <p className="text-xs text-gray-700 font-medium leading-snug">
                    Secured <strong className="text-gray-900">1st position</strong> in College Art Competition organized by Acropolis Institute.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-2xs flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold flex items-center justify-center">★</span>
                  <p className="text-xs text-gray-700 font-medium leading-snug">
                    Awarded by <strong className="text-gray-900">CM House of Madhya Pradesh</strong> with an exclusive invitation & visit to CM House.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
