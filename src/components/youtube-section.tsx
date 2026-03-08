'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink, Users, Video, TrendingUp } from 'lucide-react';
import { LogoIcon, logos } from '@/components/ui/logo-icons';
import { TiltCard } from '@/components/ui/tilt-card';

const youtubeData = {
  channel: {
    name: '@Java007',
    subscribers: '1K+',
    videos: '50+',
    description: 'Sharing programming tutorials, project builds, and helping beginner developers learn to code.',
    link: 'https://www.youtube.com/@Java007'
  },
  featuredVideos: [
    {
      title: 'Python for Beginners',
      description: 'Complete Python tutorial covering basics to advanced concepts',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoId: 'dQw4w9WgXcQ',
      views: '2.5K',
      duration: '45:30'
    },
    {
      title: 'Web Development Project',
      description: 'Build a modern portfolio website from scratch',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoId: 'dQw4w9WgXcQ',
      views: '1.8K',
      duration: '32:15'
    },
    {
      title: 'Machine Learning Basics',
      description: 'Introduction to ML algorithms and implementation',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoId: 'dQw4w9WgXcQ',
      views: '3.2K',
      duration: '28:45'
    }
  ]
};

export function YouTubeSection() {
  return (
    <section id="youtube" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            YouTube Content
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Sharing programming tutorials and project demonstrations to help developers learn and grow
          </p>
        </motion.div>

        {/* Channel Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <TiltCard>
            <div className="bg-background rounded-xl p-8 border border-line hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center">
                    <LogoIcon src={logos.youtube} alt="YouTube" size={48} />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {youtubeData.channel.name}
                  </h3>
                  <p className="text-muted mb-4">
                    {youtubeData.channel.description}
                  </p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-red-600" />
                      <span className="font-semibold">{youtubeData.channel.subscribers}</span>
                      <span className="text-muted">Subscribers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-5 h-5 text-red-600" />
                      <span className="font-semibold">{youtubeData.channel.videos}</span>
                      <span className="text-muted">Videos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-red-600" />
                      <span className="font-semibold">Growing</span>
                      <span className="text-muted">Channel</span>
                    </div>
                  </div>
                  
                  <a
                    href={youtubeData.channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
                  >
                    <Play className="w-5 h-5" />
                    Visit Channel
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Featured Videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Featured Videos
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeData.featuredVideos.map((video, index) => (
              <TiltCard key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl overflow-hidden border border-line hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gray-100">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {video.title}
                    </h4>
                    <p className="text-muted text-sm mb-4">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted">
                        {video.views} views
                      </span>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-1"
                      >
                        Watch
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-background rounded-xl p-8 border border-line">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to Learn More?
            </h3>
            <p className="text-muted mb-6">
              Subscribe to my channel for regular programming tutorials, project walkthroughs, and tech tips.
            </p>
            <a
              href={youtubeData.channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 text-lg font-semibold"
            >
              <LogoIcon src={logos.youtube} alt="YouTube" size={20} />
              Subscribe on YouTube
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
