import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Neet",
      description: "NEET is a powerful online quiz app built for NEET exam preparation. It offers subject-wise timed quizzes in Physics, Chemistry, Biology, and a Mixed section. With real-time scoring, instant feedback, and a clean interface, students can practice effectively and monitor their readiness for the exam. Perfect for quick revisions and daily practice!",
      tech: ["React", "Framer Motion", "Tailwind", "JavaScript"],
      link: "https://neet-rho.vercel.app/",
      code: "https://github.com/kunalgupta016/Neet",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Bubble Hit Game",
      description: "Bubble Hit is an engaging number-tapping game designed to boost focus and reaction speed. Players must identify and hit the correct target number from a set of randomly appearing bubbles before time runs out. It's perfect for quick fun sessions and brain training.",
      tech: ["HTML", "CSS", "JS"],
      link:"https://hubble-bubble.netlify.app/",
      code:"https://github.com/kunalgupta016/Bubble-Game",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quote Generator",
      description: "A simple and interactive Quote Generator built with React and powered by the Quotable API. This app allows users to generate quotes based on tags or get random quotes. The quotes can also be shared via social media platforms such as Facebook, Twitter, WhatsApp, and Email.",
      tech: ["React.js", "Framer Motion", "Axios", "Tailwind CSS"],
      link:"https://quote-generator-eight-ruddy.vercel.app/",
      code:"https://github.com/kunalgupta016/Quote-Generator",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Portfolio Website",
      description: "Interctive portfolio website showcasing my skills, projects, and experiences. Built with React and Tailwind CSS, it features smooth animations, responsive design, and a modern layout to highlight my work effectively.",
      tech: ["Tailwind", "React", "Framer", "Three.js"],
      color: "from-orange-500 to-red-500",
      link: "https://www.figma.com/file/8b1k0Z2X5z9g3Y4c7j6d8F/Web-App-Design?node-id=0%3A1&t=Jx5m4Qy7v2f6a5e8-1",
      code: "https://github.com/kunalgupta016/Portfolio"
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

  // Show only 2 projects if showAll is false
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

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
          key={showAll ? "expanded" : "collapsed"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {visibleProjects.map((project) => (
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
                  {project.link && (
                    <a
                      className="px-6 py-2 bg-portfolio-primary text-white rounded-lg hover:bg-portfolio-accent transition-colors duration-300"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                  {project.code && (
                    <a
                      className="px-6 py-2 glass rounded-lg hover:glow-effect transition-all duration-300"
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && (
          <div className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-gradient-to-r from-portfolio-primary to-portfolio-accent text-white rounded-full font-semibold transition-transform duration-300 glow-effect"
              onClick={() => setShowAll(true)}
            >
              View All Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
