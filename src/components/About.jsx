// "use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Avatar from "../assets/avatar.jpeg";

const About = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-black dark:text-white">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none"></span>
            </h2>
          </>
        }
      >
        <img
          src={Avatar}
          alt="hero"
          className="rounded-2xl object-cover h-48 object-left-top "
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};
export default About;
