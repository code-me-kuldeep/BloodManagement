import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/blood-type-b.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-[#FFFFFF] fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1> */}
          <img className="h-12 w-12 mr-2" src={logo} alt="" />
          <ul className="hidden md:flex font-bold text-1xl">
            <li>
              <Link
                to="Hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Eligibility"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Eligibility
              </Link>
            </li>
            <li>
              <Link to="" spy={true} smooth={true} offset={50} duration={500}>
                Blood Urgency
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <NavLink
          to='Login'
            className="border-2  bg-blue-900 text-[#ffffff] px-8 py-3 mr-4"
          >
            Login
          </NavLink>

          <NavLink to='Register2' className="px-8 py-3">
            Register
          </NavLink>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-[#FFFFFF] w-full px-8"}>
        <li className="border-b-2 border-[#F0F0F0] w-full">
          <Link to="Hero" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-[#F0F0F0] w-full">
          <Link to="About" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="border-b-2 border-[#F0F0F0] w-full">
          <Link
            to="Eligibility"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Eligibility
          </Link>
        </li>
        <li className="border-b-2 border-[#F0F0F0] w-full">
          <Link to="bu" spy={true} smooth={true} offset={50} duration={500}>
            Blood Urgency
          </Link>
        </li>
        <li className="border-b-2 border-[#F0F0F0] w-full">
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <NavLink
          to="Login"
            className="border-2 text-black px-8 py-3 mr-4"
          >
            Login
          </NavLink>

          <NavLink
          to="Register2"
            className="px-8 py-3"
          >
            Register
          </NavLink>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
