import React from 'react';
import { Users, Code, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Servers Enhanced' },
    { icon: Code, value: '50+', label: 'Bots Created' },
    { icon: Award, value: '3+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">CigWeb</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer specializing in Discord bot development and community automation solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Bringing Communities Together</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              With over 3 years of experience in Discord bot development, I've helped hundreds of 
              communities enhance their servers with custom automation, moderation tools, and 
              interactive features that keep members engaged.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My expertise spans from simple utility bots to complex multi-server management systems, 
              always focusing on reliability, performance, and user experience.
            </p>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'Python', 'Discord.js', 'Node.js', 'MongoDB', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
                  CW
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">CigWeb</h4>
                <p className="text-purple-300">Discord Bot Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;