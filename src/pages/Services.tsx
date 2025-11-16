import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gamepad2, Shield, Palette, Zap, Eye, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: 'Roblox Exploitler',
      description: 'Güçlü ve güvenli Roblox exploitleri ile oyun deneyiminizi geliştirin.',
      features: ['Script Executor', 'GUI Sistemleri', 'Anti-Detection', 'Özel Scriptler']
    },
    {
      icon: Shield,
      title: 'Güvenlik Çözümleri',
      description: 'Exploitlerinizi güvenli tutmak için gelişmiş koruma sistemleri.',
      features: ['Anti-Ban Koruması', 'Şifreli Scriptler', 'Güvenli Injection', 'Stealth Modu']
    },
    {
      icon: Palette,
      title: 'Grafik Tasarım',
      description: 'Profesyonel logo, banner ve görsel tasarım hizmetleri.',
      features: ['Logo Tasarımı', 'Banner & Poster', 'UI/UX Tasarım', 'Branding']
    },
    {
      icon: Zap,
      title: 'Performans Optimizasyonu',
      description: 'Exploitlerinizi daha hızlı ve verimli hale getirin.',
      features: ['Kod Optimizasyonu', 'Bellek Yönetimi', 'Hız Artırma', 'Kaynak Tasarrufu']
    },
    {
      icon: Eye,
      title: 'UI/UX Tasarım',
      description: 'Kullanıcı dostu ve etkileyici arayüz tasarımları.',
      features: ['Modern Arayüzler', 'Responsive Tasarım', 'Animasyonlar', 'Kullanıcı Deneyimi']
    },
    {
      icon: Code,
      title: 'Özel Geliştirme',
      description: 'İhtiyaçlarınıza özel exploit ve tasarım çözümleri.',
      features: ['Özel Scriptler', 'API Entegrasyonu', 'Özel Tasarımlar', 'Teknik Destek']
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
      className="py-20 bg-gradient-to-b from-purple-950 to-black pt-24"
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
              Hizmetlerim
            </motion.span>
          </h2>
          <motion.p 
            className="text-xl text-purple-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Roblox exploitleri ve grafik tasarım alanında kapsamlı profesyonel hizmetler
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-purple-900/60 to-cyan-900/60 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
              }}
            >
              <motion.div 
                className="bg-gradient-to-br from-purple-700/50 to-cyan-700/50 rounded-xl p-4 w-fit mb-6 group-hover:from-purple-600/50 group-hover:to-cyan-600/50 transition-all duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="h-8 w-8 text-purple-200" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-purple-200 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center text-purple-200"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-purple-400 rounded-full mr-3"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: featureIndex * 0.2
                      }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/iletisim"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl border border-purple-400/50"
            >
              Bugün Başlayın
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;