"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold text-gradient mb-2">Jei Keshav S</span>
            <p className="text-foreground/40 text-sm">Computer Science Engineering Student</p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-primary-blue transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-blue transition-colors">About</a>
            <a href="#projects" className="hover:text-primary-blue transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-blue transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-foreground/40">
            © {currentYear} Jei Keshav S. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 p-4 bg-primary-blue text-white rounded-full shadow-2xl hover:bg-blue-600 transition-all"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
}

export function BackgroundParticles() {
  const [particles, setParticles] = useState<{ x: string; y: string; opacity: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      opacity: Math.random() * 0.3,
      duration: Math.random() * 20 + 20,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: p.x, 
            y: p.y,
            opacity: p.opacity
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            x: ["0%", "50%", "0%"],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-primary-blue/30 rounded-full blur-sm"
        />
      ))}
    </div>
  );
}
