"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, FileText, Presentation, Award } from "lucide-react";

const achievements = [
  {
    title: "Research Paper Published",
    subtitle: "IJCRT Journal",
    description: "Published research paper titled 'Intelligent Discipline Monitoring Robot' in IJCRT.",
    icon: <FileText className="w-8 h-8" />,
    color: "bg-blue-500",
  },
  {
    title: "Paper Presentation",
    subtitle: "Exploratory Data Analysis",
    description: "Participant in Paper Presentation on Exploratory Data Analysis, showcasing analytical skills.",
    icon: <Presentation className="w-8 h-8" />,
    color: "bg-purple-500",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 text-primary-blue font-semibold mb-2">
            <Trophy className="w-5 h-5" /> Achievements
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones & Activities</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${item.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-700`} />
              
              <div className="flex items-start gap-6 relative z-10">
                <div className="p-4 rounded-2xl bg-background text-primary-blue shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-primary-blue text-sm font-semibold mb-3">{item.subtitle}</p>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
