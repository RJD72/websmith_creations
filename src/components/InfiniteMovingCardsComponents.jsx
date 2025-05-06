import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const InfiniteMovingCardsComponent = () => {
  return (
    <section
      className="h-[35rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden mb-30 lg:mb-0"
      id="testimonials"
    >
      <h2 className="text-3xl mb-20 font-semibold">Testimonials</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
};

const testimonials = [
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
export default InfiniteMovingCardsComponent;
