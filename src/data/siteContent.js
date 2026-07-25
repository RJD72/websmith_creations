import HuronBjjImage from "../assets/huronbjj.png";
import TimelessImage from "../assets/timeless.png";
import {
  FaArrowTrendUp,
  FaLaptopCode,
  FaMobileScreenButton,
  FaScrewdriverWrench,
} from "react-icons/fa6";

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export const projects = [
  {
    name: "Huron BJJ",
    type: "Martial arts academy",
    url: "https://huronbjj.com/",
    image: HuronBjjImage,
    imageAlt: "Huron BJJ website shown on desktop and mobile screens",
    imageWidth: 1896,
    imageHeight: 974,
    description:
      "A responsive local-business website that helps prospective members understand the academy, explore its programs and find the right next step.",
    features: [
      "Clear program and schedule information",
      "Prominent free-class and sign-up actions",
      "Gymdesk sign-up integration",
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
  },
  {
    name: "Timeless Rustic Acres",
    type: "Cavalier King Charles Spaniel breeder",
    url: "https://timelessrusticacres.com/",
    image: TimelessImage,
    imageAlt:
      "Timeless Rustic Acres website shown on desktop and mobile screens",
    imageWidth: 1895,
    imageHeight: 965,
    description:
      "A warm, easy-to-navigate website that introduces the breeding program and gives prospective families a clear way to view puppies and get in touch.",
    features: [
      "Puppy profiles and image gallery",
      "Simple, responsive navigation",
      "Straightforward contact experience",
    ],
    technologies: ["React", "Vite", "React Router", "Tailwind CSS"],
  },
  {
    name: "DP Music Therapy",
    type: "Music therapy practice",
    url: "https://www.dpmusictherapy.com/index.html",
    image: null,
    imageAlt: "",
    description:
      "A calm, reassuring website that makes therapy services easier to understand and gives families, individuals and facilities a clear route to connect.",
    features: [
      "Clearly organized service information",
      "Responsive, accessible page structure",
      "Direct contact pathways",
    ],
    technologies: ["Responsive design", "HTML", "CSS"],
  },
];

export const services = [
  {
    title: "Small-business websites",
    description:
      "Thoughtful design and responsive development that make your business look credible and help customers act with confidence.",
    icon: FaLaptopCode,
  },
  {
    title: "Redesigns and improvements",
    description:
      "A clearer, faster and more polished experience for websites that no longer represent the quality of the business behind them.",
    icon: FaArrowTrendUp,
  },
  {
    title: "Maintenance and support",
    description:
      "Dependable updates, practical guidance and ongoing care to keep your website useful after launch.",
    icon: FaScrewdriverWrench,
  },
  {
    title: "Mobile app prototypes",
    description:
      "Focused React Native and Expo prototypes that turn a mobile-app idea into something tangible and testable.",
    icon: FaMobileScreenButton,
  },
];

export const processSteps = [
  {
    title: "Discover",
    description:
      "We talk through your business, customers, goals and what the website needs to accomplish.",
  },
  {
    title: "Plan and design",
    description:
      "I organize the content and shape a visual direction that feels right for your business.",
  },
  {
    title: "Build and refine",
    description:
      "The design becomes a responsive website, with clear check-ins and room for practical feedback.",
  },
  {
    title: "Launch and support",
    description:
      "After final checks, your site goes live and you have a real person to contact when you need help.",
  },
];

export const testimonials = [
  {
    quote:
      "WebSmith Creations is top of the line! Rob created our website and we couldn't be happier!",
    name: "Sarah Garrity",
    title: "Co-owner of Huron BJJ",
  },
  {
    quote:
      "Big shoutout to @rob.deer, our blue belt and the mastermind behind the design. As a Jiu-Jitsu practitioner himself, Rob understands the energy, culture, and community of our gym, allowing him to perfectly capture our vibe on the site. If you need a professional website that truly reflects your brand, reach out to him on Facebook at WebSmith Creations!",
    name: "Shaun Garrity",
    title: "Co-owner of Huron BJJ",
  },
  {
    quote:
      "Rob from Websmith Creations completely exceeded our expectations with our new website! We wanted a site that captured the charm and warmth of our King Charles Cavalier puppies, and Rob delivered exactly that. The design is beautiful, easy to navigate, and truly reflects the heart of our breeding program. What really stood out was Rob’s patience—he took the time to walk us through every step, even though we’re not tech-savvy. If you need a website that works as hard as you do, Rob is the best in the business!",
    name: "Mike & Angie",
    title: "Owners of Timeless Rustic Acres",
  },
];

export const skillGroups = [
  {
    title: "Front end",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  { title: "Mobile", items: ["React Native", "Expo"] },
  {
    title: "Back end and data",
    items: ["Node.js", "Express", "MongoDB", "SQL", "Firebase"],
  },
  {
    title: "Tools and deployment",
    items: ["Git", "Vite", "VS Code", "GitHub Pages"],
  },
];
