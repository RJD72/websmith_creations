import HuronBjjImage from "../assets/huronbjj.png";
import TimelessImage from "../assets/timeless.png";
import DpMusicImage from "../assets/dpmusic.png";
import {
  FaArrowTrendUp,
  FaLaptopCode,
  FaMobileScreenButton,
  FaScrewdriverWrench,
} from "react-icons/fa6";

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
];

export const projects = [
  {
    name: "Huron BJJ",
    slug: "huron-bjj",
    internalUrl: "/case-studies/huron-bjj/",
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
    slug: "timeless-rustic-acres",
    internalUrl: "/case-studies/timeless-rustic-acres/",
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
    slug: "dp-music-therapy",
    internalUrl: "/case-studies/dp-music-therapy/",
    type: "Music therapy practice",
    url: "https://www.dpmusictherapy.com/index.html",
    image: DpMusicImage,
    imageAlt: "DP Music Therapy website shown on desktop and mobile screens",
    imageWidth: 1902,
    imageHeight: 947,
    description:
      "A calm, reassuring website that makes therapy services easier to understand and gives families, individuals and facilities a clear route to connect.",
    features: [
      "Clearly organized service information",
      "Responsive, accessible page structure",
      "Direct contact pathways",
    ],
    technologies: ["Responsive design", "HTML5", "Tailwind CSS", "JavaScript"],
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

const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project])
);

export const caseStudies = {
  "huron-bjj": {
    ...projectsBySlug["huron-bjj"],
    headline: "A clear, action-focused website for Huron BJJ.",
    overview:
      "Huron BJJ is a martial arts academy in Goderich, Ontario, offering programs for children, teens and adults. Its responsive website gives prospective members a straightforward way to learn about the academy and choose a next step.",
    needsIntro:
      "The website needed to organize a growing range of information without making first-time visitors work to find the essentials.",
    needs: [
      "Explain the academy’s programs for different ages and interests",
      "Make schedules and practical class information easy to find",
      "Keep free-class and membership actions visible throughout the journey",
      "Connect sign-up activity with the academy’s Gymdesk system",
    ],
    approach: [
      "The content was organized around the questions a prospective member is most likely to ask: which program fits, when classes run and how to get started.",
      "Responsive layouts, clear calls to action and focused program pages keep those answers usable from a phone or a larger screen. Gymdesk links connect interested visitors directly with the academy’s existing sign-up workflow.",
    ],
    result:
      "The delivered site brings programs, schedules, free-class information and membership actions into one consistent experience that reflects the academy’s community.",
    testimonial: testimonials[0],
  },
  "timeless-rustic-acres": {
    ...projectsBySlug["timeless-rustic-acres"],
    headline:
      "A warm, easy-to-explore website for Timeless Rustic Acres.",
    overview:
      "Timeless Rustic Acres raises Cavalier King Charles Spaniels. Its website gives prospective families a welcoming place to learn about the breeding program, view puppies and make contact.",
    needsIntro:
      "The website needed to balance visual warmth with simple navigation and practical information for prospective puppy owners.",
    needs: [
      "Introduce the breeding program clearly and personally",
      "Present puppy information and photography in an inviting gallery",
      "Keep navigation comfortable across mobile and desktop screens",
      "Provide a direct, uncomplicated way to ask questions",
    ],
    approach: [
      "The design uses the client’s imagery and a warm visual tone to keep the puppies and breeding program at the centre of the experience.",
      "Reusable React pages and responsive navigation organize profiles, galleries and contact information without overcomplicating the path through the site.",
    ],
    result:
      "The delivered site gives the breeding program a professional online home with clear puppy information, accessible navigation and a simple contact experience.",
    testimonial: testimonials[2],
  },
  "dp-music-therapy": {
    ...projectsBySlug["dp-music-therapy"],
    headline: "A calm, accessible website for DP Music Therapy.",
    overview:
      "DP Music Therapy provides music therapy, adapted lessons, recreation classes and related services. The website presents those options in a reassuring, understandable structure.",
    needsIntro:
      "The website needed to help individuals, families and facilities understand a varied service offering and find the right contact pathway.",
    needs: [
      "Explain music therapy and related programs in plain language",
      "Organize service information for different visitors and settings",
      "Support comfortable reading and navigation on mobile devices",
      "Make availability and contact pathways easy to locate",
    ],
    approach: [
      "The page structure separates programs and supporting information into clear, descriptive sections so visitors can scan before reading in depth.",
      "Responsive layouts, semantic headings and visible contact actions support a calmer experience across screen sizes and input methods.",
    ],
    result:
      "The delivered site gives DP Music Therapy a responsive, reassuring place to explain its services and guide visitors toward contact.",
    testimonial: null,
  },
};

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
