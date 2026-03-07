'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, MapPin } from 'lucide-react';
import { ParallaxBg } from '@/components/ui/parallax-bg';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vedant-shukla-7735a7313/',
    icon: Linkedin,
    color: 'hover:text-blue-600',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/vedantshuklablr-ai',
    icon: Github,
    color: 'hover:text-gray-600',
  },
  {
    name: 'Microsoft Learn',
    href: 'https://learn.microsoft.com/en-gb/users/vedantshukla-6026/',
    icon: ExternalLink,
    color: 'hover:text-blue-700',
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/VEDANTSHUKLA007/',
    icon: ExternalLink,
    color: 'hover:text-yellow-600',
  },
  {
    name: 'HackerRank',
    href: 'https://www.hackerrank.com/profile/vedantshuklablr',
    icon: ExternalLink,
    color: 'hover:text-green-600',
  },
];

export function HeroSection() {
  return (
    <section id="home">
      <ParallaxBg className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-accent font-semibold text-lg">Hello, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6"
          >
            Vedant Shukla
          </motion.h1>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted font-medium leading-relaxed">
              B.Tech CSE Student | Founder & IGL @{' '}
              <span className="text-accent font-semibold">GOAT ESPORTS ORGANISATION</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted mt-2">
              C, Python, C# | Certified Learner
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center text-muted mb-8"
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span>Bengaluru, Karnataka, India</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 bg-card border border-line rounded-lg hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:shadow-lg ${link.color}`}
                  aria-label={`Visit ${link.name} profile`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                </a>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#about"
              className="px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold"
            >
              Learn More About Me
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-card border border-line rounded-lg hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Floating animation indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-accent rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-accent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </ParallaxBg>
    </section>
  );
}
