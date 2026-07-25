import { useState } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineMail } from "react-icons/hi";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setFeedback("");

    try {
      await emailjs.send(
        "service_1e19qhi",
        "template_sdedvq3",
        { name, email, message },
        "KSPBJcgwe5nJjFjlI"
      );
      setStatus("success");
      setFeedback("Thanks for reaching out. Your message has been sent.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback(
        "Something went wrong while sending your message. Please try again."
      );
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-intro">
          <SectionHeading
            eyebrow="Start a conversation"
            title="Have a website project in mind?"
            description="Tell me a little about your business, what you need help with and what a successful website would make easier. I’ll get back to you to talk through the next step."
          />
          <div className="contact-prompt">
            <span aria-hidden="true">01</span>
            <p>Your business and who you serve</p>
            <span aria-hidden="true">02</span>
            <p>What your current website is missing</p>
            <span aria-hidden="true">03</span>
            <p>What you’d like customers to do next</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-field">
            <label htmlFor="contact-name">Full name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Tell me about your project</label>
            <textarea
              id="contact-message"
              name="message"
              rows="6"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </div>
          <button
            className="button button--primary form-submit"
            type="submit"
            disabled={status === "sending"}
          >
            <HiOutlineMail aria-hidden="true" />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <p
            className={`form-feedback form-feedback--${status}`}
            role="status"
            aria-live="polite"
          >
            {feedback}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
