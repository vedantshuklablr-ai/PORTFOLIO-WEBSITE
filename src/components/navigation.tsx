'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Languages', href: '#languages' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-accent">
              VS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-accent text-white'
                      : 'text-foreground hover:bg-accent/10 hover:text-accent'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => window.open('#resume', '_blank')}
              className="p-2 rounded-lg bg-card border border-line hover:bg-accent/10 transition-all duration-300 hover:scale-105"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <Download className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => window.open('mailto:vedant@example.com', '_blank')}
              className="p-2 rounded-lg bg-card border border-line hover:bg-accent/10 transition-all duration-300 hover:scale-105"
              aria-label="Quick Contact"
              title="Quick Contact"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-card border border-line hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-accent text-white'
                      : 'text-foreground hover:bg-accent/10'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex space-x-2 pt-4 border-t border-line">
                <button
                  onClick={() => window.open('#resume', '_blank')}
                  className="flex-1 p-2 rounded-lg bg-card border border-line hover:bg-accent/10 transition-colors flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </button>
                <button
                  onClick={() => window.open('mailto:vedant@example.com', '_blank')}
                  className="flex-1 p-2 rounded-lg bg-card border border-line hover:bg-accent/10 transition-colors flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
