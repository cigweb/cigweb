import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Gamepad2, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programlama Dilleri',
      skills: [
        { name: 'Lua', level: 95 },
        { name: 'C++', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
      ]
    },
    {
      icon: Gamepad2,
      title: 'Roblox Geliştirme',
      skills: [
        { name: 'Script Execution', level: 95 },
        { name: 'GUI Development', level: 90 },
        { name: 'Anti-Detection', level: 85 },
        { name: 'Memory Manipulation', level: 80 },
      ]
    },
    {
      icon: Palette,
      title: 'Grafik Tasarım',
      skills: [
        { name: 'Photoshop', level: 95 },
        { name: 'Illustrator', level: 90 },
        { name: 'After Effects', level: 85 },
        { name: 'Figma', level: 80 },
      ]
    },
    {
      icon: Wrench,
      title: 'Araçlar & Teknolojiler',
      skills: [
        { name: 'Cheat Engine', level: 90 },
        { name: 'IDA Pro', level: 85 },
        { name: 'Visual Studio', level: 90 },
        { name: 'Git', level: 85 },
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
      className="py-20 bg-gradient-to-b from-gray-900 to-black pt-24"
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
              className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
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
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Güçlü Roblox exploitleri ve etkileyici grafik tasarımlar için kapsamlı teknoloji yığını
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
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-8 backdrop-blur-sm border border-gray-600/30 hover:border-blue-400 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
              }}
            >
              <div className="flex items-center mb-8">
                <motion.div 
                  className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-3 mr-4"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="h-6 w-6 text-blue-300" />
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
                        className="text-blue-300 text-sm font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: skillIndex * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
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
            className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-8 backdrop-blur-sm border border-gray-600/30"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Sürekli Öğrenme</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Teknoloji hızla gelişiyor ve en son Roblox güncellemeleri, exploit teknikleri 
              ve tasarım trendleri ile güncel kalarak son teknoloji çözümler sunmaya kararlıyım.
            </p>
            <div className="flex justify-center space-x-4 flex-wrap gap-2">
              {['Roblox API', 'Modern Exploits', 'UI Trends'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gray-700/50 text-blue-300 rounded-full text-sm font-medium border border-gray-600/30"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)", borderColor: "#3b82f6" }}
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