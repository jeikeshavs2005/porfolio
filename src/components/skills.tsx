"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Cpu, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    color: "text-blue-500",
    skills: ["Python", "Java", "C", "MySQL"],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-6 h-6" />,
    color: "text-purple-500",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Concepts",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-cyan-500",
    skills: ["AI/ML Basics", "Cloud Computing", "DevOps"],
  },
  {
    title: "Tools",
    icon: <Settings className="w-6 h-6" />,
    color: "text-indigo-500",
    skills: ["Git", "GitHub"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 text-primary-blue font-semibold mb-2">
            <Cpu className="w-5 h-5" /> Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl group"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-background shadow-inner inline-block ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill}</span>
                      <span className="text-foreground/40">Advanced</span>
                    </div>
                    <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                        className={`h-full bg-gradient-to-r from-primary-blue to-primary-purple`}
                      />
                    </div>
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
