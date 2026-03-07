# 🚀 Vedant Shukla - Personal Portfolio Website

A modern, professional portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features dark/light theme, 3D animations, and fully responsive design showcasing my technical skills, experience, and achievements.

## ✨ Features

### 🎨 **Design & UX**
- **Dark/Light Theme Toggle** - Persistent theme preference with localStorage
- **3D Interactive Effects** - Tilt cards and parallax backgrounds
- **Smooth Animations** - Framer Motion powered transitions
- **Fully Responsive** - Mobile-first design for all devices
- **Modern UI** - Professional, app-like interface

### 🛠️ **Technical Stack**
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React & Simple Icons
- **Deployment**: Vercel ready

### 📱 **Sections**
1. **Home** - Hero section with professional headline
2. **About** - Professional summary and core competencies
3. **Experience** - GOAT ESPORTS Founder & YouTube Content Creator
4. **Education** - Dayananda Sagar University & KV background
5. **Certifications** - 12+ verified credentials from top platforms
6. **Projects** - GitHub, HackerRank, LeetCode achievements
7. **Skills** - Categorized technical and domain expertise
8. **Languages** - English, Hindi, German, Punjabi with proficiency
9. **Contact** - Quick actions and profile links

### 🔗 **Integrations**
- **LinkedIn** - Professional profile integration
- **GitHub** - Code repositories and contributions
- **LeetCode** - Competitive programming profile
- **HackerRank** - Problem-solving achievements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vedantshuklablr-ai/PERSONAL-PORTFOLIO-WEBSITE.git
   cd PERSONAL-PORTFOLIO-WEBSITE
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── tilt-card.tsx
│   │   └── parallax-bg.tsx
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── education-section.tsx
│   ├── experience-section.tsx
│   ├── hero-section.tsx
│   ├── languages-section.tsx
│   ├── navigation.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx
│   ├── certifications-section.tsx
│   └── theme-toggle.tsx
└── contexts/              # React contexts
    └── theme-context.tsx
```

## 🎨 Customization

### Theme Colors
Edit `src/app/globals.css` to customize theme variables:

```css
:root {
  --background: #ffffff;
  --foreground: #111827;
  --accent: #0f766e;
  /* ... other colors */
}
```

### Content Updates
- **Personal Info**: Update in respective section components
- **Social Links**: Modify in `hero-section.tsx` and `contact-section.tsx`
- **Experience**: Edit `experience-section.tsx`
- **Education**: Update `education-section.tsx`
- **Skills**: Modify `skills-section.tsx`
- **Certifications**: Update `certifications-section.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Manual Build
```bash
npm run build
npm start
```

## 🌐 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_GITHUB_URL=https://github.com/vedantshuklablr-ai
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/vedant-shukla-7735a7313
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Semantic HTML5** for accessibility

## 📊 Performance

### Lighthouse Scores
- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

### Optimization Features
- **Lazy Loading** - Components load on scroll
- **Image Optimization** - Next.js Image component
- **Code Splitting** - Automatic with Next.js
- **Caching** - Proper headers and strategies

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Report issues and bugs
- Suggest improvements
- Fork for your own use

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Vedant Shukla**
- B.Tech CSE Student
- Founder & IGL @ GOAT ESPORTS ORGANISATION
- C, Python, C# | Certified Learner

### 🔗 Connect with Me
- **LinkedIn**: [vedant-shukla-7735a7313](https://www.linkedin.com/in/vedant-shukla-7735a7313/)
- **GitHub**: [@vedantshuklablr-ai](https://github.com/vedantshuklablr-ai)
- **LeetCode**: [VEDANTSHUKLA007](https://leetcode.com/u/VEDANTSHUKLA007/)
- **HackerRank**: [vedantshuklablr](https://www.hackerrank.com/profile/vedantshuklablr)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons

---

⭐ If you find this project helpful, consider giving it a star!
