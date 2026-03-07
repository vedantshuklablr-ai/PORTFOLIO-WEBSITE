'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Trophy, Star, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'GitHub Journey',
    description: 'Active GitHub profile showcasing various programming projects, contributions, and open-source involvement. Focus on C, Python, and C# development with clean code practices.',
    period: 'January 2026 - Present',
    platform: 'GitHub',
    stats: {
      repositories: '25+',
      languages: '5+',
      contributions: '100+'
    },
    technologies: ['C', 'Python', 'C#', 'JavaScript', 'Git'],
    link: 'https://github.com/vedantshuklablr-ai',
    type: 'development',
    icon: Github,
    color: 'bg-gray-800/10 text-gray-700 border-gray-300'
  },
  {
    title: 'HackerRank Proficiency',
    description: 'Achieved 3-star silver rating in C programming on HackerRank. Solved numerous algorithmic problems demonstrating strong problem-solving skills and DSA knowledge.',
    period: '2024 - Present',
    platform: 'HackerRank',
    stats: {
      problems: '150+',
      rank: '3-Star Silver',
      streak: '30+ days'
    },
    technologies: ['C', 'Algorithms', 'Data Structures', 'Problem Solving'],
    link: 'https://www.hackerrank.com/profile/vedantshuklablr',
    type: 'competitive',
    icon: Trophy,
    color: 'bg-green-600/10 text-green-700 border-green-300'
  },
  {
    title: 'LeetCode Mastery',
    description: 'Regular practice on LeetCode focusing on C/C++ Data Structures and Algorithms problems. Building strong foundation for technical interviews and competitive programming.',
    period: '2024 - Present',
    platform: 'LeetCode',
    stats: {
      problems: '200+',
      acceptance: '75%',
      contests: '10+'
    },
    technologies: ['C++', 'C', 'DSA', 'Algorithms', 'Problem Solving'],
    link: 'https://leetcode.com/u/VEDANTSHUKLA007/',
    type: 'competitive',
    icon: Code,
    color: 'bg-yellow-500/10 text-yellow-700 border-yellow-300'
  }
];

const achievements = [
  {
    title: 'Problem Solving Excellence',
    description: 'Consistent performance in algorithmic challenges and competitive programming platforms',
    icon: Star,
    value: '350+',
    label: 'Problems Solved'
  },
  {
    title: 'Multi-Language Proficiency',
    description: 'Demonstrated expertise across multiple programming languages and paradigms',
    icon: Code,
    value: '5+',
    label: 'Languages'
  },
  {
    title: 'Platform Recognition',
    description: 'Achieved notable rankings and badges on competitive programming platforms',
    icon: Trophy,
    value: '3-Star',
    label: 'HackerRank'
  },
  {
    title: 'Consistent Growth',
    description: 'Maintained active coding streak and continuous learning trajectory',
    icon: TrendingUp,
    value: '30+',
    label: 'Day Streak'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projects & Coding Journey
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            My coding achievements and active development work across various platforms
          </p>
        </motion.div>

        {/* Main Projects */}
        <div className="space-y-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
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
                    <div className={`w-16 h-16 rounded-lg ${project.color} border flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-accent font-medium mb-4">
                      <span className="px-3 py-1 bg-accent/10 rounded-full text-sm">
                        {project.platform}
                      </span>
                      <span className="text-muted">
                        {project.period}
                      </span>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-background rounded-lg border border-line">
                          <div className="font-bold text-accent text-lg">{value}</div>
                          <div className="text-xs text-muted capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description and details */}
                  <div className="lg:w-2/3">
                    <p className="text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on {project.platform}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-background rounded-xl p-8 border border-line"
        >
          <h3 className="text-2xl font-semibold text-accent mb-8 text-center">
            Coding Achievements
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-card/50 rounded-lg border border-line hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">
                    {achievement.value}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted">
                    {achievement.description}
                  </p>
                  <div className="mt-2 text-xs text-accent font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Connect on Coding Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/vedantshuklablr-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.hackerrank.com/profile/vedantshuklablr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 font-medium"
            >
              <Trophy className="w-5 h-5" />
              HackerRank
            </a>
            <a
              href="https://leetcode.com/u/VEDANTSHUKLA007/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300 hover:scale-105 font-medium"
            >
              <Code className="w-5 h-5" />
              LeetCode
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
