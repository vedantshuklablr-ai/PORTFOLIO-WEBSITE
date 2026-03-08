'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Code, Database, Globe, Shield, Brain } from 'lucide-react';
import { LogoIcon, logos } from '@/components/ui/logo-icons';
import { TiltCard } from '@/components/ui/tilt-card';

const projectsData = [
  {
    title: 'AI Social Media Analyzer',
    description: 'A system designed to analyze images and captions from social media posts to detect harmful or inappropriate content using machine learning techniques.',
    technologies: [logos.python, logos.tensorflow, logos.mongodb],
    github: 'https://github.com/vedantshuklablr-ai/ai-social-media-analyzer',
    live: 'https://ai-social-analyzer.vercel.app',
    category: 'AI/ML',
    icon: Brain,
    featured: true
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring 3D animations and dark mode.',
    technologies: [logos.javascript, logos.typescript, logos.react, logos.vercel],
    github: 'https://github.com/vedantshuklablr-ai/PERSONAL-PORTFOLIO-WEBSITE',
    live: 'https://personal-portfolio-website-chi-lac.vercel.app',
    category: 'Web Development',
    icon: Globe,
    featured: true
  },
  {
    title: 'Cybersecurity Dashboard',
    description: 'Real-time network security monitoring dashboard with threat detection, vulnerability scanning, and security analytics.',
    technologies: [logos.python, logos.docker, logos.postgresql],
    github: 'https://github.com/vedantshuklablr-ai/cybersecurity-dashboard',
    live: 'https://security-dashboard.vercel.app',
    category: 'Cybersecurity',
    icon: Shield,
    featured: true
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard.',
    technologies: [logos.nodejs, logos.mongodb, logos.react, logos.javascript],
    github: 'https://github.com/vedantshuklablr-ai/ecommerce-platform',
    live: 'https://ecommerce-platform.vercel.app',
    category: 'Web Development',
    icon: Database,
    featured: false
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
    technologies: [logos.typescript, logos.react, logos.nodejs, logos.postgresql],
    github: 'https://github.com/vedantshuklablr-ai/task-management',
    live: 'https://task-management.vercel.app',
    category: 'Productivity',
    icon: Code,
    featured: false
  },
  {
    title: 'API Gateway Service',
    description: 'Microservices API gateway with authentication, rate limiting, request logging, and load balancing.',
    technologies: [logos.nodejs, logos.docker, logos.kubernetes, logos.redis],
    github: 'https://github.com/vedantshuklablr-ai/api-gateway',
    live: null,
    category: 'DevOps',
    icon: Globe,
    featured: false
  }
];

export default function ProjectsPage() {
  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Projects Portfolio
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Explore my latest projects showcasing expertise in web development, AI/ML, cybersecurity, and cloud technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
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
              Featured Projects
            </h2>
            <p className="text-muted">
              Highlighted projects demonstrating key skills and innovations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <TiltCard key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl overflow-hidden border border-line hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Project Header */}
                  <div className="p-6 border-b border-line">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <span className="text-xs text-muted px-2 py-1 bg-accent/10 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="px-6 py-4 bg-card/50">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center gap-1 px-2 py-1 bg-background border border-line rounded-md">
                          <LogoIcon src={tech} alt="Technology" size={14} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-6 py-4 bg-background border-t border-line">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-accent transition-colors duration-300 text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors duration-300 text-sm font-medium"
                        >
                          <Play className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
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
                Other Projects
              </h2>
              <p className="text-muted">
                Additional projects and experiments
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <TiltCard key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-background rounded-xl p-6 border border-line hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <span className="text-xs text-muted px-2 py-1 bg-accent/10 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-foreground text-background rounded hover:bg-accent transition-colors duration-300 text-xs"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1 bg-accent text-white rounded hover:bg-accent/80 transition-colors duration-300 text-xs"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Demo
                        </a>
                      )}
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
