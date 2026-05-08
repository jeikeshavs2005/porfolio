"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Animated background circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-primary-blue font-semibold tracking-wider uppercase"
        >
          Welcome to my portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm <span className="text-gradient">Jei Keshav S</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl font-medium mb-8 h-12 text-foreground/80"
        >
          <Typewriter
            words={[
              "Computer Science Engineering Student",
              "AI/ML Enthusiast",
              "Web Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-lg text-foreground/60 mb-10 leading-relaxed"
        >
          Passionate Computer Science Engineering student with exposure to AI/ML, cloud computing, and DevOps concepts, eager to build innovative technical solutions and gain real-world experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 px-8 py-3 bg-primary-blue text-white rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-primary-blue/30"
          >
            <Download className="w-5 h-5" /> Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3 glass rounded-full font-semibold hover:bg-primary-blue/10 transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 text-foreground/60"
        >
          <a href="mailto:jeikeshavs@gmail.com" className="flex items-center gap-2 hover:text-primary-blue transition-colors">
            <Mail className="w-5 h-5" /> jeikeshavs@gmail.com
          </a>
          <a href="tel:+916369452062" className="flex items-center gap-2 hover:text-primary-blue transition-colors">
            <Phone className="w-5 h-5" /> +91 6369452062
          </a>
          <a href="https://linkedin.com/in/jeikeshavs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-blue transition-colors">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
