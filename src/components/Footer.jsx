import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/websmithcreations/"
            target="_blank"
            className="cursor-pointer"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61555314021587"
            target="_blank"
            className="cursor-pointer"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          WebSmith Creations
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
