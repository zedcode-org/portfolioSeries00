import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' }
  ]

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold gradient-text mb-4"
            >
              Portfolio
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Building amazing web experiences with modern technologies and creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-white mb-4"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-white mb-4"
            >
              Connect With Me
            </motion.h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    to={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-effect p-3 rounded-lg text-gray-400 hover:text-primary-400 transition-colors duration-300 inline-block"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} zedCode-org. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            Built with <FaHeart className="text-red-500 animate-pulse" /> and{' '}
            <span className="gradient-text font-semibold">React + Tailwind CSS</span>
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 rounded-full shadow-lg hover:shadow-primary-500/50 transition-shadow duration-300 z-40"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  )
}

export default Footer
