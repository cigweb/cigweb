import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Advanced Roblox Executor',
      description: 'Güçlü script executor ile gelişmiş Lua script çalıştırma, anti-detection ve GUI sistemi.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Executor', 'Anti-Ban', 'GUI', 'Lua'],
      stats: { servers: '50+', users: '10K+' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Gaming Logo Collection',
      description: 'Oyun toplulukları için özel tasarlanmış modern ve etkileyici logo tasarımları.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Logo', 'Branding', 'Gaming', 'Design'],
      stats: { servers: '100+', users: '25K+' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Exploit Hub Interface',
      description: 'Kullanıcı dostu arayüz ile exploit yönetimi, script library ve güvenlik özellikleri.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['UI/UX', 'Hub', 'Scripts', 'Security'],
      stats: { servers: '30+', users: '8K+' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Game Banner Designs',
      description: 'Roblox oyunları için çekici banner ve thumbnail tasarımları, sosyal medya görselleri.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Banner', 'Thumbnail', 'Social Media', 'Graphics'],
      stats: { servers: '80+', users: '20K+' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Script Protection System',
      description: 'Scriptleri şifreleme ve koruma sistemi ile güvenli kod dağıtımı ve anti-leak koruması.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Protection', 'Encryption', 'Security', 'Anti-Leak'],
      stats: { servers: '40+', users: '12K+' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Custom GUI Framework',
      description: 'Roblox exploitler için özelleştirilebilir GUI framework, tema sistemi ve animasyonlar.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['GUI', 'Framework', 'Themes', 'Animations'],
      stats: { servers: '60+', users: '15K+' },
      links: { demo: '#', github: '#' }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
              Projelerim
            </motion.span>
          </h2>
          <motion.p 
            className="text-xl text-purple-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Başarılı Roblox exploit projeleri ve grafik tasarım çalışmalarının sergilenmesi
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-purple-900/60 to-cyan-900/60 rounded-2xl overflow-hidden backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
              }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-purple-200 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-800/50 text-purple-200 rounded-full text-xs font-medium border border-purple-500/30"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(147, 51, 234, 0.3)", borderColor: "#a855f7" }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-purple-200">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Users className="h-4 w-4 mr-1" />
                    {project.stats.servers} proje
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Star className="h-4 w-4 mr-1" />
                    {project.stats.users} kullanıcı
                  </motion.div>
                </div>
                
                <div className="flex space-x-3">
                  <motion.a
                    href={project.links.demo}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center border border-purple-400/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    className="flex-1 border border-purple-400 text-purple-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Kod
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;