"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Briefcase, Bot, ShoppingCart, Truck, Zap } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Intelligent Discipline Monitoring Robot",
    category: "AI/ML",
    description: "An IoT-based line following robot designed for discipline monitoring. Research paper published in IJCRT.",
    icon: <Bot className="w-10 h-10" />,
    tech: ["IoT", "Robotics", "Sensors"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    category: "Web",
    description: "A comprehensive frontend development project focused on user experience and responsive design.",
    icon: <ShoppingCart className="w-10 h-10" />,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Mental Health Chatbot",
    category: "AI/ML",
    description: "An AI-powered chatbot using Natural Language Processing (NLP) to provide mental health interaction.",
    icon: <Zap className="w-10 h-10" />,
    tech: ["Python", "NLP", "Flask"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Food Delivery Web App",
    category: "Web",
    description: "Responsive UI with full cart functionality and order flow simulation.",
    icon: <Truck className="w-10 h-10" />,
    tech: ["React", "Tailwind", "Firebase"],
    github: "#",
    demo: "#",
  },
];

const categories = ["All", "AI/ML", "Web"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="flex items-center gap-2 text-primary-blue font-semibold mb-2">
            <Briefcase className="w-5 h-5" /> Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Works</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full mb-8" />
          
          <div className="flex gap-4 p-1 glass rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full transition-all text-sm font-medium ${
                  filter === cat
                    ? "bg-primary-blue text-white shadow-md"
                    : "hover:bg-primary-blue/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative glass p-8 rounded-3xl overflow-hidden hover:border-primary-blue/50 transition-all shadow-xl"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                  {project.icon}
                </div>
                
                <div className="relative z-10">
                   <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-primary-blue/10 text-primary-blue text-[10px] font-bold uppercase tracking-wider rounded-md">
                          {t}
                        </span>
                      ))}
                   </div>
                   
                   <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-blue transition-colors">
                     {project.title}
                   </h3>
                   
                   <p className="text-foreground/60 mb-8 leading-relaxed">
                     {project.description}
                   </p>
                   
                   <div className="flex gap-4">
                     <a href={project.github} className="flex items-center gap-2 text-sm font-bold hover:text-primary-blue transition-colors">
                       <Github className="w-5 h-5" /> GitHub
                     </a>
                     <a href={project.demo} className="flex items-center gap-2 text-sm font-bold hover:text-primary-blue transition-colors">
                       <ExternalLink className="w-5 h-5" /> Live Demo
                     </a>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
