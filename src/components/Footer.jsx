import { motion } from 'framer-motion';

const Footer = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-border/20">
      <div className="container mx-auto">
        <motion.div
          className="text-center"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-2xl font-bold gradient-text font-space mb-4">
            Portfolio
          </div>
          <p className="text-muted-foreground mb-6">
            Crafting digital experiences with passion and precision
          </p>
          <div className="flex justify-center gap-6 mb-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="text-muted-foreground hover:text-portfolio-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 Creative Portfolio. Designed with passion and built with modern technologies.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
