import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 0]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentX = x / rect.width;
    mouseX.set(percentX); // 0 (left) to 1 (right)
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5); // Reset to center
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-bold gradient-text font-space mb-8">
          About Me
        </h2>

        <motion.div
          ref={cardRef}
          style={{
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          className="glass p-12 rounded-3xl backdrop-blur-md"
        >
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            I'm a passionate motion designer and frontend developer with over 5 years of experience creating 
            immersive digital experiences. I specialize in combining cutting-edge web technologies with 
            stunning visual design to bring ideas to life.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My expertise spans from React and Three.js to advanced animation libraries like GSAP, 
            always pushing the boundaries of what's possible in web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
