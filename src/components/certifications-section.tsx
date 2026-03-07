'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle, Building, Github, Trophy, Code } from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';

const certifications = [
  {
    title: 'Python for Data Science',
    issuer: 'IBM',
    issueDate: '2024',
    credentialId: 'IBMPY1012024',
    skills: ['Python', 'Data Science', 'Programming'],
    verificationLink: 'https://www.credly.com/badges/example',
    icon: '🐍'
  },
  {
    title: 'C# Programming',
    issuer: 'Infosys Springboard',
    issueDate: '2024',
    credentialId: 'INFCS2024',
    skills: ['C#', 'Programming', '.NET'],
    verificationLink: 'https://infyspringboard.com/certificates/example',
    icon: '🔷'
  },
  {
    title: 'Machine Learning Fundamentals',
    issuer: 'Simplilearn',
    issueDate: '2024',
    credentialId: 'SML2024',
    skills: ['Machine Learning', 'AI', 'Data Analysis'],
    verificationLink: 'https://www.simplilearn.com/verify-certificate/example',
    icon: '🤖'
  },
  {
    title: 'NumPy for Data Analysis',
    issuer: 'Udemy',
    issueDate: '2024',
    credentialId: 'UDNP2024',
    skills: ['NumPy', 'Data Analysis', 'Python'],
    verificationLink: 'https://www.udemy.com/certificate/example',
    icon: '📊'
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco',
    issueDate: '2024',
    credentialId: 'CISCOSEC2024',
    skills: ['Cybersecurity', 'Network Security', 'IT Security'],
    verificationLink: 'https://www.credly.com/badges/example',
    icon: '🛡️'
  },
  {
    title: 'AI and Machine Learning',
    issuer: 'Accenture',
    issueDate: '2024',
    credentialId: 'ACCAML2024',
    skills: ['AI', 'Machine Learning', 'Digital Transformation'],
    verificationLink: 'https://www.accenture.com/certificates/example',
    icon: '🧠'
  },
  {
    title: 'Python Programming',
    issuer: 'Scaler',
    issueDate: '2024',
    credentialId: 'SCPY2024',
    skills: ['Python', 'Programming', 'Algorithms'],
    verificationLink: 'https://www.scaler.com/certificates/example',
    icon: '🐍'
  },
  {
    title: 'C++ Programming',
    issuer: 'Scaler',
    issueDate: '2024',
    credentialId: 'SCCPP2024',
    skills: ['C++', 'Programming', 'DSA'],
    verificationLink: 'https://www.scaler.com/certificates/example',
    icon: '⚡'
  },
  {
    title: 'Cybersecurity Awareness',
    issuer: 'HP LIFE',
    issueDate: '2024',
    credentialId: 'HPCSA2024',
    skills: ['Cybersecurity', 'Digital Safety', 'Security Awareness'],
    verificationLink: 'https://www.life-global.org/certificates/example',
    icon: '🔒'
  },
  {
    title: 'Digital Marketing',
    issuer: 'Google',
    issueDate: '2024',
    credentialId: 'GOOGDM2024',
    skills: ['Digital Marketing', 'SEO', 'Online Advertising'],
    verificationLink: 'https://learndigital.withgoogle.com/certificates/example',
    icon: '📱'
  },
  {
    title: 'Critical Infrastructure Protection',
    issuer: 'OPSWAT',
    issueDate: '2024',
    credentialId: 'OPSCIP2024',
    skills: ['Critical Infrastructure', 'Security', 'Compliance'],
    verificationLink: 'https://www.opswat.com/certificates/example',
    icon: '🏛️'
  },
  {
    title: 'Deloitte Virtual Internship',
    issuer: 'Deloitte Forage',
    issueDate: '2024',
    credentialId: 'DELF2024',
    skills: ['Professional Skills', 'Business Analysis', 'Consulting'],
    verificationLink: 'https://www.theforage.com/certificates/example',
    icon: '💼'
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Certifications
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Verified credentials from leading institutions and industry platforms
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <TiltCard key={index} intensity={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 border border-line hover:shadow-xl transition-all duration-300 group"
              >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cert.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted flex items-center gap-1">
                      <Building className="w-3 h-3" />
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              </div>

              {/* Meta info */}
              <div className="flex items-center gap-4 text-sm text-muted mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.issueDate}</span>
                </div>
                {cert.credentialId && (
                  <div className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-line/50 text-muted text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Verification Link */}
              {cert.verificationLink && (
                <a
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Certificate
                </a>
              )}
            </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-background rounded-xl p-8 border border-line"
        >
          <h3 className="text-2xl font-semibold text-accent mb-8 text-center">
            Certification Overview
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">
                {certifications.length}
              </div>
              <p className="text-muted">Total Certifications</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">
                {new Set(certifications.map(c => c.issuer)).size}
              </div>
              <p className="text-muted">Issuing Organizations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">
                {certifications.filter(c => c.skills.includes('Python')).length}
              </div>
              <p className="text-muted">Python Related</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">
                {certifications.filter(c => c.skills.includes('Cybersecurity')).length}
              </div>
              <p className="text-muted">Security Focused</p>
            </div>
          </div>

          {/* Skills Distribution */}
          <div className="mt-8">
            <h4 className="font-semibold text-foreground mb-4 text-center">
              Skills Distribution
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {Array.from(new Set(certifications.flatMap(c => c.skills))).map((skill, index) => {
                const count = certifications.filter(c => c.skills.includes(skill)).length;
                return (
                  <div
                    key={index}
                    className="px-4 py-2 bg-accent/10 rounded-full text-center"
                  >
                    <div className="font-semibold text-accent">{count}</div>
                    <div className="text-xs text-muted">{skill}</div>
                  </div>
                );
              })}
            </div>
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
            Connect on Learning Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://learn.microsoft.com/en-gb/users/vedantshukla-6026/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 font-medium"
            >
              <Award className="w-5 h-5" />
              Microsoft Learn
            </a>
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
