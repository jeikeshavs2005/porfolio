"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const internships = [
  {
    company: "NoviTech",
    role: "UI/UX Design Intern",
    duration: "4 Weeks",
    description: "Worked on UI/UX design principles and prototyping to create user-centric digital experiences.",
    highlights: ["Design Principles", "Prototyping", "User Research"],
  },
  {
    company: "Craper Soft",
    role: "Web Development Intern",
    duration: "4 Weeks",
    description: "Assisted in frontend web development tasks, gaining practical experience in building modern web interfaces.",
    highlights: ["Frontend Development", "Team Collaboration", "Bug Fixing"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 text-primary-blue font-semibold mb-2">
            <Building2 className="w-5 h-5" /> Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Internships</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {internships.map((intern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-8 rounded-3xl group hover:border-primary-blue/50 transition-all shadow-xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gradient">{intern.company}</h3>
                  <p className="text-lg font-medium text-foreground/80">{intern.role}</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-foreground/40 font-medium px-3 py-1 bg-background/50 rounded-full">
                  <Calendar className="w-4 h-4" /> {intern.duration}
                </div>
              </div>
              
              <p className="text-foreground/60 mb-8 leading-relaxed">
                {intern.description}
              </p>
              
              <div className="space-y-3">
                {intern.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
