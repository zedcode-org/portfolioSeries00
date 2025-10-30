import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow"
        >
          Hi, I&apos;m <span className="gradient-text">Your Name</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl mb-6 text-gray-300 font-light"
        >
          Full Stack <span className="gradient-text font-semibold">MERN Developer</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting exceptional web experiences with MongoDB, Express, React, and Node.js.
          Turning ideas into elegant, scalable solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="#projects"
              className="btn-primary w-full sm:w-auto inline-block"
            >
              View My Work
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="#contact"
              className="btn-secondary w-full sm:w-auto inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 mb-12"
        >
          {socialLinks.map((social) => (
            <motion.div
              key={social.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={28} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <HiArrowDown className="text-primary-400 text-3xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
