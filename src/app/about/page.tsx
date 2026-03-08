'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Shield, Briefcase, MessageSquare, Zap, Award, Target, Users } from 'lucide-react';
import { LogoIcon, logos } from '@/components/ui/logo-icons';
import { TiltCard } from '@/components/ui/tilt-card';

export default function AboutPage() {
  const skills = [
    { icon: Code, title: 'Programming', description: 'C, Python, JavaScript, TypeScript' },
    { icon: Brain, title: 'AI/ML', description: 'TensorFlow, PyTorch, NumPy' },
    { icon: Shield, title: 'Cybersecurity', description: 'Network Security, Protocols' },
    { icon: Briefcase, title: 'Business', description: 'Digital Marketing, Strategy' },
    { icon: MessageSquare, title: 'Leadership', description: 'Team Management, Coordination' },
    { icon: Zap, title: 'Tools', description: 'Git, Docker, VS Code' }
  ];

  const achievements = [
    { icon: Award, title: '12+ Projects', description: 'Completed projects' },
    { icon: Target, title: '10+ Hackathons', description: 'Events participated' },
    { icon: Users, title: '1K+ Subscribers', description: 'YouTube channel' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              20-year-old tech enthusiast from Lucknow, currently based in Bangalore. Passionate about hackathons, ideathons, workshops, and building innovative projects while learning and collaborating with teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Core Competencies
            </h2>
            <p className="text-muted">
              Technical skills and expertise areas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <TiltCard key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-8 border border-line hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-muted">
                    {skill.description}
                  </p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Key Achievements
            </h2>
            <p className="text-muted">
              Milestones and accomplishments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <TiltCard key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-8 border border-line hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted">
                    {achievement.description}
                  </p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
