import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Github, MessageCircle, Mail, Sparkles } from 'lucide-react';

const Home = () => {
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gray-700/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-600/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={floatingAnimation}
            className="mb-6"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
                CigWeb
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discord Bot Geliştiricisi & Otomasyon Uzmanı
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Toplulukları özel özellikler, moderasyon araçları ve kusursuz kullanıcı deneyimleri ile 
            güçlendiren Discord botları geliştiriyorum.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/projeler"
              className="group bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-lg flex items-center border border-gray-600"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Projelerimi Gör
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/iletisim"
              className="group border-2 border-gray-500 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-500 hover:text-white transition-all duration-300"
            >
              İletişime Geç
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { icon: Github, href: "https://github.com/cigweb", label: "GitHub" },
            { icon: MessageCircle, href: "#", label: "Discord" },
            { icon: Mail, href: "mailto:contact@cigweb.dev", label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              aria-label={social.label}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                color: "#e5e7eb"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <social.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;