import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Gelişmiş Moderasyon Botu',
      description: 'AI destekli içerik filtreleme, otomatik cezalandırma ve detaylı kayıt tutma ile kapsamlı moderasyon sistemi.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Moderasyon', 'AI', 'Kayıt', 'Anti-spam'],
      stats: { servers: '200+', users: '50K+' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Topluluk Merkezi Botu',
      description: 'Ekonomi sistemi, seviye atlama, mini oyunlar ve etkinlik yönetimi ile hepsi bir arada topluluk yönetim botu.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Ekonomi', 'Seviye', 'Oyunlar', 'Etkinlikler'],
      stats: { servers: '150+', users: '30K+' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Bilet Destek Sistemi',
      description: 'Kategori yönlendirme, personel atamaları ve analitik panosu ile profesyonel bilet yönetim sistemi.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Destek', 'Biletler', 'Analitik', 'Yönetim'],
      stats: { servers: '100+', users: '25K+' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Çoklu Sunucu Yöneticisi',
      description: 'Merkezi yapılandırma ve izleme ile bot ağları için çapraz sunucu yönetim aracı.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Çoklu-sunucu', 'Yönetim', 'İzleme', 'Yapılandırma'],
      stats: { servers: '50+', users: '15K+' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'API Entegrasyon Botu',
      description: 'Gerçek zamanlı veri güncellemeleri ve webhook\'lar ile harici API\'leri Discord\'a entegre eden özel bot.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['API', 'Entegrasyon', 'Webhook\'lar', 'Gerçek-zamanlı'],
      stats: { servers: '80+', users: '20K+' },
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Özel Müzik Botu',
      description: 'Çalma listesi yönetimi, kuyruk sistemi ve gelişmiş ses kontrolleri ile yüksek kaliteli müzik botu.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Müzik', 'Çalma Listeleri', 'Ses', 'Eğlence'],
      stats: { servers: '120+', users: '35K+' },
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
              Projelerim
            </motion.span>
          </h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Başarılı Discord bot projeleri ve topluluk çözümlerinin sergilenmesi
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
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-gray-500 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)"
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium border border-gray-700"
                      whileHover={{ scale: 1.1, backgroundColor: "#374151", borderColor: "#6b7280" }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Users className="h-4 w-4 mr-1" />
                    {project.stats.servers} sunucu
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
                    className="flex-1 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-gray-700 hover:to-gray-600 transition-all duration-300 flex items-center justify-center border border-gray-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    className="flex-1 border border-gray-500 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-500 hover:text-white transition-all duration-300 flex items-center justify-center"
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