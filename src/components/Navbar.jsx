import { useState, useEffect } from 'react';
import { motion, useScroll, useAnimation } from 'framer-motion';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const controls = useAnimation();

  const { scrollY } = useScroll();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const unsubscribe = scrollY.onChange((latest) => {
      setHasScrolled(latest > 50);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ backdropFilter: 'blur(0px)', backgroundColor: 'rgba(255,255,255,0)' }}
      animate={{
        backdropFilter: hasScrolled ? 'blur(10px)' : 'blur(0px)',
        backgroundColor: hasScrolled
          ? 'rgba(255,255,255,0.05)'
          : 'rgba(255,255,255,0)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text font-space">
            Portfolio
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:cursor-pointer hover:text-[#8f2ffb] transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass hover:glow-effect transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
