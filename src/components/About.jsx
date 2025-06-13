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
           👋 Hello! I'm Kunal Gupta, a passionate frontend developer and Computer Science student with a strong interest in designing modern, user-friendly websites. I love bringing ideas to life through clean and responsive UI using HTML, CSS, JavaScript, and React.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
           During my journey, I’ve worked on exciting projects like a NEET Quiz App, Resume Builder, and a Flipkart Clone, focusing on performance, design, and real-world usability. I’ve also explored AWS services to host scalable static websites and integrate basic backend logic using Lambda, EC2, and S3.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I enjoy learning new technologies and solving real-world problems using code. Whether it’s building visually appealing UIs or deploying apps to the cloud, I’m always up for a challenge!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
