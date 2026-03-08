'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Shield, Briefcase, MessageSquare, Zap, Database, Gamepad2 } from 'lucide-react';
import { FaPython, FaJava, FaGitAlt, FaDocker, FaAws, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaLinux, FaWindows, FaApple } from 'react-icons/fa';
import { SiCplusplus, SiSharp, SiMongodb, SiPostgresql, SiRedis, SiTensorflow, SiPytorch, SiKubernetes, SiJenkins, SiGooglecloud, SiHeroku, SiVercel, SiNetlify, SiIntellijidea, SiFigma, SiCanva, SiSlack, SiDiscord, SiTrello, SiJira, SiGithub, SiGitlab, SiBitbucket, SiLeetcode, SiHackerrank, SiCodeforces, SiCodepen, SiStackoverflow, SiMedium, SiDevdotto, SiHashnode, SiX, SiInstagram, SiYoutube, SiTiktok } from 'react-icons/si';
import { TiltCard } from '@/components/ui/tilt-card';
import { LogoIcon, logos } from '@/components/ui/logo-icons';

const skillsData = {
  programming: {
    title: 'Programming Languages',
    icon: Code,
    color: 'bg-blue-500/10 text-blue-600 border-blue-200',
    skills: [
      { name: 'C', level: 'Advanced', logo: logos.cplusplus },
      { name: 'Python', level: 'Advanced', logo: logos.python },
      { name: 'C++', level: 'Intermediate', logo: logos.cplusplus },
      { name: 'C#', level: 'Intermediate', logo: logos.csharp },
      { name: 'JavaScript', level: 'Intermediate', logo: logos.javascript },
      { name: 'TypeScript', level: 'Intermediate', logo: logos.typescript },
      { name: 'Java', level: 'Intermediate', logo: logos.java },
      { name: 'HTML5', level: 'Advanced', logo: logos.html5 },
      { name: 'CSS3', level: 'Advanced', logo: logos.css3 }
    ]
  },
  dataAi: {
    title: 'Data Science & AI',
    icon: Brain,
    color: 'bg-purple-500/10 text-purple-600 border-purple-200',
    skills: [
      { name: 'Machine Learning', level: 'Intermediate', logo: logos.tensorflow },
      { name: 'Deep Learning', level: 'Intermediate', logo: logos.pytorch },
      { name: 'NumPy', level: 'Intermediate', logo: logos.python },
      { name: 'Data Analysis', level: 'Intermediate', logo: logos.python },
      { name: 'AI/ML Algorithms', level: 'Intermediate', logo: logos.tensorflow }
    ]
  },
  security: {
    title: 'Cybersecurity',
    icon: Shield,
    color: 'bg-red-500/10 text-red-600 border-red-200',
    skills: [
      { name: 'Network Security', level: 'Intermediate', icon: '🔐' },
      { name: 'Security Protocols', level: 'Intermediate', icon: '🛡️' },
      { name: 'Threat Analysis', level: 'Basic', icon: '🔍' },
      { name: 'Security Awareness', level: 'Advanced', icon: '🚨' },
      { name: 'Penetration Testing', level: 'Intermediate', icon: '💻' }
    ]
  },
  business: {
    title: 'Business & Marketing',
    icon: Briefcase,
    color: 'bg-green-500/10 text-green-600 border-green-200',
    skills: [
      { name: 'Digital Marketing', level: 'Intermediate', icon: '📱' },
      { name: 'Business Development', level: 'Intermediate', icon: '📊' },
      { name: 'Strategic Planning', level: 'Advanced', icon: '🎯' },
      { name: 'SEO Optimization', level: 'Intermediate', icon: '🔍' },
      { name: 'Content Strategy', level: 'Intermediate', icon: '📝' }
    ]
  },
  leadership: {
    title: 'Leadership & Management',
    icon: MessageSquare,
    color: 'bg-yellow-500/10 text-yellow-600 border-yellow-200',
    skills: [
      { name: 'Team Leadership', level: 'Advanced', logo: logos.slack },
      { name: 'Strategic Management', level: 'Advanced', logo: logos.trello },
      { name: 'Talent Scouting', level: 'Intermediate', icon: '👥' },
      { name: 'Performance Management', level: 'Intermediate', logo: logos.jira },
      { name: 'Project Coordination', level: 'Advanced', logo: logos.discord }
    ]
  },
  productivity: {
    title: 'Productivity Tools',
    icon: Zap,
    color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200',
    skills: [
      { name: 'Git/GitHub', level: 'Intermediate', logo: logos.github },
      { name: 'GitLab', level: 'Intermediate', logo: logos.gitlab },
      { name: 'VS Code', level: 'Advanced', logo: logos.microsoft },
      { name: 'IntelliJ IDEA', level: 'Advanced', logo: logos.intellij },
      { name: 'Project Management', level: 'Intermediate', logo: logos.trello },
      { name: 'Content Creation', level: 'Advanced', logo: logos.canva },
      { name: 'Figma', level: 'Intermediate', logo: logos.figma }
    ]
  },
  cloud: {
    title: 'Cloud & DevOps',
    icon: Database,
    color: 'bg-orange-500/10 text-orange-600 border-orange-200',
    skills: [
      { name: 'AWS', level: 'Intermediate', logo: logos.aws },
      { name: 'Google Cloud', level: 'Intermediate', logo: logos.gcp },
      { name: 'Azure', level: 'Basic', logo: logos.microsoft },
      { name: 'Docker', level: 'Intermediate', logo: logos.docker },
      { name: 'Kubernetes', level: 'Basic', logo: logos.kubernetes },
      { name: 'Jenkins', level: 'Intermediate', logo: logos.jenkins },
      { name: 'Vercel', level: 'Advanced', logo: logos.vercel },
      { name: 'Netlify', level: 'Advanced', logo: logos.netlify },
      { name: 'Heroku', level: 'Intermediate', logo: logos.heroku }
    ]
  },
  databases: {
    title: 'Databases',
    icon: Database,
    color: 'bg-teal-500/10 text-teal-600 border-teal-200',
    skills: [
      { name: 'MongoDB', level: 'Intermediate', logo: logos.mongodb },
      { name: 'PostgreSQL', level: 'Intermediate', logo: logos.postgresql },
      { name: 'Redis', level: 'Basic', logo: logos.redis },
      { name: 'MySQL', level: 'Intermediate', icon: '�️' },
      { name: 'SQLite', level: 'Intermediate', icon: '📊' }
    ]
  },
  platforms: {
    title: 'Platforms & Communities',
    icon: Gamepad2,
    color: 'bg-pink-500/10 text-pink-600 border-pink-200',
    skills: [
      { name: 'LeetCode', level: 'Advanced', logo: logos.leetcode },
      { name: 'HackerRank', level: 'Advanced', logo: logos.hackerrank },
      { name: 'Codeforces', level: 'Intermediate', logo: logos.codeforces },
      { name: 'CodePen', level: 'Intermediate', logo: logos.codepen },
      { name: 'Stack Overflow', level: 'Advanced', logo: logos.stackoverflow },
      { name: 'Medium', level: 'Intermediate', logo: logos.medium },
      { name: 'Dev.to', level: 'Intermediate', logo: logos.devto },
      { name: 'Hashnode', level: 'Intermediate', logo: logos.hashnode }
    ]
  }
};

const domainSkills = [
  {
    title: 'Esports Management',
    icon: Gamepad2,
    description: 'Professional esports team management and tournament coordination'
  },
  {
    title: 'YouTube Content Creation',
    icon: Database,
    description: 'Video production, editing, and digital content strategy'
  },
  {
    title: 'Research & Analysis',
    icon: Brain,
    description: 'Technical research and analytical problem solving'
  },
  {
    title: 'Safety & Compliance',
    icon: Shield,
    description: 'Safety protocols and regulatory compliance knowledge'
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced': return 'bg-green-500/20 text-green-700 border-green-300';
    case 'Intermediate': return 'bg-blue-500/20 text-blue-700 border-blue-300';
    case 'Basic': return 'bg-yellow-500/20 text-yellow-700 border-yellow-300';
    default: return 'bg-gray-500/20 text-gray-700 border-gray-300';
  }
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning programming, data science, cybersecurity, and leadership
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(skillsData).map(([key, category], index) => {
            const IconComponent = category.icon;
            return (
              <TiltCard key={key} intensity={10}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 border border-line hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-lg ${category.color} border flex items-center justify-center mb-4`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      if (skill.logo) {
                        return (
                          <div key={skillIndex} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <LogoIcon src={skill.logo} alt={skill.name} size={16} />
                              <span className="text-muted">{skill.name}</span>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </span>
                          </div>
                        );
                      } else if (skill.icon) {
                        const IconComponent = skill.icon;
                        return (
                          <div key={skillIndex} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {typeof IconComponent === 'string' ? (
                                <span className="text-lg">{IconComponent}</span>
                              ) : (
                                <IconComponent className="w-4 h-4" />
                              )}
                              <span className="text-muted">{skill.name}</span>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </span>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>

        {/* Domain Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-background rounded-xl p-8 border border-line"
        >
          <h3 className="text-2xl font-semibold text-accent mb-8 text-center">
            Domain Expertise
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domainSkills.map((domain, index) => {
              const IconComponent = domain.icon;
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
                  <h4 className="font-semibold text-foreground mb-2">
                    {domain.title}
                  </h4>
                  <p className="text-sm text-muted">
                    {domain.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skill Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-card rounded-xl p-8 border border-line"
        >
          <h3 className="text-2xl font-semibold text-accent mb-8 text-center">
            Skill Proficiency Overview
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-line"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * 0.25}`}
                    className="text-green-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">75%</span>
                </div>
              </div>
              <h4 className="font-semibold text-foreground">Advanced Skills</h4>
              <p className="text-sm text-muted">Expertise level</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-line"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * 0.5}`}
                    className="text-blue-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">50%</span>
                </div>
              </div>
              <h4 className="font-semibold text-foreground">Intermediate Skills</h4>
              <p className="text-sm text-muted">Proficient level</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-line"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * 0.75}`}
                    className="text-yellow-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">25%</span>
                </div>
              </div>
              <h4 className="font-semibold text-foreground">Basic Skills</h4>
              <p className="text-sm text-muted">Foundation level</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
