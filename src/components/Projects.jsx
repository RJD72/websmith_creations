import { AnimatedTestimonials } from "./ui/animated-testimonials";
import HuronBJJ from "../assets/huronbjj.png";
import Timeless from "../assets/timeless.png";
import SimpleBlog from "../assets/simpleblog.png";

const Projects = () => {
  const testimonials = [
    {
      quote:
        "I designed and built a fully responsive, multi-page website for Huron Brazilian Jiu-Jitsu, crafting every page with semantic HTML5 and modern CSS3 to ensure clarity and maintainability. Leveraging Bootstrap 5’s grid system and utility classes, I created a mobile-first layout that adapts seamlessly across all screen sizes,while custom CSS refinements reinforce the club’s brand identity. To boost performance, I implemented lazy-loading for images via a concise vanilla JavaScript snippet, reducing initial load times without sacrificing visual impact. Interactive class schedules and contact forms are embedded through Gymdesk’s widget API, giving site visitors a frictionless way to book sessions or get in touch. Finally, I optimized meta tags and structured markup for SEO, ensuring the site ranks well for local searches and delivers an accessible, user-friendly experience from desktop to smartphone..",
      name: "Huron BJJ",
      designation: "https://www.huronbjj.com",
      src: HuronBJJ,
    },
    {
      quote:
        "A modern single-page application designed to connect prospective owners with CKC-registered Cavalier King Charles Spaniel puppies through an interactive gallery, detailed puppy profiles, and a streamlined contact form. Built using Vite + React 18 with React Router enabling seamless client-side navigation , styled end-to-end with Tailwind CSS and Flowbite UI components (via flowbite-react), and deployed to GitHub Pages for fast, CDN-backed performance.",
      name: "Timeless Rustic Acres",
      designation: "https://www.timelessrusticacres.com",
      src: Timeless,
    },
    {
      quote:
        "A full‑stack blogging application that lets users register, write, edit, and comment on posts through a smooth, single‑page interface. The front‑end is built with React and Vite for blazing‑fast hot modulere placement and lean production bundles, using React Router to handle client‑side navigation without full page reloads. The back‑end runs on Express.js, exposing RESTful endpoints secured with JSON Web Tokens to manage authentication and CRUD operations. With its clear separation between client/ and server/, this project delivers a maintainable, high‑performance solution for content creators.",
      name: "Simple Blog",
      designation: "https://my-simple-blog-page.netlify.app/",
      src: SimpleBlog,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
};
export default Projects;
