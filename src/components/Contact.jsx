import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const fadeUpVariant = {
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

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_p1k8gwd',     // Replace with your EmailJS service ID
        'template_5o9evxl',    // Replace with your EmailJS template ID
        form.current,
        'WYCqYT6v-txY7C494'      // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl font-bold gradient-text font-space mb-6">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="glass p-6 rounded-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-portfolio-primary rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">
                      kunalgupta55005@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-portfolio-accent rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {['🐙', '💼', '🐦', '📷'].map((icon, index) => (
                <button
                  key={index}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:glow-effect transition-all duration-300 hover:scale-110"
                >
                  {icon}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="glass p-8 rounded-2xl backdrop-blur-md">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="w-full p-4 bg-background/50 border border-border rounded-lg focus:border-portfolio-primary focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-background/50 border border-border rounded-lg focus:border-portfolio-primary focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full p-4 bg-background/50 border border-border rounded-lg focus:border-portfolio-primary focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    className="w-full p-4 bg-background/50 border border-border rounded-lg focus:border-portfolio-primary focus:outline-none transition-colors duration-300 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-portfolio-primary to-portfolio-accent text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 glow-effect"
                >
                  Send Message
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
