"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code, Brain, Cloud } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-primary-purple" />,
      title: "AI/ML Enthusiast",
      description: "Deeply interested in Machine Learning and Natural Language Processing.",
    },
    {
      icon: <Code className="w-6 h-6 text-primary-blue" />,
      title: "Web Developer",
      description: "Building responsive and interactive web applications using modern tech.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-cyan-500" />,
      title: "Cloud & DevOps",
      description: "Exploring cloud computing and automation for scalable solutions.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-secondary/30 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 text-primary-blue font-semibold mb-2">
            <User className="w-5 h-5" /> About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Summary</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              I am a dedicated Computer Science Engineering student with a strong academic background and a passion for technology. My journey in tech is driven by curiosity and a desire to build practical applications that solve real-world problems.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              With a CGPA of 8.3 and a high-achieving record in my diploma and SSLC, I have consistently demonstrated my commitment to excellence. I thrive in team environments and am always eager to learn and adapt to new technologies in the fast-paced tech landscape.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((item, index) => (
                <div key={index} className="p-4 glass rounded-xl hover:bg-primary-blue/5 transition-all">
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-bold mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-foreground/60">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2 relative z-10">
               {/* Placeholder for professional image */}
               <div className="w-full h-full bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 rounded-2xl flex items-center justify-center">
                  <User className="w-32 h-32 text-primary-blue/30" />
               </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-blue/30 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-purple/30 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
