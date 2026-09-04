import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutGrid from './components/AboutGrid';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827] font-sans antialiased selection:bg-amber-500 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutGrid />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
