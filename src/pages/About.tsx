import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Palette, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Gamepad2, value: '100+', label: 'Roblox Exploiti' },
    { icon: Palette, value: '200+', label: 'Grafik Tasarım' },
    { icon: Award, value: '4+', label: 'Yıl Deneyim' },
    { icon: Clock, value: '7/24', label: 'Destek Mevcut' },
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
      className="py-20 bg-black pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Frig
            </motion.span> Hakkında
          </h2>
          <motion.p 
            className="text-xl text-purple-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Roblox exploitleri ve grafik tasarım alanında uzmanlaşmış yaratıcı geliştirici
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-bold text-white"
              variants={itemVariants}
            >
              Oyun Dünyasını Şekillendirmek
            </motion.h3>
            <motion.p 
              className="text-purple-200 text-lg leading-relaxed"
              variants={itemVariants}
            >
              4 yılı aşkın Roblox exploit geliştirme ve grafik tasarım deneyimi ile yüzlerce 
              oyuncunun deneyimini geliştirdim. Güçlü exploitler, etkileyici tasarımlar ve 
              yaratıcı çözümlerle oyun dünyasında fark yaratıyorum.
            </motion.p>
            <motion.p 
              className="text-purple-200 text-lg leading-relaxed"
              variants={itemVariants}
            >
              Uzmanlığım basit scriptlerden karmaşık exploit sistemlerine, minimalist logolardan 
              detaylı grafik tasarımlara kadar uzanır. Her zaman performans, güvenlik ve 
              görsel mükemmellik odaklı çalışırım.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {['Lua', 'C++', 'Python', 'Photoshop', 'Illustrator', 'After Effects'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-purple-900/50 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(147, 51, 234, 0.3)", borderColor: "#a855f7" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gradient-to-br from-purple-900/60 to-cyan-900/60 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <motion.div 
                  className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-purple-500"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                      "0 0 30px rgba(168, 85, 247, 0.5)",
                      "0 0 20px rgba(168, 85, 247, 0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="/cigweb2.jpg" 
                    alt="Frig Profile" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-2">Frig</h4>
                <p className="text-purple-200">Roblox Exploit & Grafik Tasarım Uzmanı</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-purple-900/60 to-cyan-900/60 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/30 group-hover:border-purple-400 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <stat.icon className="h-8 w-8 text-purple-300 mx-auto mb-4" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-purple-200 text-sm">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;