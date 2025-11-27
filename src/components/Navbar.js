import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) setShadow(true);
      else setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={`${
        shadow ? "shadow-xl shadow-slate-900" : ""
      } fixed right-0 px-[30px] md:px-[100px] bg-black-2 h-[70px] md:h-[100px] w-full z-[1000] flex items-center justify-between text-white`}
    >
      <div className="font-poppins font-bold text-[24px]">HabibFnc</div>

      <ul
        className={`md:flex gap-2 md:items-center md:pb-0 pb-12 px-[30px] absolute md:static bg-black-2 w-full md:w-auto transition-all duration-300 ease-in ${
          nav ? "top-[70px]" : "top-[-490px]"
        }`}
      >
        <li className="nav-item p-2">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setNav(false)}
          >
            Home
          </Link>
        </li>

        <li className="nav-item p-2">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setNav(false)}
          >
            About
          </Link>
        </li>

        <li className="nav-item p-2">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setNav(false)}
          >
            Skills
          </Link>
        </li>

        <li className="nav-item p-2">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setNav(false)}
          >
            Projects
          </Link>
        </li>

        <li className="nav-item p-2">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setNav(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div
        className="flex md:hidden text-2xl font-bold"
        onClick={() => setNav(!nav)}
      >
        {!nav ? <AiOutlineMenu /> : <IoClose />}
      </div>
    </div>
  );
};

export default Navbar;
