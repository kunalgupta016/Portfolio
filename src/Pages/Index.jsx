import { useEffect } from 'react';
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import CustomCursor from '../components/CustomCursor'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import ThreeBackground from '../components/ThreeBackground';
import About from '../components/About';
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);
const Index = () => {
  useEffect(() => {
    // Register GSAP ScrollTrigger
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Three.js animated background */}
      <ThreeBackground/>
      
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar/>
      
      {/* Hero Section */}
      <Home/>
      
      {/* About Section (Simple) */}
      <About/>
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact/>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
