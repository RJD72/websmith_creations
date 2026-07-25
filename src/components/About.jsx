import Avatar from "../assets/avatar2.png";
import SectionHeading from "./SectionHeading";

const About = () => (
  <section className="section section--tinted" id="about">
    <div className="container about-grid">
      <div className="about-portrait">
        <img
          src={Avatar}
          alt="Rob Deer, independent web and mobile developer"
          width="1232"
          height="1318"
          loading="lazy"
        />
        <div>
          <strong>Rob Deer</strong>
          <span>Independent web & mobile developer</span>
        </div>
      </div>
      <div className="about-copy">
        <SectionHeading
          eyebrow="About WebSmith"
          title="Personal service, backed by hands-on work."
        />
        <p>
          I’m Rob, the independent developer behind WebSmith Creations. I help
          small businesses turn their ideas and expertise into professional,
          responsive websites that are clear for customers and manageable for
          the people who own them.
        </p>
        <p>
          My interest in building things with code started with a childhood
          keyboard connected to the family TV, typing programs from computer
          magazines and saving them to cassette tapes. That curiosity now shows
          up in practical problem-solving, careful design and dependable
          communication with clients.
        </p>
        <p>
          Because you work directly with me, the person learning about your
          business is also the person designing, developing and supporting your
          website.
        </p>
        <a className="text-link" href="#contact">
          Tell me about your project
        </a>
      </div>
    </div>
  </section>
);

export default About;
