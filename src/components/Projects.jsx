import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Interactive 3D Portfolio",
      description: "A modern portfolio website featuring Three.js animations and smooth transitions",
      tech: ["React", "Three.js", "GSAP", "TypeScript"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with real-time updates and secure payments",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Motion Graphics Dashboard",
      description: "Analytics dashboard with stunning animations and data visualizations",
      tech: ["Vue.js", "D3.js", "WebGL", "Python"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mobile App Design",
      description: "Cross-platform mobile application with intuitive user experience",
      tech: ["React Native", "Expo", "Firebase", "Figma"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text font-space mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of creative solutions and innovative digital experiences
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative glass p-8 rounded-2xl backdrop-blur-md hover:glow-effect transition-all duration-500 cursor-pointer transform hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 rounded-2xl transition-opacity duration-300 group-hover:opacity-20`}
              ></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-space">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-portfolio-primary/20 text-portfolio-primary rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-portfolio-primary text-white rounded-lg hover:bg-portfolio-accent transition-colors duration-300">
                    View Project
                  </button>
                  <button className="px-6 py-2 glass rounded-lg hover:glow-effect transition-all duration-300">
                    View Code
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-gradient-to-r from-portfolio-primary to-portfolio-accent text-white rounded-full font-semibold transition-transform duration-300 glow-effect"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
