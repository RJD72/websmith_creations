import React from "react";
import IconGrid from "./IconGrid";
import {
  SiJavascript,
  SiReact,
  SiFirebase,
  SiMongodb,
  SiExpo,
  SiExpress,
  SiVite,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skills = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: TbBrandReactNative, name: "React Native" },
    { icon: SiExpo, name: "Expo" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: FaGitAlt, name: "Git" },
    { icon: VscVscode, name: "VS Code" },
    { icon: SiExpress, name: "Express JS" },
    { icon: SiVite, name: "Vite" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    // Add more as needed
  ];

  return (
    <section className="py-10 px-5 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Skills & Technologies
      </h2>
      <IconGrid skills={skills} />
    </section>
  );
};

export default Skills;
