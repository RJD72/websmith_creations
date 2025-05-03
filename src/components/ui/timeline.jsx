/* eslint-disable no-unused-vars */
// Import hooks and components from Motion (react) and React
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

// Timeline component: renders a vertical timeline with an animated progress line
export const Timeline = ({ data }) => {
  // ref to measure the height of the timeline content
  const ref = useRef(null);

  // ref to the container we track scrolling on
  const containerRef = useRef(null);

  // state to store the measured height of the timeline content
  const [height, setHeight] = useState(0);

  // On mount or when `ref` changes, measure the height of the timeline content
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height); // store height for progress line calculations
    }
  }, [ref]);

  // useScroll tracks scroll progress (0 to 1) of the target container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
    // start animation when top of container is 10% from top of viewport,
    // end when bottom of container is 50% from top
  });

  // Transform scroll progress into a dynamic height for the colored line (from 0 to full content height)
  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1], // input range (scroll progress)
    [0, height] // output range (px height)
  );

  // Fade in the line quickly: opacity goes from 0 to 1 by 10% scroll
  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.1], // input range
    [0, 1] // output range (opacity)
  );

  return (
    // Outer wrapper: full-width, uses containerRef for scroll tracking
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      {/* Heading and description */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          From construction to code
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          My journey into web develpment
        </p>
      </div>

      {/* Timeline entries container (ref for measuring height) */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {/* Map over each timeline item */}
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Left column: dot and title (sticky so stays in view) */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Dot indicator */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>

              {/* Title shown on medium+ screens */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            {/* Right column: title (on small screens) and content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Title for small screens */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {/* Main content for this timeline entry */}
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical line background (faded gradient) */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animated progress line (grows with scroll) */}
          <motion.div
            style={{
              height: heightTransform, // dynamic height based on scroll
              opacity: opacityTransform, // fade in effect
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
