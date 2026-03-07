'use client';

import { motion } from 'framer-motion';
import { Globe, MessageCircle, Star } from 'lucide-react';

const languages = [
  {
    name: 'English',
    level: 'Native/Bilingual',
    proficiency: 100,
    description: 'Professional working proficiency with excellent communication skills',
    flag: '🇬🇧',
    color: 'bg-blue-500'
  },
  {
    name: 'Hindi',
    level: 'Native/Bilingual',
    proficiency: 100,
    description: 'Native language with complete fluency in written and spoken forms',
    flag: '🇮🇳',
    color: 'bg-orange-500'
  },
  {
    name: 'German',
    level: 'Elementary',
    proficiency: 25,
    description: 'Basic understanding with foundational vocabulary and grammar',
    flag: '🇩🇪',
    color: 'bg-yellow-500'
  },
  {
    name: 'Punjabi',
    level: 'Limited Working',
    proficiency: 40,
    description: 'Conversational proficiency for basic communication',
    flag: '🇮🇳',
    color: 'bg-green-500'
  }
];

const getProficiencyColor = (proficiency: number) => {
  if (proficiency >= 90) return 'bg-green-500';
  if (proficiency >= 70) return 'bg-blue-500';
  if (proficiency >= 50) return 'bg-yellow-500';
  return 'bg-orange-500';
};

const getProficiencyText = (proficiency: number) => {
  if (proficiency >= 90) return 'Expert';
  if (proficiency >= 70) return 'Advanced';
  if (proficiency >= 50) return 'Intermediate';
  if (proficiency >= 25) return 'Elementary';
  return 'Beginner';
};

export function LanguagesSection() {
  return (
    <section id="languages" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Languages & Communication
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Multilingual capabilities enabling effective communication across diverse environments
          </p>
        </motion.div>

        {/* Languages Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-8 border border-line hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-3xl">
                  {language.flag}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {language.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-medium">
                      {language.level}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getProficiencyColor(language.proficiency)}`}>
                      {getProficiencyText(language.proficiency)}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted mb-6">
                {language.description}
              </p>

              {/* Proficiency Bar */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">Proficiency</span>
                  <span className="text-sm text-muted">{language.proficiency}%</span>
                </div>
                <div className="w-full bg-line rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${language.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className={`h-full ${getProficiencyColor(language.proficiency)} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Communication Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-background rounded-xl p-8 border border-line"
        >
          <h3 className="text-2xl font-semibold text-accent mb-8 text-center">
            Communication Strengths
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card/50 rounded-lg border border-line">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Verbal Communication</h4>
              <p className="text-sm text-muted">
                Strong presentation and interpersonal skills
              </p>
            </div>
            
            <div className="text-center p-6 bg-card/50 rounded-lg border border-line">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Cross-Cultural</h4>
              <p className="text-sm text-muted">
                Experience with diverse teams and environments
              </p>
            </div>
            
            <div className="text-center p-6 bg-card/50 rounded-lg border border-line">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Technical Writing</h4>
              <p className="text-sm text-muted">
                Clear documentation and technical communication
              </p>
            </div>
          </div>
        </motion.div>

        {/* Language Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Professional Advantages
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-card rounded-lg border border-line">
              <div className="text-2xl font-bold text-accent mb-1">4+</div>
              <p className="text-sm text-muted">Languages</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-line">
              <div className="text-2xl font-bold text-accent mb-1">2</div>
              <p className="text-sm text-muted">Native Languages</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-line">
              <div className="text-2xl font-bold text-accent mb-1">Global</div>
              <p className="text-sm text-muted">Communication Ready</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-line">
              <div className="text-2xl font-bold text-accent mb-1">24/7</div>
              <p className="text-sm text-muted">Availability</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
