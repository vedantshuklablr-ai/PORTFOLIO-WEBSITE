'use client';

import Image from 'next/image';

interface LogoIconProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export function LogoIcon({ src, alt, size = 24, className = '' }: LogoIconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
        onError={(e) => {
          // Fallback to text if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="text-lg font-bold">${alt.charAt(0)}</span>`;
          }
        }}
      />
    </div>
  );
}

// Predefined logo URLs from Google/official sources
export const logos = {
  linkedin: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
  github: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
  microsoft: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  leetcode: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/LeetCode_logo_black.png',
  hackerrank: 'https://upload.wikimedia.org/wikipedia/commons/4/41/HackerRank_logo.png',
  python: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  tensorflow: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
  aws: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  docker: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
  react: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  nodejs: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  mongodb: 'https://upload.wikimedia.org/wikipedia/commons/4/44/MongoDB-logo.png',
  git: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
  figma: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  slack: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
  trello: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Trello-logo.svg',
  jira: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Jira_logo.svg',
  canva: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_logo_2021.svg',
};
