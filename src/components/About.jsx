import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaAward, FaCode, FaClock, FaUsers } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const stats = [
    { icon: FaCode, number: '15+', label: 'Projects Completed', color: 'from-primary-500 to-primary-600' },
    { icon: FaClock, number: '2+', label: 'Years Experience', color: 'from-secondary-500 to-secondary-600' },
    { icon: FaUsers, number: '10+', label: 'Happy Clients', color: 'from-accent-500 to-accent-600' },
    { icon: FaAward, number: '5+', label: 'Awards Won', color: 'from-primary-500 to-secondary-600' }
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-effect p-1 animate-glow">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&h=600&fit=crop"
                alt="Profile"
                className="rounded-2xl w-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 rounded-2xl"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass-effect rounded-2xl p-6 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <div className="text-3xl font-bold gradient-text">2+</div>
              <div className="text-sm text-gray-400">Years Exp.</div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              I'm a passionate <span className="gradient-text">Full Stack Developer</span>
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in building modern web applications using the MERN stack. With a keen eye for design 
              and a passion for clean, efficient code, I transform ideas into powerful digital experiences.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              My journey in web development started with a curiosity to understand how things work on the web. 
              Today, I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JavaScript'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass-effect px-4 py-2 rounded-full text-sm text-gray-300 hover:bg-primary-600/20 transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="glass-effect rounded-2xl p-6 text-center card-hover group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="text-2xl text-white" />
              </div>
              <h4 className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</h4>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
