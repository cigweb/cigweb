import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programlama Dilleri',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Java', level: 75 },
      ]
    },
    {
      icon: Database,
      title: 'Veritabanları & Depolama',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'SQLite', level: 85 },
      ]
    },
    {
      icon: Cloud,
      title: 'Bulut & Hosting',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Heroku', level: 90 },
        { name: 'DigitalOcean', level: 85 },
        { name: 'Docker', level: 75 },
      ]
    },
    {
      icon: Wrench,
      title: 'Araçlar & Framework\'ler',
      skills: [
        { name: 'Discord.js', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'Git', level: 90 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 bg-gray-900 pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Teknik <motion.span 
              className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Yetenekler
            </motion.span>
          </h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Güçlü Discord botları ve uygulamaları geliştirmek için kapsamlı teknoloji yığını
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-gray-500 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
            >
              <div className="flex items-center mb-8">
                <motion.div 
                  className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-3 mr-4"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="h-6 w-6 text-gray-300" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <motion.span 
                        className="text-gray-400 text-sm font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: skillIndex * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-gray-500 to-gray-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 backdrop-blur-sm border border-gray-700"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)"
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Sürekli Öğrenme</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Teknoloji hızla gelişiyor ve en son Discord API güncellemeleri, geliştirme araçları 
              ve en iyi uygulamalarla güncel kalarak son teknoloji çözümler sunmaya kararlıyım.
            </p>
            <div className="flex justify-center space-x-4 flex-wrap gap-2">
              {['Discord API v10', 'Slash Komutları', 'Mikroservisler'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700"
                  whileHover={{ scale: 1.1, backgroundColor: "#374151", borderColor: "#6b7280" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;