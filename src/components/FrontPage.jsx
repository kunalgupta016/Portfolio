import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// Custom cursor component
const CursorEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 20, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const move = (e) => {
      setIsVisible(true);
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    const leave = () => setIsVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  const cursorVariants = {
    default: {
      scale: isHover ? 2 : 1,
      backgroundColor: isHover ? "rgba(34,197,94,0.8)" : "rgba(34,197,94,0.4)",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[999]"
      style={{ x: cursorX, y: cursorY, opacity: isVisible ? 1 : 0 }}
      variants={cursorVariants}
      animate="default"
      transition={{ type: "spring", ...springConfig }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    />
  );
};

const FrontPage = () => {
  // Toggle hover state for links
  const handleLinkEnter = () => document.body.classList.add("cursor-hover");
  const handleLinkLeave = () => document.body.classList.remove("cursor-hover");

  return (
    <>
      <CursorEffect />
    </>
  );
};

export default FrontPage;

/*
Add this to your global CSS (e.g., index.css):

body {
  cursor: none;
}
.cursor-hover {
  --cursor-scale: 2;
}
*/
