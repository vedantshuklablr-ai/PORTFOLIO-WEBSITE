'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Shield, Briefcase, MessageSquare, Zap, Database, Gamepad2 } from 'lucide-react';
import { LogoIcon, logos } from '@/components/ui/logo-icons';
import { TiltCard } from '@/components/ui/tilt-card';

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
      { name: 'MySQL', level: 'Intermediate', icon: '🗄️' },
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

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Intermediate':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Basic':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default function SkillsPage() {
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
              Technical Skills
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Comprehensive overview of technical expertise and proficiency levels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([key, category], categoryIndex) => (
              <TiltCard key={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-6 border border-line hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-14 h-14 rounded-lg ${category.color} border flex items-center justify-center mb-4`}>
                    <category.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      if ('logo' in skill && skill.logo) {
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
                      } else if ('icon' in skill && skill.icon) {
                        return (
                          <div key={skillIndex} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{skill.icon}</span>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
