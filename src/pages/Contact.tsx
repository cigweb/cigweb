import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, Send, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xdkogqpz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project: formData.project,
          message: formData.message,
          _subject: `CigWeb İletişim Formu - ${formData.project || 'Genel'}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', project: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Hadi <motion.span 
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
              Bağlanalım
            </motion.span>
          </h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discord sunucunuzu geliştirmeye hazır mısınız? Projenizi konuşalım ve fikirlerinizi hayata geçirelim.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 backdrop-blur-sm border border-gray-700"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">İletişime Geçin</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'E-posta', value: 'contact@cigweb.dev', href: 'mailto:contact@cigweb.dev' },
                  { icon: MessageCircle, title: 'Discord', value: 'cigweb#1234', href: '#' },
                  { icon: Github, title: 'GitHub', value: '@cigweb', href: 'https://github.com/cigweb' },
                  { icon: MapPin, title: 'Konum', value: 'Dünya Çapında Hizmet', href: null },
                  { icon: Clock, title: 'Yanıt Süresi', value: '24 saat içinde', href: null }
                ].map((contact, index) => (
                  <motion.div 
                    key={contact.title}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-3 mr-4"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <contact.icon className="h-6 w-6 text-gray-300" />
                    </motion.div>
                    <div>
                      <p className="text-gray-300 font-medium">{contact.title}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-400 hover:text-gray-200 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 backdrop-blur-sm border border-gray-700"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Neden CigWeb?</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  '3+ yıl Discord bot geliştirme deneyimi',
                  '500+ sunucu özel çözümlerle güçlendirildi',
                  '7/24 destek ve bakım hizmeti mevcut',
                  'Rekabetçi fiyatlar ve esnek paketler'
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-gray-400 rounded-full mr-3"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 backdrop-blur-sm border border-gray-700"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Projenizi Başlatın</h3>
            
            {submitStatus === 'success' && (
              <motion.div 
                className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <p className="text-green-300">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                <p className="text-red-300">Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition-all duration-300 disabled:opacity-50"
                  placeholder="Adınız"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition-all duration-300 disabled:opacity-50"
                  placeholder="eposta@ornek.com"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                  Proje Türü
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition-all duration-300 disabled:opacity-50"
                >
                  <option value="">Proje türü seçin</option>
                  <option value="custom-bot">Özel Discord Botu</option>
                  <option value="moderation">Moderasyon Sistemi</option>
                  <option value="community">Topluluk Özellikleri</option>
                  <option value="integration">API Entegrasyonu</option>
                  <option value="optimization">Bot Optimizasyonu</option>
                  <option value="other">Diğer</option>
                </select>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Proje Detayları
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Proje gereksinimleriniz, ihtiyaç duyulan özellikler, zaman çizelgesi ve özel detaylar hakkında bana bilgi verin..."
                />
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center border border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Mesaj Gönder
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;