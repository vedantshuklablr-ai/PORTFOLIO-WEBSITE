'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Users } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech Computer Science Engineering',
    institution: 'Dayananda Sagar University',
    period: 'August 2025 - August 2029',
    location: 'Bengaluru, Karnataka, India',
    status: 'Current Student',
    description: 'Pursuing Bachelor of Technology in Computer Science Engineering with focus on modern software development practices.',
    highlights: [
      'Comprehensive curriculum in Computer Science fundamentals',
      'Hands-on experience with latest technologies',
      'Industry collaborations and internship opportunities',
      'Research and innovation focus'
    ],
    icon: GraduationCap,
    color: 'bg-green-500/10 text-green-600 border-green-200'
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Kendriya Vidyalaya',
    period: 'April 2014 - May 2025',
    location: 'Multiple Locations (India)',
    status: 'Completed',
    description: 'Completed school education with First Division and PCM specialization across multiple KV institutions.',
    highlights: [
      'First Division with PCM specialization',
      'Scout & Guide Troop Leader at KV Kollam',
      'Studied across multiple KV/Air Force institutions',
      'Consistent academic performance'
    ],
    institutions: [
      'KV Ghaziabad',
      'KV Bidar', 
      'KV Lucknow',
      'KV Kanpur',
      'KV Kollam'
    ],
    icon: BookOpen,
    color: 'bg-blue-500/10 text-blue-600 border-blue-200'
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education Journey
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            My academic foundation and continuous learning path
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-8 border border-line hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Icon and basic info */}
                  <div className="lg:w-1/3">
                    <div className={`w-16 h-16 rounded-lg ${edu.color} border flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl font-semibold text-accent mb-4">
                      {edu.institution}
                    </h4>
                    
                    <div className="space-y-2 text-muted">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{edu.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description and highlights */}
                  <div className="lg:w-2/3">
                    <p className="text-muted leading-relaxed mb-6">
                      {edu.description}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent" />
                        Key Highlights
                      </h5>
                      <ul className="space-y-3">
                        {edu.highlights.map((highlight, hlIndex) => (
                          <motion.li
                            key={hlIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (hlIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Institutions list for school education */}
                    {edu.institutions && (
                      <div>
                        <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5 text-accent" />
                          Institutions Attended
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.institutions.map((institution, instIndex) => (
                            <span
                              key={instIndex}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                            >
                              {institution}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership and Extracurricular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-background rounded-xl p-8 border border-line"
        >
          <h3 className="text-2xl font-semibold text-accent mb-6 text-center">
            Leadership & Extracurricular Activities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-card/50 border border-line">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎖️</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Scout & Guide Leader</h4>
              <p className="text-sm text-muted">Troop Leader at KV Kollam</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-line">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🏫</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Multi-Institution Experience</h4>
              <p className="text-sm text-muted">Adaptability across diverse environments</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-line">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🔬</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">PCM Specialization</h4>
              <p className="text-sm text-muted">Strong foundation in sciences</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
