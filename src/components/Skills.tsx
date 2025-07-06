import React from 'react';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Java', level: 75 },
      ]
    },
    {
      icon: Database,
      title: 'Databases & Storage',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'SQLite', level: 85 },
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & Hosting',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Heroku', level: 90 },
        { name: 'DigitalOcean', level: 85 },
        { name: 'Docker', level: 75 },
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Discord.js', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'Git', level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology stack for building robust Discord bots and applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-3 mr-4">
                  <category.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              Discord API updates, development tools, and best practices to deliver cutting-edge solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                Discord API v10
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                Slash Commands
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                Microservices
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;