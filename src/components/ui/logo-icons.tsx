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
  youtube: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/YouTube_Logo_2017.svg',
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
  java: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Java_logo.svg',
  javascript: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  typescript: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/TypeScript_logo_2023.svg',
  cplusplus: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
  csharp: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg',
  html5: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  css3: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
  linux: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg',
  windows: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg',
  apple: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg',
  postgresql: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
  redis: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Redis_Logo.svg',
  pytorch: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/PyTorch_logo.png',
  kubernetes: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Kubernetes_logo_without_workmark.svg',
  jenkins: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Jenkins_logo_with_title.svg',
  gcp: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
  heroku: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Heroku_logo.svg',
  vercel: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Vercel_logo_black.svg',
  netlify: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Netlify_logo.svg',
  intellij: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/IntelliJ_IDEA_UI.png',
  discord: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Discord_logo.svg',
  x: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/X_logo_2023_(white).png',
  instagram: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg',
  tiktok: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/TikTok_logo.svg',
  codeforces: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Codeforces_logo.svg',
  codepen: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Codepen-icon.svg',
  stackoverflow: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg',
  medium: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Medium_logo_Monogram.svg',
  devto: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Dev.to_logo.svg',
  hashnode: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Hashnode_logo.svg',
  bitbucket: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Bitbucket_logo.svg',
  gitlab: 'https://upload.wikimedia.org/wikipedia/commons/1/19/GitLab_logo.svg',
};
