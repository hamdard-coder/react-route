import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/react.svg";

const Navbar = () => {
  return (
    <>
      <header className="absolute top-0 left-0 z-50 w-full">
        <nav className=" mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/20 bg-white/80 px-6 py-4 my-2 sm:mx-16 backdrop-blur-md">
          <NavLink
            to="/"
            className="text-2xl font-bold text-black flex space-x-1 justify-center items-center w-full sm:flex sm:w-full sm:justify-start"
          >
            <img src={logo} alt="logo" />
            <span>HAMDARD</span>
          </NavLink>

          <ul className="hidden gap-8 sm:flex">
            <li>
              <NavLink to="/home" className="text-black">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-black">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="text-black">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-black">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
