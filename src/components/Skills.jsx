import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript, SiTailwindcss, SiGit, SiDocker } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const skills = [
    { name: 'MongoDB', level: 85, icon: SiMongodb, color: 'from-green-500 to-green-600' },
    { name: 'Express.js', level: 88, icon: SiExpress, color: 'from-gray-500 to-gray-600' },
    { name: 'React', level: 92, icon: SiReact, color: 'from-blue-500 to-cyan-600' },
    { name: 'Node.js', level: 87, icon: SiNodedotjs, color: 'from-green-600 to-green-700' },
    { name: 'JavaScript', level: 90, icon: SiJavascript, color: 'from-yellow-400 to-yellow-500' },
    { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss, color: 'from-cyan-500 to-blue-600' },
    { name: 'Git', level: 85, icon: SiGit, color: 'from-orange-500 to-red-600' },
    { name: 'Docker', level: 75, icon: SiDocker, color: 'from-blue-600 to-blue-700' }
  ]

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-br ${skill.color} rounded-xl`}>
                    <skill.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <p className="text-sm text-gray-400">Proficiency</p>
                  </div>
                </div>
                <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['TypeScript', 'Redux', 'Next.js', 'REST API', 'GraphQL', 'PostgreSQL', 'AWS', 'Firebase'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="glass-effect px-6 py-3 rounded-full text-gray-300 hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
