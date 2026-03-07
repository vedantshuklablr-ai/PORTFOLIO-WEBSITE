'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Copy, Check } from 'lucide-react';
import { LogoIcon, logos } from '@/components/ui/logo-icons';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vedant.shukla@example.com',
    href: 'mailto:vedant.shukla@example.com',
    color: 'text-blue-600'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+91XXXXXXXXXX',
    color: 'text-green-600'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lucknow, Uttar Pradesh • Currently in Bangalore',
    href: '#',
    color: 'text-red-600'
  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vedant-shukla-7735a7313/',
    logo: logos.linkedin,
    color: 'hover:bg-blue-50 border-blue-200'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/vedantshuklablr-ai',
    logo: logos.github,
    color: 'hover:bg-gray-50 border-gray-200'
  },
  {
    name: 'Microsoft Learn',
    href: 'https://learn.microsoft.com/en-gb/users/vedantshukla-6026/',
    logo: logos.microsoft,
    color: 'hover:bg-blue-50 border-blue-200'
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/VEDANTSHUKLA007/',
    logo: logos.leetcode,
    color: 'hover:bg-yellow-50 border-yellow-200'
  },
  {
    name: 'HackerRank',
    href: 'https://www.hackerrank.com/profile/vedantshuklablr',
    logo: logos.hackerrank,
    color: 'hover:bg-green-50 border-green-200'
  }
];

export function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a conversation about technology and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-line hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center ${info.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted">{info.label}</div>
                      <div className="font-medium text-foreground">{info.value}</div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(info.value, info.label)}
                      className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                      title={`Copy ${info.label}`}
                    >
                      {copied === info.label ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-muted" />
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="bg-background rounded-xl p-6 border border-line">
              <h4 className="font-semibold text-foreground mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <a
                  href="mailto:vedant.shukla@example.com"
                  className="flex items-center gap-3 p-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Send Email</span>
                </a>
                <a
                  href="#resume"
                  className="flex items-center gap-3 p-3 bg-card border border-line rounded-lg hover:bg-accent/10 transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  <span className="font-medium">Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Profiles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Professional Profiles
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl border ${link.color} hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <LogoIcon src={link.logo} alt={link.name} size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {link.name}
                      </div>
                      <div className="text-sm text-muted">
                        Visit Profile
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 border border-line"
            >
              <h4 className="font-semibold text-foreground mb-4">Let's Connect</h4>
              <p className="text-muted mb-4">
                I'm always interested in hearing about new opportunities, exciting projects, or just having a conversation about technology and innovation. Feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Open to Opportunities
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Available for Internships
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Collaborations Welcome
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-card rounded-xl p-8 border border-line"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Thank You for Visiting
          </h3>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            I appreciate you taking the time to explore my portfolio. I look forward to the possibility of working together and creating something amazing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#home"
              className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 font-medium"
            >
              Back to Top
            </a>
            <a
              href="mailto:vedant.shukla@example.com"
              className="px-8 py-3 bg-background border border-line rounded-lg hover:bg-accent/10 transition-all duration-300 hover:scale-105 font-medium"
            >
              Send Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
