import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <motion.div
        className="text-center z-10"
        animate={{ y: [-20, 20] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold gradient-text font-space">
            Creative
          </h1>
          <h2 className="text-4xl md:text-6xl font-light text-foreground">
            Motion Designer
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting immersive digital experiences through innovative design and cutting-edge technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 glass rounded-full font-semibold text-foreground hover:shadow-[0_0_20px_#8b5cf64d] transition-all duration-300 backdrop-blur-md hover:cursor-pointer"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-[#8855e6] text-white rounded-full font-semibold hover:bg-[#e08cff] transition-all duration-300 glow-effect hover:cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating elements using Framer Motion */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-portfolio-primary rounded-full opacity-60"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
      ></motion.div>

      <motion.div
        className="absolute top-3/4 right-1/4 w-6 h-6 bg-portfolio-secondary rounded-full opacity-40"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, delay: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
      ></motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-portfolio-accent rounded-full opacity-50"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.5, delay: 1, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
      ></motion.div>
    </section>
  );
};

export default Home;
