import React, { useState } from 'react';
import { ExternalLink, FolderCode, ChevronLeft, ChevronRight } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

function ProjectCard({ project }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const images = Array.isArray(project.images) ? project.images : [project.image];

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <article className="group bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Project Image Box with Carousel Controls */}
        <div className="relative overflow-hidden aspect-video bg-gray-100 border-b border-gray-100">
          <img
            src={images[currentImgIndex]}
            alt={`${project.title} screenshot ${currentImgIndex + 1}`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
            }}
          />

          {/* Carousel Arrows if multiple images exist */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 hover:bg-amber-500 text-white hover:text-gray-900 transition-colors shadow-md backdrop-blur-xs"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 hover:bg-amber-500 text-white hover:text-gray-900 transition-colors shadow-md backdrop-blur-xs"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 bg-black/40 px-2 py-1 rounded-full backdrop-blur-xs">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImgIndex ? 'bg-amber-400 w-4' : 'bg-white/60 hover:bg-white'
                      }`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Card Content */}
        <div className="p-6 text-left space-y-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
            {project.title}
          </h3>

          {/* Detailed Summary */}
          <p className="text-sm text-gray-600 leading-relaxed font-normal">
            {project.summary}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-semibold text-amber-800 bg-amber-50/80 border border-amber-200/60 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Links */}
      <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors group/link"
        >
          <GithubIcon className="w-4 h-4 mr-2 text-gray-900 group-hover/link:text-amber-600 transition-colors" />
          <span>GitHub</span>
        </a>

        {project.live && project.live !== '#' && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold text-gray-900 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Real-Time Video Conferencing Application',
      summary: 'Gen-Z Video Call is a full-stack real-time video conferencing platform built with React, Node.js, WebRTC & Socket.IO. It enables instant peer-to-peer video/audio calls, screen sharing, and live in-meeting chat with message pinning, secured by token-based authentication.',
      images: [
        '/images/Screenshot (205).png',
        '/images/Screenshot (206).png',
        '/images/Screenshot (207).png',
      ],
      tags: ['React.js', 'Node.js', 'WebRTC', 'Socket.IO', 'Express.js', 'Tailwind CSS'],
      github: 'https://github.com/mayur4282/Gen-z-video-call',
      live: 'https://gen-z-video-call-frontend.onrender.com/',
    },
    {
      id: 2,
      title: 'Airbnb Listing Application (Wanderlust)',
      summary: 'Wanderlust is a full-stack MVC vacation rental platform inspired by Airbnb. Built with Node.js, Express, MongoDB & EJS, it features property CRUD, secure auth, Cloudinary image uploads, Mapbox interactive maps, and a user review system.',
      images: [
        '/images/Screenshot (194).png',
        '/images/Screenshot (198).png',
        '/images/Screenshot (199).png',
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Cloudinary', 'Mapbox'],
      github: 'https://github.com/mayur4282/Wanderlust',
      live: '#',
    },
    {
      id: 3,
      title: 'Advance Todo Application',
      summary: 'A modern, task management application built with React 19 and Vite. It features real-time progress tracking, precise date-time deadlines, smart input validation, and dynamic status/overdue indicators.',
      image: '/images/Screenshot (193).png',
      tags: ['React 19', 'Vite', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/mayur4282/advance-todo',
      live: '#',
    },
    {
      id: 4,
      title: 'Weather Application',
      summary: 'A responsive and dynamic Weather Application built with JavaScript. It integrates with weather APIs to provide real-time updates, accurate temperature readings, and location-based forecasts with a clean, user-friendly interface.',
      image: '/images/Screenshot (208).png',
      tags: ['JavaScript', 'Weather API', 'HTML5/CSS3', 'REST API'],
      github: 'https://github.com/mayur4282/Weather-app',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold tracking-wider uppercase border border-amber-200/60">

            <span>MY WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Projects
          </h2>

        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
