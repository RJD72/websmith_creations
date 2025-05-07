import Avatar from "../assets/avatar2.jpeg";
import Javascript from "../assets/icons/javascript-48.png";
import Nodejs from "../assets/icons/nodejs-48.png";
import Vite from "../assets/icons/vite-48.png";

const About = () => {
  return (
    <section className="mb-30" id="about">
      <h2 className="text-3xl text-center mb-20 font-semibold">About</h2>
      <div
        className="w-full h-full m-auto flex items-center justify-center"
        id="about"
      >
        <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
          {/* Image */}
          <div className="lg:w-[80%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
            <div className="relative">
              {/* Side Img  */}
              {/* <img
              className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
              src={Javascript}
              alt="Side Image"
            /> */}

              {/* Side Img  */}
              {/* <img
              className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
              src={Nodejs}
              alt="Side Image 2"
            /> */}

              {/* Side Img  */}
              {/* <img
              className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
              src={Vite}
              alt="Side Image 3"
            /> */}

              {/* Main Img */}
              <img
                className="rounded-full relative object-cover right-0 sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-gray-300 mr-4"
                src={Avatar}
                alt="Rob Deer, freelance web and mobile developer"
              />
            </div>

            <div className="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-base/40 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
              <p className="sm:px-2 leading-[1.6]">
                Hi, I'm Rob — a passionate web developer and mobile app
                developer with a love for building ideas into reality. While I
                currently work in the construction industry, I'm working toward
                transitioning full-time into the world of development, where I
                can bring digital visions to life. <br />
                <br /> My journey into tech started early. As a kid, I owned a
                keyboard that connected to a TV, where I would spend hours
                typing out code from computer magazines and saving it onto
                cassette tapes. That early spark of creativity and
                problem-solving never left me — it just evolved into creating
                websites and apps. <br />
                <br />
                Today, I specialize in using technologies like HTML, CSS,
                JavaScript, React, Node.js, MongoDB, SQL, and Firebase. I’m
                always pushing myself to learn more and stay at the edge of new
                developments in the field. <br />
                <br /> What drives me most is the satisfaction of seeing the
                final product — the moment when an idea transforms into
                something real, functional, and impactful. Outside of coding, I
                enjoy playing guitar, working out, and finding new adventures to
                embark on. <br />
                <br /> I'm currently focused on continually growing my skills
                and building a freelance business that blends web and mobile
                development. I'm excited to see where this journey leads — and
                I'm always ready for the next challenge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
