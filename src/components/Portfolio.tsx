import React from 'react';
import { ExternalLink, Github, Users, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Advanced Moderation Bot',
      description: 'Comprehensive moderation system with AI-powered content filtering, automated punishments, and detailed logging.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Moderation', 'AI', 'Logging', 'Anti-spam'],
      stats: { servers: '200+', users: '50K+' },
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Community Hub Bot',
      description: 'All-in-one community management bot with economy system, leveling, mini-games, and event management.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Economy', 'Leveling', 'Games', 'Events'],
      stats: { servers: '150+', users: '30K+' },
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Ticket Support System',
      description: 'Professional ticket management system with category routing, staff assignments, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Support', 'Tickets', 'Analytics', 'Management'],
      stats: { servers: '100+', users: '25K+' },
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Multi-Server Manager',
      description: 'Cross-server management tool for bot networks with centralized configuration and monitoring.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Multi-server', 'Management', 'Monitoring', 'Configuration'],
      stats: { servers: '50+', users: '15K+' },
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'API Integration Bot',
      description: 'Specialized bot for integrating external APIs with Discord, featuring real-time data updates and webhooks.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['API', 'Integration', 'Webhooks', 'Real-time'],
      stats: { servers: '80+', users: '20K+' },
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Custom Music Bot',
      description: 'High-quality music bot with playlist management, queue system, and advanced audio controls.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Music', 'Playlists', 'Audio', 'Entertainment'],
      stats: { servers: '120+', users: '35K+' },
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcase of successful Discord bot projects and community solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {project.stats.servers} servers
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    {project.stats.users} users
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.links.demo}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex-1 border border-purple-500 text-purple-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;