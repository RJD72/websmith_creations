/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "motion/react"; // Motion hooks and components for scroll-linked animations

// ContainerScroll: wraps content and applies 3D scroll animations to its header and card
export const ContainerScroll = ({ titleComponent, children }) => {
  // Ref to the container element we want to track scrolling on
  const containerRef = useRef(null);

  // useScroll returns a motion value (0–1) representing scroll progress of the target
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], // start when top hits bottom, end when center hits center
  });

  // State to track if viewport is mobile-sized
  const [isMobile, setIsMobile] = useState(false);

  // Effect: listen for window resize to toggle isMobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile(); // initialize on mount
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Compute scale range based on device type
  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // Create motion values for rotateX, scale, and translateY based on scroll progress
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="flex items-center justify-center relative p-2 "
      ref={containerRef} // attach scroll target
    >
      <div
        className="py-30 w-full relative"
        style={{ perspective: "1000px" }} // enable 3D transforms on children
      >
        {/* Animated header sliding vertically */}
        <Header translate={translate} titleComponent={titleComponent} />

        {/* Animated card with rotateX, scale, and boxShadow */}
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

// Header: displays the title, moves up/down with scroll
export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{ translateY: translate }} // bind vertical translation
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

// Card: 3D-styled container that rotates, scales, and casts a shadow on scroll
export const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // tilt back as user scrolls
        scale, // scale down/up based on scroll
        // layered shadows for depth
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-6 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      {/* Scrollable content area inside the card */}
      <div className="h-full w-full overflow-y-scroll rounded-2xl bg-gray-100 dark:bg-gray-800 md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
