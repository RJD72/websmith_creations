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
              About Me
            </h2>
          </>
        }
      >
        <div className=" flex justify-center md:block">
          <img
            src={Avatar}
            alt="hero"
            className="rounded-2xl h-64 object-center sm:float-left mr-4 mb-4"
            draggable={false}
          />
        </div>
        <div className="">
          <p className="indent-4 text-lg leading-8">
            Hi, I'm Rob — a passionate web developer and mobile app developer
            with a love for building ideas into reality. While I currently work
            in the construction industry, I'm working toward transitioning
            full-time into the world of development, where I can bring digital
            visions to life.
          </p>
          <br />
          <p className="indent-4 text-lg leading-8">
            My journey into tech started early. As a kid, I owned a keyboard
            that connected to a TV, where I would spend hours typing out code
            from magazines and saving it onto cassette tapes. That early spark
            of creativity and problem-solving never left me — it just evolved
            into creating websites and apps.{" "}
          </p>
          <br />
          <p className="indent-4 text-lg leading-8">
            {" "}
            Today, I specialize in using technologies like HTML, CSS,
            JavaScript, React, Node.js, MongoDB, SQL, and Firebase. I’m always
            pushing myself to learn more and stay at the edge of new
            developments in the field. What drives me most is the satisfaction
            of seeing the final product — the moment when an idea transforms
            into something real, functional, and impactful. Outside of coding, I
            enjoy playing guitar, working out, and finding new adventures to
            embark on.
          </p>
          <br />
          <p className="indent-4 text-lg leading-8">
            {" "}
            I'm currently focused on continually growing my skills and building
            a freelance business that blends web and mobile development. I'm
            excited to see where this journey leads — and I'm always ready for
            the next challenge.
          </p>
        </div>
      </ContainerScroll>
    </div>
  );
};
export default About;
