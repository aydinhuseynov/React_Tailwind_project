import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import { MdOutlineLanguage } from "react-icons/md";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 left-0 right-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className=" flex space-x-14 items-center">
            <a
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
              href="/"
            >
              <img
                className="w-10 inline-block items-center "
                src={Logo}
                alt="logo"
              />
              <span>XYZ</span>
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link activeClass="active" spy={true} smooth={true} offset={-100} key={link} to={path} className="block hover:text-gray-300">
                  {link}
                </Link>
              ))}
            </ul>
          </div>
          {/* Language and signup */}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <MdOutlineLanguage className="mr-2" /> <span>Language</span>
            </a>
            <button className="bg-secondary py-2 px-4 rounded transition-all duration-300 hover:text-white hover:bg-indigo-600">
              Sign up
            </button>
          </div>
          {/* menu btn only display on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`md:hidden space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl 
      ${isMenuOpen ? " block fixed top-0 right-0 left-0" : "hidden"} `}
      >
        {navItems.map(({ link, path }) => (
          <Link onClick={toggleMenu} activeClass="active" spy={true} smooth={true} offset={-80} key={link} to={path}
           className="block text-white hover:text-gray-300">
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
