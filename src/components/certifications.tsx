"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "Practical Introduction to Cloud Computing",
    issuer: "Codered",
    badge: "Cloud",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Natural Language Processing",
    issuer: "NPTEL",
    badge: "NLP",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    badge: "Data Science",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "English Certification (C1 Proficient)",
    issuer: "EF SET",
    badge: "Language",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "OpenCV Bootcamp",
    issuer: "Computer Vision Fundamentals",
    badge: "Vision",
    color: "from-indigo-500 to-blue-500",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 text-primary-blue font-semibold mb-2">
            <ShieldCheck className="w-5 h-5" /> Certifications
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognitions & Badges</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl mb-6 bg-gradient-to-br ${cert.color} flex items-center justify-center text-white shadow-lg shadow-blue-500/20`}>
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-blue transition-colors leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-foreground/50 font-medium">{cert.issuer}</p>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                 <span className="px-3 py-1 bg-background/50 rounded-full text-[10px] font-bold tracking-widest uppercase text-foreground/60 border border-border">
                   {cert.badge}
                 </span>
                 <button className="text-primary-blue hover:text-primary-purple transition-colors">
                    <ExternalLink className="w-4 h-4" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
