import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 font-sans overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
          <h1 className="text-xl font-bold tracking-wide">Writwik Sati</h1>
          <nav className="space-x-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-8 pt-32 pb-28 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Full-Time React Developer
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Building <span className="text-indigo-400">modern</span>, <span className="text-indigo-400">scalable</span><br />
            web experiences
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg mb-10">
            I’m a React Developer at Ingversions, crafting high-performance production websites from scratch with a strong focus on UI quality, performance, and user experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-2xl border border-gray-700 hover:border-gray-500 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">About Me</h3>
            <p className="text-gray-400 leading-relaxed">
              I’m a BCA graduate and Full-Time React Developer at Ingversions with real-world experience building production-grade, scalable, and responsive web applications. I work closely with QA teams to deliver polished user experiences with performance and cross-browser compatibility in mind.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 rounded-3xl border border-gray-800"
          >
            <p className="text-sm text-gray-400 mb-2">Currently working at</p>
            <h4 className="text-xl font-semibold">Ingversions</h4>
            <p className="text-gray-400 mt-4">
              React • Tailwind CSS • Performance Optimization • QA Collaboration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-8 py-28 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12">Experience</h3>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-8 rounded-3xl"
          >
            <span className="absolute top-6 right-6 text-xs text-indigo-400">Sept 2024 – Present</span>
            <h4 className="text-xl font-semibold mb-2">Frontend Developer – Ingversions</h4>
            <p className="text-gray-400 mb-6">Remote</p>
            <ul className="space-y-3 text-gray-400 list-disc list-inside">
              <li>Built the official Ingversions Digital website from scratch using React.</li>
              <li>Implemented reusable components and scalable UI architecture.</li>
              <li>Optimized performance, SEO, and responsiveness across devices.</li>
              <li>Collaborated with QA teams for A/B testing and bug resolution.</li>
              <li>Used BrowserStack for cross-browser testing.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-28">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12">Selected Projects</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <Project
              title="Ingversions Digital"
              desc="Official production website built from scratch with React, focusing on performance, SEO, and modern UI patterns."
              link="https://ingversionsdigital.com/"
            />
            <Project
              title="Buildd – Company Website"
              desc="Modern business website built using React and Tailwind CSS with a strong emphasis on clean UI and responsiveness."
              link="https://new-buildd.vercel.app/"
            />
            <Project
              title="Booking App (MERN)"
              desc="Airbnb-style booking application with authentication, listings, and booking flow built using the MERN stack."
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-28 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Node.js (Basic)", "Git & GitHub", "Figma", "BrowserStack"].map(skill => (
              <motion.div
                whileHover={{ y: -6 }}
                key={skill}
                className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-5 rounded-2xl text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-28">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Let’s Work Together</h3>
          <p className="text-gray-400 mb-10">
            Have a project or role in mind? I’m open to new opportunities.
          </p>
          <div className="space-y-2 text-gray-300">
            <p>📧 writwiksati674@gmail.com</p>
            <p>📱 +91-9044273170</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Writwik Sati — React Developer
      </footer>
    </div>
  );
}

function Project({ title, desc, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-8 rounded-3xl"
    >
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-400 mb-6">{desc}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm text-indigo-400 hover:text-indigo-300"
        >
          Visit Website →
        </a>
      )}
    </motion.div>
  );
}
