'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy, Target, Brain } from 'lucide-react';

const experiences = [
  {
    title: 'Founder & In-Game Leader',
    company: 'GOAT ESPORTS ORGANISATION',
    period: 'April 2019 - Present',
    location: 'India (Hybrid)',
    type: 'Full-time',
    description: 'Leading and managing a competitive esports organization with multiple active rosters across various gaming titles.',
    achievements: [
      'Managing 5 active rosters: Free Fire Max, BGMI, Indus, Pokemon Unite, FIFA',
      'Strategic leadership and talent scouting for competitive gaming',
      'Performance management and discipline cultivation',
      'Building growth culture and team development',
      'Tier 1/2/3 tournament participation and coordination'
    ],
    icon: Trophy,
    color: 'bg-purple-500/10 text-purple-600 border-purple-200'
  },
  {
    title: 'YouTuber & Content Creator',
    company: 'Java 007',
    period: 'April 2024 - January 2026',
    location: 'India',
    type: 'Content Creation',
    description: 'Creating engaging esports, gaming, and infotainment content for online audience.',
    achievements: [
      'Content creation for esports and gaming community',
      'Script writing, video editing, and thumbnail design',
      'SEO optimization and audience growth strategies',
      'Community engagement and brand building',
      'Consistent content schedule and quality maintenance'
    ],
    icon: Brain,
    color: 'bg-blue-500/10 text-blue-600 border-blue-200'
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            My journey in entrepreneurship, leadership, and content creation
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-8 border border-line hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Icon and basic info */}
                  <div className="lg:w-1/3">
                    <div className={`w-16 h-16 rounded-lg ${exp.color} border flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-accent mb-4">
                      {exp.company}
                    </h4>
                    
                    <div className="space-y-2 text-muted">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description and achievements */}
                  <div className="lg:w-2/3">
                    <p className="text-muted leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-accent" />
                        Key Responsibilities & Achievements
                      </h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (achIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills developed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-background rounded-xl p-8 border border-line"
        >
          <h3 className="text-2xl font-semibold text-accent mb-6 text-center">
            Skills Developed Through Experience
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-card/50 border border-line">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎯</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Strategic Leadership</h4>
              <p className="text-sm text-muted">Team management and strategic planning</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-line">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📊</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Performance Analysis</h4>
              <p className="text-sm text-muted">Data-driven decision making</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-line">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎬</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Content Creation</h4>
              <p className="text-sm text-muted">Video production and digital marketing</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-line">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🤝</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Community Building</h4>
              <p className="text-sm text-muted">Audience engagement and growth</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-line">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💡</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Problem Solving</h4>
              <p className="text-sm text-muted">Creative solutions and innovation</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-line">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📈</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Business Development</h4>
              <p className="text-sm text-muted">Growth strategies and partnerships</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
