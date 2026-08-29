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
        shadow ? "shadow-lg shadow-black/60 bg-[#0d0d0d]" : "bg-[#0d0d0d]"
      } fixed right-0 px-[30px] md:px-[100px] h-[70px] md:h-[100px] w-full z-[1000] flex items-center justify-between text-white transition-all duration-300 ease-out border-b border-white/5`}
    >
      <div className="font-poppins font-bold text-[24px] tracking-tight">HabibFnc</div>

      <ul
        className={`md:flex gap-2 md:items-center md:pb-0 pb-12 px-[30px] absolute md:static bg-[#0d0d0d] w-full md:w-auto transition-all duration-300 ease-in ${
          nav ? "top-[70px]" : "top-[-490px]"
        }`}
      >
        <li className="nav-item p-2 text-sm md:text-base hover:text-[#3BF686] transition-colors duration-200">
          <Link
            to="home"
            smooth={true}
            duration={700}
            offset={-100}
            spy={true}
            activeClass="text-[#3BF686]"
            onClick={() => setNav(false)}
          >
            Home
          </Link>
        </li>

        <li className="nav-item p-2 text-sm md:text-base hover:text-[#3BF686] transition-colors duration-200">
          <Link
            to="about"
            smooth={true}
            duration={700}
            offset={-100}
            spy={true}
            activeClass="text-[#3BF686]"
            onClick={() => setNav(false)}
          >
            About
          </Link>
        </li>

        <li className="nav-item p-2 text-sm md:text-base hover:text-[#3BF686] transition-colors duration-200">
          <Link
            to="skills"
            smooth={true}
            duration={700}
            offset={-100}
            spy={true}
            activeClass="text-[#3BF686]"
            onClick={() => setNav(false)}
          >
            Skills
          </Link>
        </li>

        <li className="nav-item p-2 text-sm md:text-base hover:text-[#3BF686] transition-colors duration-200">
          <Link
            to="projects"
            smooth={true}
            duration={700}
            offset={-100}
            spy={true}
            activeClass="text-[#3BF686]"
            onClick={() => setNav(false)}
          >
            Projects
          </Link>
        </li>

        <li className="nav-item p-2 text-sm md:text-base hover:text-[#3BF686] transition-colors duration-200">
          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-100}
            spy={true}
            activeClass="text-[#3BF686]"
            onClick={() => setNav(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div
        className="flex md:hidden text-2xl font-bold cursor-pointer"
        onClick={() => setNav(!nav)}
      >
        {!nav ? <AiOutlineMenu /> : <IoClose />}
      </div>
    </div>
  );
};

export default Navbar;
