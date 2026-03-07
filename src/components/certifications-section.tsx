'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle, Building, Github, Trophy, Code } from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';

const certifications = [
  {
    title: 'Microsoft Learn – Skills & Badges',
    issuer: 'Microsoft',
    issueDate: 'Jul 2025',
    credentialId: 'Microsoft Learn Profile',
    skills: ['Microsoft Technologies', 'Cloud Computing', 'Azure'],
    verificationLink: 'https://learn.microsoft.com/en-gb/users/vedantshukla-6026/',
    icon: '🏢'
  },
  {
    title: 'Programming in C# Certification',
    issuer: 'Infosys',
    issueDate: 'Dec 2025',
    credentialId: '1-8a292201-7c47-4fba-81cb-5983a55b7cec',
    skills: ['C#', 'Programming', '.NET Framework'],
    verificationLink: '#',
    icon: '🔷'
  },
  {
    title: 'MATHLAB Certification',
    issuer: 'MathLab-AI',
    issueDate: 'Dec 2025',
    credentialId: 'VEDANT SHUKLA MATLAB',
    skills: ['MATLAB', 'Mathematical Computing', 'Data Analysis'],
    verificationLink: '#',
    icon: '�'
  },
  {
    title: 'TCS iON Career Edge - Young Professional',
    issuer: 'TCS iON',
    issueDate: 'Jun 2025',
    credentialId: '240640-28489282-1016',
    skills: ['Interpersonal Leadership', 'Interpersonal Communication', 'Soft Skills', 'Corporate Finance', 'Interviewing', 'Email Marketing'],
    verificationLink: '#',
    icon: '🏢'
  },
  {
    title: 'Department of Factories and Boilers',
    issuer: 'Government of Kerala',
    issueDate: 'Sep 2019',
    credentialId: 'Safety Certification',
    skills: ['Fire Safety', 'Public Safety', 'Industrial Safety', 'Safety Management Systems'],
    verificationLink: '#',
    icon: '🏛️'
  },
  {
    title: 'NumPy Programming Mastery: Learn Python for Data Analysis',
    issuer: 'Udemy',
    issueDate: 'Apr 2025',
    credentialId: 'UC-d9db8be7-cc3d-40a3-9bef-6fb5acf0981a',
    skills: ['Data Analysis', 'Python', 'NumPy'],
    verificationLink: '#',
    icon: '�'
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    issueDate: 'Apr 2025',
    credentialId: 'Cisco Certification',
    skills: ['Cybersecurity', 'Network Security', 'Security Fundamentals'],
    verificationLink: '#',
    icon: '🛡️'
  },
  {
    title: 'Machine learning for Beginners',
    issuer: 'Simplilearn',
    issueDate: 'Jun 2025',
    credentialId: '8479226',
    skills: ['Machine Learning', 'AI', 'Data Science'],
    verificationLink: '#',
    icon: '🤖'
  },
  {
    title: 'Python 101 for Data Science',
    issuer: 'IBM',
    issueDate: 'Jun 2025',
    credentialId: 'a94565369a9c47d1a57d26118428179e',
    skills: ['Data Science', 'Python', 'Programming'],
    verificationLink: '#',
    icon: '🐍'
  },
  {
    title: 'Deloitte Australia - Data Analytics Job Simulation',
    issuer: 'Forage',
    issueDate: 'Jun 2025',
    credentialId: 'NTyQycLSiQ2yqfxPX',
    skills: ['Data Analytics', 'Forensic Technology'],
    verificationLink: '#',
    icon: '💼'
  },
  {
    title: 'AN INTRODUCTION TO PROGRAMMING USING PYTHON',
    issuer: 'University of Leeds',
    issueDate: 'Jun 2025',
    credentialId: 'futurelearn.com/certificates/s4uo1s2',
    skills: ['Python', 'Programming'],
    verificationLink: '#',
    icon: '🎓'
  },
  {
    title: 'DIGITAL SKILLS: ARTIFICIAL INTELLIGENCE',
    issuer: 'Accenture',
    issueDate: 'Jun 2025',
    credentialId: 'futurelearn.com/certificates/f8dx37g',
    skills: ['Artificial Intelligence', 'Digital Skills', 'AI'],
    verificationLink: '#',
    icon: '🧠'
  },
  {
    title: 'Introduction to CIP Program',
    issuer: 'OPSWAT Academy',
    issueDate: 'Jun 2025',
    credentialId: '7z2kZON0Fw',
    skills: ['Critical Infrastructure Protection', 'Security'],
    verificationLink: '#',
    icon: '🔒'
  },
  {
    title: 'Python Course for Beginners with Certification: Mastering the Essentials',
    issuer: 'Scaler School of Technology',
    issueDate: 'Apr 2025',
    credentialId: 'Scaler Python',
    skills: ['Python', 'Programming'],
    verificationLink: '#',
    icon: '🐍'
  },
  {
    title: 'C++ Course: Learn the Essentials',
    issuer: 'Scaler School of Technology',
    issueDate: 'Apr 2025',
    credentialId: 'Scaler C++',
    skills: ['C++', 'Programming'],
    verificationLink: '#',
    icon: '⚡'
  },
  {
    title: 'Introduction to Cybersecurity Awareness',
    issuer: 'HP LIFE',
    issueDate: 'Apr 2025',
    credentialId: 'fefcaea1-8442-4f8d-af68-63eebaa6a60e',
    skills: ['Cybersecurity', 'Security Awareness'],
    verificationLink: '#',
    icon: '🔒'
  },
  {
    title: 'Power of Networking',
    issuer: 'Infosys Springboard',
    issueDate: 'Apr 2025',
    credentialId: 'Infosys Springboard',
    skills: ['Networking', 'Professional Skills'],
    verificationLink: '#',
    icon: '🌐'
  },
  {
    title: 'Market Research',
    issuer: 'Reliance Foundation',
    issueDate: 'Apr 2025',
    credentialId: 'Reliance Foundation',
    skills: ['Stock Picking', 'Stock Market Analysis', 'Market Research'],
    verificationLink: '#',
    icon: '📈'
  },
  {
    title: 'CS107: C++ Programming',
    issuer: 'Saylor Academy',
    issueDate: 'Apr 2025',
    credentialId: '3578926882VS',
    skills: ['C++', 'Programming'],
    verificationLink: '#',
    icon: '⚡'
  },
  {
    title: 'ESL005: Business-Proficient English as a Second Language',
    issuer: 'Saylor Academy',
    issueDate: 'Apr 2025',
    credentialId: '9639918024VS',
    skills: ['English as a Second Language', 'Business English'],
    verificationLink: '#',
    icon: '�️'
  },
  {
    title: 'ESL004: Advanced English as a Second Language',
    issuer: 'Saylor Academy',
    issueDate: 'Apr 2025',
    credentialId: '3408972980VS',
    skills: ['English as a Second Language', 'Advanced English'],
    verificationLink: '#',
    icon: '🗣️'
  },
  {
    title: 'ESL003: Upper-Intermediate English as a Second Language',
    issuer: 'Saylor Academy',
    issueDate: 'Apr 2025',
    credentialId: '6005124287VS',
    skills: ['English as a Second Language', 'Upper-Intermediate English'],
    verificationLink: '#',
    icon: '🗣️'
  },
  {
    title: 'ESL002: Intermediate English as a Second Language',
    issuer: 'Saylor Academy',
    issueDate: 'Apr 2025',
    credentialId: '3363881600VS',
    skills: ['English as a Second Language', 'Intermediate English'],
    verificationLink: '#',
    icon: '🗣️'
  },
  {
    title: 'ESL001: Elementary English as a Second Language',
    issuer: 'Saylor Academy',
    issueDate: 'Apr 2025',
    credentialId: '1742372403VS',
    skills: ['English as a Second Language', 'Elementary English'],
    verificationLink: '#',
    icon: '🗣️'
  },
  {
    title: 'Fundamentals of digital marketing',
    issuer: 'Google',
    issueDate: 'Jun 2025',
    credentialId: '379077430',
    skills: ['Digital Marketing'],
    verificationLink: '#',
    icon: '�'
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
