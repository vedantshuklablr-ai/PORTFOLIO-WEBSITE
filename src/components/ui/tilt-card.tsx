'use client';

import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  scaleIntensity?: number;
  glareIntensity?: number;
}

export function TiltCard({ 
  children, 
  className = '', 
  tiltIntensity = 15,
  scaleIntensity = 1.05,
  glareIntensity = 0.4
}: TiltCardProps) {
  return (
    <motion.div
      className={`relative preserve-3d transition-all duration-300 ease-out ${className}`}
      whileHover={{
        rotateX: -tiltIntensity,
        rotateY: tiltIntensity,
        scale: scaleIntensity,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.1,
          ease: "easeOut"
        }
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 pointer-events-none rounded-lg"
        whileHover={{
          opacity: glareIntensity,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }}
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.7) 50%, transparent 60%)'
        }}
      />
      
      {/* Shadow effect */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-br from-transparent to-black/20 opacity-0 pointer-events-none rounded-lg blur-xl"
        whileHover={{
          opacity: 0.3,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
