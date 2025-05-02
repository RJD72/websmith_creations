/* eslint-disable no-unused-vars */
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react"; // animation components for mounting/unmounting transitions
import { useOutsideClick } from "./ui/use-outside-click"; // custom hook to detect clicks outside a given element
import HuronBjj from "../assets/huronbjj.png";
import Timeless from "../assets/timeless.png";
import SimpleBlog from "../assets/simpleblog.png";

// ExpandableCard: displays a grid of cards that can expand into a modal-like view on click
const ExpandableCard = () => {
  // "active" holds the currently selected card object or null when none is active
  const [active, setActive] = useState(null);

  // Ref attached to the expanded card container for detecting outside clicks
  const ref = useRef(null);

  // Unique identifier for this component instance, used in layout animations
  const id = useId();

  // Side effect: lock scrolling and handle Escape key to close expanded card
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        // Close the active card when Escape is pressed
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      // Disable page scrolling when a card is active
      document.body.style.overflow = "hidden";
    } else {
      // Restore page scrolling when no card is active
      document.body.style.overflow = "auto";
    }

    // Listen for keydown events globally
    window.addEventListener("keydown", onKeyDown);
    // Cleanup the event listener on unmount or when "active" changes
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // Close the expanded card if a click occurs outside of it
  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <h2 className="text-center text-3xl my-6">Projects</h2>
      {/* Backdrop overlay behind expanded card */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }} // start transparent
            animate={{ opacity: 1 }} // fade in
            exit={{ opacity: 0 }} // fade out on unmount
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded card modal */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            {/* Close button (visible on small screens) */}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 }, // quick fade out
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)} // close on click
            >
              <CloseIcon /> // X icon component
            </motion.button>

            {/* Container for the expanded card content */}
            <motion.div
              layoutId={`card-${active.title}-${id}`} // shared layout animation key
              ref={ref} // attach ref for outside clicks
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* Card image with shared layout for smooth transition */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                {/* Header: title, description, and CTA */}
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* Call-to-action button */}
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank" // open link in new tab
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                {/* Scrollable main content area */}
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }} // fade in
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} // fade out on close
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {/* Render content function or JSX directly */}
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* List of cards to display when no card is expanded */}
      <ul className="max-w-3xl mx-auto w-full">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`} // shared layout for expand/collapse
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)} // mark this card active on click
            className="p-4 mb-6 md:mb-0 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer "
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={150}
                  height={150}
                  src={card.src}
                  alt={card.title}
                  className="w-full md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-2xl"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>

            {/* CTA button for each card */}
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="mt-4 w-full md:w-24 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/20 hover:border-[#dd9224]  focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none cursor-pointer"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
};

export default ExpandableCard;

// CloseIcon: renders an animated SVG "X" icon to close the expanded card
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }} // start invisible
      animate={{ opacity: 1 }} // fade in
      exit={{
        opacity: 0, // fade out
        transition: { duration: 0.05 }, // quick fade
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      {/* Transparent path to reset canvas */}
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      {/* Diagonal lines forming the 'X' */}
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Brazilian Jiu-Jitsu Gym",
    title: "Huron BJJ",
    src: HuronBjj,
    ctaText: "Visit",
    ctaLink: "https://www.huronbjj.com",
    content: () => {
      return (
        <p>
          I designed and built a fully responsive, multi-page website for Huron
          Brazilian Jiu-Jitsu, crafting every page with semantic HTML5 and
          modern CSS3 to ensure clarity and maintainability. Leveraging
          Bootstrap 5’s grid system and utility classes, I created a
          mobile-first layout that adapts seamlessly across all screen sizes,
          while custom CSS refinements reinforce the club’s brand identity. To
          boost performance, I implemented lazy-loading for images via a concise
          vanilla JavaScript snippet, reducing initial load times without
          sacrificing visual impact. Interactive class schedules and contact
          forms are embedded through Gymdesk’s widget API, giving site visitors
          a frictionless way to book sessions or get in touch. Finally, I
          optimized meta tags and structured markup for SEO, ensuring the site
          ranks well for local searches and delivers an accessible,
          user-friendly experience from desktop to smartphone.
        </p>
      );
    },
  },
  {
    description: "King Charles Cavaliers",
    title: "Timless Rustic Acres",
    src: Timeless,
    ctaText: "Visit",
    ctaLink: "https://www.timelessrusticacres.com",
    content: () => {
      return (
        <p>
          A modern single-page application designed to connect prospective
          owners with CKC-registered Cavalier King Charles Spaniel puppies
          through an interactive gallery, detailed puppy profiles, and a
          streamlined contact form. Built using Vite + React 18 with React
          Router enabling seamless client-side navigation , styled end-to-end
          with Tailwind CSS and Flowbite UI components (via flowbite-react) ,
          and deployed to GitHub Pages for fast, CDN-backed performance.
        </p>
      );
    },
  },

  {
    description: "Blog",
    title: "My Simple Blog Page",
    src: SimpleBlog,
    ctaText: "Visit",
    ctaLink: "https://my-simple-blog-page.netlify.app/",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br />
          Their songs often reflect themes of aggression, social issues, and
          personal struggles, capturing the essence of the heavy metal genre.
          With a career spanning over four decades, Metallica has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United States and abroad.
        </p>
      );
    },
  },
];
