import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Github, MessageCircle, Mail, Sparkles, Code, Zap, Users, Award } from 'lucide-react';

const Home = () => {
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const stats = [
    { icon: Users, value: '500+', label: 'Sunucu' },
    { icon: Code, value: '50+', label: 'Bot' },
    { icon: Award, value: '3+', label: 'Yıl' },
    { icon: Zap, value: '7/24', label: 'Destek' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black pt-16"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-gray-700/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-600/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
          
          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, 30, -30],
                x: [-15, 15, -15],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Profile Image */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <motion.div 
                className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-600 shadow-2xl"
                whileHover={{ 
                  scale: 1.1,
                  borderColor: "#9ca3af",
                  boxShadow: "0 0 30px rgba(156, 163, 175, 0.5)"
                }}
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img 
                  src="/cigweb2.jpg" 
                  alt="CigWeb Profile" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              animate={floatingAnimation}
              className="mb-6"
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold text-white mb-6"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 100%' }}
                >
                  CigWeb
                </motion.span>
              </motion.h1>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl text-gray-300 mb-4 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discord Bot Geliştiricisi
            </motion.h2>

            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div 
                className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-3 rounded-full border border-gray-600"
                whileHover={{ scale: 1.05, borderColor: "#9ca3af" }}
              >
                <span className="text-gray-300 font-medium">& Otomasyon Uzmanı</span>
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Toplulukları özel özellikler, moderasyon araçları ve kusursuz kullanıcı deneyimleri ile 
              güçlendiren Discord botları geliştiriyorum.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#9ca3af",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)"
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <stat.icon className="h-8 w-8 text-gray-300 mx-auto mb-3" />
                </motion.div>
                <motion.div 
                  className="text-2xl font-bold text-white mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    delay: 1.6 + index * 0.1 
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/projeler"
                className="group bg-gradient-to-r from-gray-800 to-gray-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-lg flex items-center border border-gray-600"
              >
                <Sparkles className="h-6 w-6 mr-3" />
                <span className="text-lg">Projelerimi Gör</span>
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/iletisim"
                className="group border-2 border-gray-500 text-gray-300 px-10 py-4 rounded-xl font-semibold hover:bg-gray-500 hover:text-white transition-all duration-300 text-lg"
              >
                İletişime Geç
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            {[
              { icon: Github, href: "https://github.com/cigweb", label: "GitHub" },
              { icon: MessageCircle, href: "#", label: "Discord" },
              { icon: Mail, href: "mailto:cigwebbusiness@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200 p-3 rounded-full border border-gray-700 hover:border-gray-500"
                aria-label={social.label}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  color: "#e5e7eb",
                  borderColor: "#9ca3af"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1 }}
              >
                <social.icon className="h-7 w-7" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <motion.div
              className="p-2 rounded-full border border-gray-600"
              whileHover={{ borderColor: "#9ca3af", scale: 1.1 }}
            >
              <ArrowDown className="h-6 w-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Neden <motion.span 
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
                CigWeb
              </motion.span>?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Discord bot geliştirme alanında deneyimli, güvenilir ve yenilikçi çözümler sunan bir geliştirici
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Deneyim",
                description: "3+ yıllık Discord bot geliştirme deneyimi ile 500+ sunucuya hizmet verdim.",
                icon: "🚀"
              },
              {
                title: "Kalite",
                description: "Her proje için en yüksek kod kalitesi ve performans standartlarını uygularım.",
                icon: "⭐"
              },
              {
                title: "Destek",
                description: "7/24 teknik destek ve sürekli güncelleme hizmeti ile yanınızdayım.",
                icon: "🛠️"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#9ca3af",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/hakkimda"
                className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600"
              >
                Daha Fazla Bilgi
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;