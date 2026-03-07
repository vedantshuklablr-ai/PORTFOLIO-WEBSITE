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
                I am a passionate B.Tech Computer Science Engineering student with a strong foundation 
                in software development and analytical problem-solving. My journey spans across 
                programming languages like C, Python, and C#, with a keen interest in machine learning 
                and cybersecurity.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 border border-line hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-accent mb-4">
                Leadership & Entrepreneurship
              </h3>
              <p className="text-muted leading-relaxed">
                As the Founder and In-Game Leader of GOAT ESPORTS ORGANISATION, I manage multiple 
                competitive gaming rosters, fostering talent development and strategic growth. This 
                role has honed my leadership abilities, strategic thinking, and team management skills.
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
                Technical Focus
              </h3>
              <p className="text-muted leading-relaxed">
                My technical expertise spans multiple domains including software development, 
                machine learning, and cybersecurity. I am proficient in various programming 
                languages and frameworks, with hands-on experience in developing real-world 
                applications and solutions.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 border border-line hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-accent mb-4">
                Career Objectives
              </h3>
              <p className="text-muted leading-relaxed">
                I am actively seeking internship opportunities to apply my technical skills and 
                leadership experience in a professional environment. My goal is to contribute 
                to innovative projects while continuing to grow as a software engineer and 
                technology leader.
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
