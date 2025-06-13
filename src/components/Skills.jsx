import { motion } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const progressRefs = useRef([]);

  const skills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'Three.js & WebGL', level: 85 },
    { name: 'GSAP Animation', level: 90 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Node.js & Backend', level: 75 },
    { name: 'Mobile Development', level: 70 }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    }
  };

  const barVariants = (level) => ({
    hidden: { width: '0%' },
    visible: {
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut'
      }
    }
  });

  return (
    <motion.section
      id="skills"
      className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text font-space mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill.name} className="glass p-6 rounded-2xl backdrop-blur-md">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="text-portfolio-primary font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <motion.div
                  variants={barVariants(skill.level)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="h-3 rounded-full bg-gradient-to-r from-portfolio-primary to-portfolio-accent glow-effect"
                  style={{ width: '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 3D Skills Icons */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {['⚛️', '🎨', '📱', '🚀'].map((icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-6xl text-center neumorph p-8 rounded-xl hover:glow-effect transition-all duration-300 cursor-pointer"
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
