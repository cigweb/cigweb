import React from 'react';
import { Bot, Shield, Settings, Zap, Users, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'Custom Discord Bots',
      description: 'Tailored bots built from scratch to meet your specific server needs and requirements.',
      features: ['Custom Commands', 'Event Handling', 'Database Integration', 'API Connections']
    },
    {
      icon: Shield,
      title: 'Moderation Solutions',
      description: 'Advanced moderation systems to keep your community safe and well-managed.',
      features: ['Auto-moderation', 'Warning Systems', 'Logging', 'Anti-spam Protection']
    },
    {
      icon: Settings,
      title: 'Server Management',
      description: 'Comprehensive tools for managing large Discord servers efficiently.',
      features: ['Role Management', 'Channel Automation', 'Welcome Systems', 'Ticket Systems']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize existing bots for better performance and reliability.',
      features: ['Code Optimization', 'Memory Management', 'Error Handling', 'Uptime Monitoring']
    },
    {
      icon: Users,
      title: 'Community Features',
      description: 'Engaging features that bring your community together and increase activity.',
      features: ['Mini-games', 'Economy Systems', 'Leveling Systems', 'Event Management']
    },
    {
      icon: Code,
      title: 'Integration Services',
      description: 'Connect your Discord server with external services and APIs.',
      features: ['Third-party APIs', 'Webhook Integration', 'Database Sync', 'Cross-platform Tools']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive Discord bot development services to enhance your server's functionality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-4 w-fit mb-6 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all duration-300">
                <service.icon className="h-8 w-8 text-purple-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;