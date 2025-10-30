import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert(`Thanks ${formData.name}! I'll get back to you soon.`)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Your City, Country', href: '#' },
    { icon: FaPhone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' }
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' }
  ]

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-transparent"></div>
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          Have a project in mind? Let's work together to create something amazing!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    to={info.href}
                    className="flex items-center gap-4 glass-effect p-4 rounded-xl hover:bg-primary-600/10 transition-colors duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      to={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`glass-effect p-4 rounded-lg text-gray-400 ${social.color} transition-colors duration-300 inline-block`}
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-effect p-8 rounded-2xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-primary flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
