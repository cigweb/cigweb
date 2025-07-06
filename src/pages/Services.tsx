import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, Shield, Settings, Zap, Users, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'Özel Discord Botları',
      description: 'Sunucunuzun özel ihtiyaçlarını ve gereksinimlerini karşılamak için sıfırdan tasarlanmış botlar.',
      features: ['Özel Komutlar', 'Olay İşleme', 'Veritabanı Entegrasyonu', 'API Bağlantıları']
    },
    {
      icon: Shield,
      title: 'Moderasyon Çözümleri',
      description: 'Topluluğunuzu güvenli ve iyi yönetilen tutmak için gelişmiş moderasyon sistemleri.',
      features: ['Otomatik Moderasyon', 'Uyarı Sistemleri', 'Kayıt Tutma', 'Spam Koruması']
    },
    {
      icon: Settings,
      title: 'Sunucu Yönetimi',
      description: 'Büyük Discord sunucularını verimli bir şekilde yönetmek için kapsamlı araçlar.',
      features: ['Rol Yönetimi', 'Kanal Otomasyonu', 'Karşılama Sistemleri', 'Bilet Sistemleri']
    },
    {
      icon: Zap,
      title: 'Performans Optimizasyonu',
      description: 'Mevcut botları daha iyi performans ve güvenilirlik için optimize edin.',
      features: ['Kod Optimizasyonu', 'Bellek Yönetimi', 'Hata İşleme', 'Çalışma Süresi İzleme']
    },
    {
      icon: Users,
      title: 'Topluluk Özellikleri',
      description: 'Topluluğunuzu bir araya getiren ve aktiviteyi artıran ilgi çekici özellikler.',
      features: ['Mini Oyunlar', 'Ekonomi Sistemleri', 'Seviye Sistemleri', 'Etkinlik Yönetimi']
    },
    {
      icon: Code,
      title: 'Entegrasyon Hizmetleri',
      description: 'Discord sunucunuzu harici hizmetler ve API\'ler ile bağlayın.',
      features: ['Üçüncü Taraf API\'ler', 'Webhook Entegrasyonu', 'Veritabanı Senkronizasyonu', 'Çapraz Platform Araçları']
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
              Hizmetlerim
            </motion.span>
          </h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Sunucunuzun işlevselliğini artırmak için kapsamlı Discord bot geliştirme hizmetleri
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
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-gray-500 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)"
              }}
            >
              <motion.div 
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-4 w-fit mb-6 group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="h-8 w-8 text-gray-300" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-gray-400 rounded-full mr-3"
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
              className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600"
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