import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-100 md:px-10">
      <div className="navbar-start">
        <div className="flex justify-center items-center">
          <a href="/" className="mr-4">
            <img src={Logo} className="h-24" />
          </a>
          <h2 className="hidden lg:inline text-2xl">WebSmith Creations</h2>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Skills & Technology</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Personal Timeline</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Services Offered</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn hover:border-[#dd9224]  bg-sky-600 hover:bg-base-100  text-white font-semibold text-lg rounded-full">
          Contact
        </a>
      </div>
    </div>
  );
};
export default Header;
