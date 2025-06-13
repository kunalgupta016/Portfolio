import { motion } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const progressRefs = useRef([]);

  const skills = [
    { name: 'React & JavaScript', level: 70 },
    { name: 'GSAP and Framer', level: 70},
    { name: 'Frontend Development', level: 70 },
    { name: 'Docker' ,level:50},
    { name: 'DSA' , level: 60 },
    { name: 'Problem Solving', level: 65 },
    { name: 'HTML & CSS', level: 80 },
    { name: 'Tailwind CSS', level: 89 },
    { name: 'C , C++ , Python , Java', level: 70 },
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

        
      </div>
    </motion.section>
  );
};

export default Skills;
