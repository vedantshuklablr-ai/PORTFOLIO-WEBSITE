'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-background rounded-xl p-8 border border-line hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-accent mb-4">
                Professional Summary
              </h3>
              <p className="text-muted leading-relaxed">
                I am a 20-year-old tech enthusiast from Lucknow, Uttar Pradesh, with a passion for exploring new ideas and building innovative solutions. I thrive on participating in hackathons, ideathons, summits, seminars, and workshops where I can learn, collaborate, and challenge myself continuously.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 border border-line hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-accent mb-4">
                Technical Excellence
              </h3>
              <p className="text-muted leading-relaxed">
                My technical expertise spans multiple programming languages including C, Python, and C#, with a strong foundation in machine learning, cybersecurity, and data science. I am committed to continuous learning and staying updated with the latest technological advancements.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-background rounded-xl p-8 border border-line hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-accent mb-4">
                Innovation & Collaboration
              </h3>
              <p className="text-muted leading-relaxed">
                I love to explore new technologies, think creatively, and work with teams to turn ideas into real projects. My goal is to continuously learn, improve my skills, and contribute to meaningful tech solutions that make a positive impact.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 border border-line hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-accent mb-4">
                Learning Philosophy
              </h3>
              <p className="text-muted leading-relaxed">
                I believe that the best learning comes from building, experimenting, and collaborating with others who share the same curiosity and passion for technology. Every project is an opportunity to grow and every challenge is a chance to innovate.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-background rounded-xl p-8 border border-line hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-2xl font-semibold text-accent mb-6 text-center">
                Core Competencies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-accent">💻</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Software Development</h4>
              <p className="text-sm text-muted">Full-stack development with modern technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-accent">🤖</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Machine Learning</h4>
              <p className="text-sm text-muted">AI/ML algorithms and data science applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-accent">🛡️</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Cybersecurity</h4>
              <p className="text-sm text-muted">Security protocols and threat analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-accent">🎮</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Esports Management</h4>
              <p className="text-sm text-muted">Team leadership and strategic gaming operations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
