import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart management, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and task tracking.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, interactive charts, and weather alerts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
      tags: ['React', 'Weather API', 'Chart.js', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Social Media App',
      description: 'Full-stack social networking platform with posts, comments, likes, real-time notifications, and user profiles.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
      tags: ['React', 'Node.js', 'JWT', 'MongoDB', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-green-600 to-teal-600'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool using GPT API for generating blog posts, social media content, and more.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      tags: ['React', 'OpenAI', 'Node.js', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Fitness Tracker',
      description: 'Track workouts, monitor progress, set goals, and analyze fitness data with interactive dashboards.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop',
      tags: ['React', 'MongoDB', 'Chart.js', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-pink-600 to-rose-600'
    }
  ]

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          A showcase of my recent work and personal projects
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden card-hover group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-slate-900 p-3 rounded-full hover:bg-white transition-colors inline-block"
                    >
                      <FaGithub size={20} />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      to={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-slate-900 p-3 rounded-full hover:bg-white transition-colors inline-block"
                    >
                      <FaExternalLinkAlt size={20} />
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-800 text-gray-300 px-3 py-1 rounded-full hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-secondary"
            >
              <FaGithub size={20} />
              View More on GitHub
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
