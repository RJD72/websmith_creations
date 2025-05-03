"use client";
import { ThreeDMarquee } from "./ui/3d-marquee";

const Hero = () => {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  return (
    <div className="relative mx-auto flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <h1 className="relative z-20 mx-auto max-w-4xl text-center  font-bold text-balance text-white text-4xl lg:text-6xl">
        Custom Websites & Mobile Apps Built to Make You{" "}
        <span className="rounded-lg bg-sky-600/40 underline decoration-[10px] underline-offset-[16px] decoration-sky-600 inline-block px-4">
          Stand
        </span>{" "}
        Out
      </h1>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-2xl text-neutral-200">
        I'm a freelance web and mobile developer helping small businesses turn
        ideas into high-performance websites and modern mobile apps — optimized
        for speed, design, and SEO.
      </p>
      <div className="relative z-20 flex flex-col  md:flex-row items-center justify-center gap-4 pt-4">
        <button className="rounded-full bg-sky-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-base-100 hover:border-1 hover:border-[#dd9224] focus:ring-2  focus:ring-offset-2 focus:ring-offset-black focus:outline-none cursor-pointer">
          Get a Free Quote
        </button>
        <button className="rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/20 hover:border-[#dd9224]  focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none cursor-pointer">
          View My Work
        </button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 min-h-screen w-full"
        images={images}
      />
    </div>
  );
};

export default Hero;
