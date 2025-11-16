import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Github, MessageCircle, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="h-8 w-8 text-purple-400" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Frig</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Güçlü Roblox exploitleri ve profesyonel grafik tasarım hizmetleri sunan yaratıcı geliştirici. 
              Oyun deneyiminizi ve görsel projelerinizi bir üst seviyeye taşıyor.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/cigweb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 transition-colors duration-200"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-blue-300 hover:text-blue-100 transition-colors duration-200"
                aria-label="Discord"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:cigwebbusiness@gmail.com"
                className="text-blue-300 hover:text-blue-100 transition-colors duration-200"
                aria-label="Email"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              <li><Link to="/hizmetler" className="text-blue-300 hover:text-blue-100 transition-colors duration-200">Roblox Exploitler</Link></li>
              <li><Link to="/hizmetler" className="text-blue-300 hover:text-blue-100 transition-colors duration-200">Grafik Tasarım</Link></li>
              <li><Link to="/hizmetler" className="text-blue-300 hover:text-blue-100 transition-colors duration-200">UI/UX Tasarım</Link></li>
              <li><Link to="/hizmetler" className="text-blue-300 hover:text-blue-100 transition-colors duration-200">Özel Geliştirme</Link></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><Link to="/hakkimda" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Hakkımda</Link></li>
              <li><Link to="/projeler" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Projeler</Link></li>
              <li><Link to="/yetenekler" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Yetenekler</Link></li>
              <li><Link to="/iletisim" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">İletişim</Link></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Frig. Tüm hakları saklıdır.
            </p>
            <motion.p 
              className="text-gray-400 text-sm flex items-center mt-2 md:mt-0"
              whileHover={{ scale: 1.05 }}
            >
              Oyun dünyası için <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-blue-500 mx-1" />
              </motion.div> ile yapıldı
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;