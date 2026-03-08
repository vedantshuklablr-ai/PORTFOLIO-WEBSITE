'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, Github, Linkedin, ExternalLink } from 'lucide-react';
import { LogoIcon, logos } from '@/components/ui/logo-icons';
import { TiltCard } from '@/components/ui/tilt-card';

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
    value: '+91 XXXXXXXXXX',
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
    name: 'YouTube',
    href: 'https://www.youtube.com/@Java007',
    logo: logos.youtube,
    color: 'hover:bg-red-50 border-red-200'
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

export default function ContactPage() {
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Let's connect and discuss opportunities, collaborations, or just have a chat about technology!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
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
              Contact Information
            </h2>
            <p className="text-muted">
              Reach out through any of these channels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <TiltCard key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-8 border border-line hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <div className={`w-16 h-16 rounded-full ${item.color}/10 flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.label}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-muted">
                      {item.value}
                    </span>
                    {item.label === 'Email' && (
                      <button
                        onClick={() => copyToClipboard(item.value, 'email')}
                        className="p-1 rounded hover:bg-accent/10 transition-colors"
                        aria-label="Copy email"
                      >
                        {copied === 'email' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted" />
                        )}
                      </button>
                    )}
                  </div>
                  <a
                    href={item.href}
                    className={`inline-flex items-center gap-2 px-6 py-3 ${item.color} rounded-lg hover:opacity-80 transition-opacity duration-300`}
                  >
                    {item.label === 'Email' ? 'Send Message' : item.label === 'Phone' ? 'Call' : 'View Location'}
                  </a>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Social Profiles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
          </motion.div>
        </div>
      </section>

      {/* Message Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl p-8 border border-line"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-line rounded-lg bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-line rounded-lg bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-line rounded-lg bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-line rounded-lg bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors font-medium"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
