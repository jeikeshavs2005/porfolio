"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    institution: "KPR Institute of Engineering and Technology, Coimbatore",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    duration: "2024 – 2027",
    details: "CGPA: 8.3",
    location: "Coimbatore, Tamil Nadu",
  },
  {
    institution: "PSG Polytechnic College",
    degree: "Diploma",
    duration: "2021 – 2024",
    details: "Percentage: 96.90%",
    location: "Coimbatore, Tamil Nadu",
  },
  {
    institution: "Govt Hr Sec School, Villur",
    degree: "SSLC",
    duration: "2020 – 2021",
    details: "Percentage: 100%",
    location: "Villur, Tamil Nadu",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 text-primary-blue font-semibold mb-2">
            <GraduationCap className="w-5 h-5" /> Education
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Journey</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
              
              <div className={`md:flex items-center justify-between gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`md:w-1/2 flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                  <div className="glass p-6 rounded-2xl hover:border-primary-blue/50 transition-all shadow-xl w-full group">
                    <div className="flex items-center gap-2 text-primary-blue font-bold mb-2 group-hover:translate-x-1 transition-transform">
                      <Award className="w-5 h-5" /> {item.degree}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.institution}</h3>
                    <div className={`flex flex-wrap gap-4 text-sm text-foreground/60 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {item.duration}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {item.location}</span>
                    </div>
                    <div className={`inline-block px-4 py-1 rounded-full bg-primary-blue/10 text-primary-blue font-bold text-sm`}>
                      {item.details}
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-4 h-4 bg-primary-blue rounded-full border-4 border-background shadow-[0_0_0_4px_rgba(59,130,246,0.2)] -translate-x-1/2 -translate-y-1/2 z-10" />
                
                <div className="hidden md:block md:w-1/2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
