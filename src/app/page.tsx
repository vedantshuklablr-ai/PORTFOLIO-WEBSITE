import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { EducationSection } from '@/components/education-section';
import { SkillsSection } from '@/components/skills-section';
import { CertificationsSection } from '@/components/certifications-section';
import { ProjectsSection } from '@/components/projects-section';
import { LanguagesSection } from '@/components/languages-section';
import { YouTubeSection } from '@/components/youtube-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <LanguagesSection />
      <YouTubeSection />
      <ContactSection />
    </div>
  );
}
